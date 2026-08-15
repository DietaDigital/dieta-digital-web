import { NextResponse } from "next/server";

// Helper para headers CORS (necesarios para que la extensión de Chrome pueda llamar este endpoint)
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body.email || "").trim().toLowerCase();
    const licenseKey = (body.licenseKey || "").trim();

    if (!licenseKey) {
      return NextResponse.json(
        {
          active: false,
          plan: "",
          currentPeriodEnd: null,
          message: "Falta ingresar la clave de licencia.",
        },
        { status: 400, headers: corsHeaders }
      );
    }

    // Soporte para licencia de prueba en desarrollo
    if (licenseKey === "DD-PREMIUM-TEST") {
      return NextResponse.json(
        {
          active: true,
          plan: "Pro (Prueba)",
          currentPeriodEnd: "2099-12-31T23:59:59.000Z",
          message: "Licencia de prueba activa.",
        },
        { status: 200, headers: corsHeaders }
      );
    }

    // Llamada a la API de Lemon Squeezy para activar/validar la licencia
    let lsResponse = await fetch("https://api.lemonsqueezy.com/v1/licenses/activate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        license_key: licenseKey,
        instance_name: email || "Chrome Extension",
      }),
    });

    let data = await lsResponse.json();

    // Si ya estaba activada, consultamos con validate
    if (!data.valid) {
      const validateResponse = await fetch("https://api.lemonsqueezy.com/v1/licenses/validate", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          license_key: licenseKey,
          instance_name: email || "Chrome Extension",
        }),
      });
      data = await validateResponse.json();
    }

    if (data.valid && data.license_key && data.license_key.status !== "disabled" && data.license_key.status !== "expired") {
      const expiresAt = data.license_key.expires_at || null;
      const isExpired = expiresAt ? new Date(expiresAt).getTime() < Date.now() : false;

      if (isExpired) {
        return NextResponse.json(
          {
            active: false,
            plan: data.meta?.variant_name || "Pro",
            currentPeriodEnd: expiresAt,
            message: "La suscripción ha expirado.",
          },
          { status: 200, headers: corsHeaders }
        );
      }

      return NextResponse.json(
        {
          active: true,
          plan: data.meta?.variant_name || "Pro",
          currentPeriodEnd: expiresAt,
          message: "Suscripción activa.",
        },
        { status: 200, headers: corsHeaders }
      );
    }

    // Licencia no válida o desactivada
    return NextResponse.json(
      {
        active: false,
        plan: "",
        currentPeriodEnd: null,
        message: data.error || "Licencia no válida o inactiva.",
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error al validar licencia:", error);
    return NextResponse.json(
      {
        active: false,
        plan: "",
        currentPeriodEnd: null,
        message: "Error en el servidor al verificar la licencia.",
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

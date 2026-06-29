import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { sitePaused } from "@/lib/config";

export function proxy(request: NextRequest) {
  if (!sitePaused) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname === "/pausa" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/pausa", request.url));
}

export const config = {
  matcher: ["/((?!api).*)"]
};

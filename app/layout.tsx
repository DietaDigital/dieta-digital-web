import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { sitePaused } from "@/lib/config";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Dieta Digital | Personaliza lo que ves en redes sociales",
    template: "%s | Dieta Digital"
  },
  description: site.description,
  metadataBase: new URL(site.url),
  robots: sitePaused
    ? {
        index: false,
        follow: false
      }
    : undefined
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {sitePaused ? null : <Header />}
        <main>{children}</main>
        {sitePaused ? null : <Footer />}
      </body>
    </html>
  );
}

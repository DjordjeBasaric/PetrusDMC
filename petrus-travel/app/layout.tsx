import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins, Montserrat, Playfair_Display } from "next/font/google";
import { getHtmlLangFromHeaders } from "@/lib/i18n";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Petrus Travel | Montenegro DMC",
  description:
    "Montenegro Destination Management Company for travel agencies and tour operators — Petrus Travel.",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL ?
      new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = getHtmlLangFromHeaders(headersList);

  return (
    <html lang={locale} className={`${poppins.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}

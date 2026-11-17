import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import { site } from "./content";
import "./globals.css";

// Display face: name, headings, role and project names, figures.
// The width axis is loaded so the CSS can set it slightly wide (font-stretch).
const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
});

// Text face: everything else.
const text = Public_Sans({
  variable: "--font-text",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.summary,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.summary,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.summary,
    images: ["/og.png"],
  },
  icons: {
    icon: "/eshaan.jpg",
  },
};

export const viewport: Viewport = {
  // Lets the page paint under the notch; .wrap and .nav add the safe-area padding back.
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import { site } from "./content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.summary,
  openGraph: {
    title: site.title,
    description: site.summary,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.summary,
  },
  icons: {
    icon: "/eshaan.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

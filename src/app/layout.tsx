import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { Providers } from "./providers";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollStabilizer } from "./components/ScrollStabilizer";
import "./globals.css";

const manropeSans = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope-sans",
  weight: "200 800",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IKEN Technology — Product Engineering Partner",
  description:
    "From product discovery to full-scale delivery — IKEN engineers software, apps, and technology partnerships that scale with your ambitions. Based in Cairo, Egypt.",
  metadataBase: new URL("https://ikentech.netlify.app"),
  openGraph: {
    title: "IKEN Technology — Product Engineering Partner",
    description:
      "From product discovery to full-scale delivery — IKEN engineers software, apps, and technology partnerships that scale with your ambitions.",
    url: "https://ikentech.netlify.app",
    siteName: "IKEN Technology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKEN Technology — Product Engineering Partner",
    description:
      "From product discovery to full-scale delivery — IKEN engineers software, apps, and technology partnerships that scale with your ambitions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manropeSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <ScrollStabilizer />
        <ScrollToTop />
      </body>
    </html>
  );
}

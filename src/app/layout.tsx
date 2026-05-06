import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "./providers";
import "./globals.css";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      </body>
    </html>
  );
}

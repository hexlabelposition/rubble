import { Manrope } from "next/font/google";

import type { ReactNode } from "react";
import type { Metadata } from "next";

import "./global.css";

const manrope = Manrope({
  variable: "--next-font-manrope",
  subsets: ["latin"],
  style: "normal",
  // weight: [], Don't use. Variable font.
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Rubble - Real Estate Platform",
  description:
    "Discover, Buy, and Sell Properties with Ease on Rubble - Your Ultimate Real Estate Platform.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="text-primary-500 font-sans font-medium">{children}</body>
    </html>
  );
}

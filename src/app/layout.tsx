import { Manrope } from "next/font/google";

import type { ReactNode } from "react";

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

import "./global.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}

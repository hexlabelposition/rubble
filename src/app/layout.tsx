import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

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

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth antialiased`}>
      <body className="text-primary-500 font-sans font-medium">{children}</body>
    </html>
  );
}

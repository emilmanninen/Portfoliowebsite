import type { Metadata } from "next";
import { Figtree, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Design system calls for GT Walsheim Medium (display) — a licensed font not supplied in the
// handoff — substituted with Figtree, the closest open geometric-humanist match. Loaded via
// next/font so the font is self-hosted and subset at build time (no CDN request, no
// render-blocking @import, no layout shift while it loads).
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emil Manninen — Junior Fullstack Developer",
  description:
    "Portfolio of Emil Manninen, a junior fullstack developer based in Finland.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

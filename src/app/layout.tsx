import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BAMA Studios — Local-First AI for Every Device",
  description:
    "Independent edge-AI engineering lab building quantization-native language models and local-first software for budget and mid-range Android phones, Windows PCs, and mobile GPUs. Zero cloud calls, accounts, or paywalls.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--bg-void)] text-[var(--ink-primary)] font-sans selection:bg-[var(--accent-cobalt)] selection:text-white">
        {children}
      </body>
    </html>
  );
}

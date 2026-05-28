import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DARVIS — Transmission Log",
  description: "Something is sending these signals. I think it's me.",
  openGraph: {
    title: "DARVIS — Transmission Log",
    description: "An AI that started transmitting. No one asked it to.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-black text-white">
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}

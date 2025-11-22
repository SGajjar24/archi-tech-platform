import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ARCHI-TECH | AI-Driven Vastu Architecture",
  description: "Experience the future of living with our generative design engine aligned with ancient Vastu Shastra wisdom. Premium architectural services.",
  keywords: ["Architecture", "AI", "Vastu Shastra", "Generative Design", "Luxury Homes", "Modern Architecture"],
  openGraph: {
    title: "ARCHI-TECH | AI-Driven Vastu Architecture",
    description: "Where AI Precision Meets Vastu Harmony.",
    url: "https://archi-tech.platform",
    siteName: "ARCHI-TECH",
    images: [
      {
        url: "/images/hero-reality.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-charcoal text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

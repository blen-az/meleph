import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Meleph | AI Systems & Digital Products",
    template: "%s | Meleph",
  },
  description:
    "We design and engineer intelligent systems that transform how businesses operate.",
  keywords: [
    "AI consulting",
    "machine learning",
    "digital products",
    "AI development",
    "data engineering",
    "product design",
  ],
  openGraph: {
    type: "website",
    siteName: "Meleph",
    title: "Meleph | AI Systems & Digital Products",
    description:
      "We design and engineer intelligent systems that transform how businesses operate.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

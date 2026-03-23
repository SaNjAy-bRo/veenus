import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veenus Wellness & Slimming Center | Khammam",
  description: "Khammam's foremost wellness and slimming center offering advanced body slimming and skin care services.",
};

export const viewport: Viewport = {
  themeColor: "#1C0434",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-primary-900 text-slate-100 selection:bg-gold-500/30 selection:text-gold-300">
        {/* Animated Background Overlay */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-800)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_var(--color-primary-700)_0%,_transparent_50%)] opacity-50 mix-blend-screen pointer-events-none"></div>
        {/* Sparkle Texture Overlay */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

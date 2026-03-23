import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
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

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
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
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-primary-900 text-slate-100 selection:bg-gold-500/30 selection:text-gold-200">
        {/* Animated Background Overlay */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-800),_transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-primary-700),_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-stardust pointer-events-none"></div>
        </div>
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

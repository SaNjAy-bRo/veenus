"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-gold-500/20 ${
        isScrolled ? "glass-panel py-3 shadow-xl" : "bg-primary-900 py-5 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="font-serif text-3xl font-bold tracking-wider text-gradient-gold">
              Veenus
            </span>
            <span className="text-[0.65rem] tracking-widest uppercase text-slate-300 mt-0.5">
              Wellness & Slimming
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-slate-200 hover:text-gold-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-gold-600 to-gold-400 text-primary-900 font-bold text-sm tracking-widest uppercase px-6 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gold-400 hover:text-gold-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-panel border-t border-gold-500/20 transition-all duration-300 origin-top transform ${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-4 text-center text-base uppercase tracking-widest text-slate-200 hover:text-gold-400 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 flex justify-center">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-gold-600 to-gold-400 text-primary-900 font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full shadow-lg"
            >
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

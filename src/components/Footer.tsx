import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, MessageCircle, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary-900 border-t border-gold-500/20 pt-16 pb-8 overflow-hidden">
      {/* Background star accents */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gold-500/0 via-gold-500/20 to-gold-500/0"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-gold-500/0 via-gold-500/20 to-gold-500/0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="inline-block relative w-[300px] h-[110px] md:w-[420px] md:h-[150px] group">
              <Image 
                src="/Veenus.png" 
                alt="Veenus Wellness & Slimming Center" 
                fill 
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 mt-2 text-base leading-relaxed text-center md:text-left">
              Khammam's foremost wellness and slimming center offering advanced body slimming and skin care services with safe, proven, and painless services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl text-gold-400 mb-6 relative">
              Explore
              <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-gold-600"></span>
            </h3>
            <ul className="space-y-4 text-center md:text-left text-base text-slate-300">
              <li><Link href="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-gold-400 transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl text-gold-400 mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-gold-600"></span>
            </h3>
            <div className="space-y-4 text-base text-slate-300">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <span className="text-center md:text-left">
                  Opp. More Supermarket,<br />
                  Beside Sriven Toyota, Bypass Road,<br />
                  Khammam, Telangana 507002
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <Link href="tel:+917337330044" className="hover:text-gold-400 transition-colors">+91 733733 0044</Link>
              </div>
              
              <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
                <a href="https://wa.me/917661089797" target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 p-2 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/veenuswellness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-[#E1306C]/10 p-2 rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="mailto:veenuswellness2026@gmail.com" className="bg-gold-500/10 p-2 rounded-full text-gold-400 hover:bg-gold-500 hover:text-primary-900 transition-all duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Veenus Wellness & Slimming Center. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-gold-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

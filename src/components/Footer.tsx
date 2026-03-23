import Link from "next/link";
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
            <Link href="/" className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-serif text-4xl font-bold tracking-wider text-gradient-gold drop-shadow-lg">
                Veenus
              </span>
              <span className="text-[0.7rem] tracking-widest uppercase text-slate-300 mt-1">
                Wellness & Slimming Center
              </span>
            </Link>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed text-center md:text-left">
              Khammam's foremost wellness and slimming center offering advanced body slimming and skin care services with safe, proven, and painless treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl text-gold-400 mb-6 relative">
              Explore
              <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-gold-600"></span>
            </h3>
            <ul className="space-y-3 text-center md:text-left text-sm text-slate-300">
              <li><Link href="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-gold-400 transition-colors">Our Treatments</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl text-gold-400 mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-gold-600"></span>
            </h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
                <span className="text-center md:text-left">
                  H.No: 11-11-184/13/9/A/1, 3rd Floor, <br/>
                  Bypass Road, Near New Bus Stand, <br/>
                  Bhuranpuram, Khammam, <br/>
                  Telangana - 507001
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <a href="tel:+917661089797" className="hover:text-gold-400">766 108 9797</a>
                <span className="text-gold-700">|</span>
                <a href="tel:+919652655908" className="hover:text-gold-400">96526 55908</a>
              </div>
              
              <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
                <a href="https://wa.me/917661089797" target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 p-2 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
                  <MessageCircle size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#E1306C]/10 p-2 rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="mailto:info@veenuswellness.com" className="bg-gold-500/10 p-2 rounded-full text-gold-400 hover:bg-gold-500 hover:text-primary-900 transition-all duration-300">
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

"use client";

import SectionTitle from "@/components/SectionTitle";
import { MapPin, Phone, MessageCircle, Mail, Map } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24 relative overflow-hidden">
      {/* Decorative large shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-700/20 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SectionTitle title="Get in Touch" subtitle="We'd love to hear from you" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          
          {/* Contact Details Board */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 relative overflow-hidden group hover:border-gold-500/60 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent pointer-events-none" />
              <div className="flex items-start gap-5">
                <div className="mt-1 p-3 bg-primary-800 rounded-full text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gold-400 font-serif text-2xl mb-2">Visit Us</h3>
                  <p className="text-slate-300 leading-relaxed font-light">
                    H.No: 11-11-184/12/9/A/1,<br/>
                    3rd Floor, Bypass Road,<br/>
                    Near New Bus Stand, Bhuranpuram,<br/>
                    Khammam, Telangana - 500001
                  </p>
                  <p className="mt-4 text-gold-500/80 font-serif tracking-widest text-sm">
                    GST No: 36ASBPVI164FIZI
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-gold-500/20 relative overflow-hidden">
              <div className="flex items-start gap-5">
                <div className="mt-1 p-3 bg-primary-800 rounded-full text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gold-400 font-serif text-2xl mb-3">Call or Text</h3>
                  <div className="space-y-3">
                    <a href="tel:+917661089797" className="flex items-center text-slate-300 hover:text-white transition-colors group/link text-lg">
                      <span className="font-light tracking-wide inline-block group-hover/link:translate-x-1 transition-transform">766 108 9797</span>
                    </a>
                    <a href="tel:+919652655908" className="flex items-center text-slate-300 hover:text-white transition-colors group/link text-lg">
                      <span className="font-light tracking-wide inline-block group-hover/link:translate-x-1 transition-transform">96526 55908</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <a href="https://wa.me/917661089797" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:bg-white hover:text-[#25D366] transition-all duration-300 uppercase tracking-widest text-sm">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href="mailto:veenuswellness2026@gmail.com" className="flex-1 flex items-center justify-center gap-2 glass-panel border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-primary-900 px-6 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 uppercase tracking-widest text-sm">
                <Mail size={20} /> Email Us
              </a>
            </div>
          </div>

          {/* Map Placeholder / Aesthetic Area */}
          <div className="lg:col-span-3 h-[500px] lg:h-auto rounded-3xl overflow-hidden glass-panel border border-gold-500/20 relative flex items-center justify-center shadow-2xl group">
             {/* Map Graphic representing luxury location map */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] mix-blend-overlay border border-white/5 transition-opacity duration-700 group-hover:opacity-30"></div>
             
             <div className="text-center z-10 pointer-events-none p-8 relative">
               <div className="inline-flex bg-primary-900 p-6 rounded-full text-gold-500 mb-6 shadow-[0_0_40px_rgba(212,175,55,0.4)] animate-pulse-slow">
                 <Map className="w-12 h-12" />
               </div>
               <h3 className="font-serif text-3xl text-gradient-gold drop-shadow-lg mb-2">Find Us in Khammam</h3>
               <p className="text-slate-400 font-light max-w-sm mx-auto">Veenus is centrally located for your ultimate convenience and care.</p>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

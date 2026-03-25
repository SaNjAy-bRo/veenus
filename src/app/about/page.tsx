import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { Sparkles, Shield, HeartHandshake, Award } from "lucide-react";

export default function About() {
  const values = [
    { title: "Luxurious Environment", desc: "A serene, welcoming space designed to make you feel completely at ease.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Safe & Proven", desc: "100% safe, non-invasive services clinically proven for absolute effectiveness.", icon: <Shield className="w-6 h-6" /> },
    { title: "10+ Years Expert Care", desc: "Painless procedures performed by our team of 10+ years experienced therapists who prioritize your well-being.", icon: <HeartHandshake className="w-6 h-6" /> },
    { title: "Multi-Award Winning", desc: "Recognized as Khammam's foremost destination for premium wellness & slimming services.", icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      {/* Hero Section of About */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
              About <span className="text-gradient-gold">Veenus</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Situated in the heart of Khammam, Veenus Wellness & Slimming Center is a sanctuary of transformation and rejuvenation. We believe that true wellness stems from a harmonious balance of advanced aesthetic technology and profound care.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our clinic offers state-of-the-art body slimming, specialized laser hair reduction, and tailored skin care services. Managed by a team of 10+ years experienced therapists in a meticulously curated environment, we proudly boast safe, proven, and completely painless services guaranteeing visible results.
            </p>
          </div>
          
          <div className="relative h-96 lg:h-[600px] w-full rounded-3xl glass-panel flex items-center justify-center p-2 shadow-[0_0_40px_rgba(45,10,70,0.8)]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden filter grayscale-[30%] sepia-[10%]">
              <Image 
                src="/images/carousel-5.jpg" 
                alt="Veenus Clinic Ambience" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-primary-900/40 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Badge - Redesigned to be non-clipped and more premium */}
            <div className="absolute -bottom-6 -left-6 z-30 bg-primary-900/90 backdrop-blur-xl p-6 rounded-2xl border border-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.2)] animate-float-slow group/badge">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-600 to-gold-400 rounded-2xl opacity-20 blur group-hover/badge:opacity-40 transition-opacity"></div>
              <div className="relative">
                <span className="font-serif text-5xl text-gradient-gold font-bold block mb-1">100%</span>
                <span className="text-white tracking-[0.2em] text-[10px] uppercase font-bold">Painless Results</span>
                <div className="mt-2 h-0.5 w-12 bg-gold-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-primary-800/20 py-24 relative overflow-hidden">
        {/* Glow behind section */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-700)_0%,_transparent_100%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title="The Veenus Standard" subtitle="Our Philosophy" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl text-center group hover:bg-gold-500/5 transition-all duration-500 border border-transparent hover:border-gold-500/30">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-900 border border-gold-500/40 text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                  {v.icon}
                </div>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-300 transition-colors">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

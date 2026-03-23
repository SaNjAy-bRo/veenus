import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Star, ShieldCheck, Activity, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

const carouselImages = Array.from({ length: 9 }, (_, i) => `/images/carousel-${i + 1}.jpg`);

const services = [
  { id: 1, title: "Body Slimming", desc: "Advanced treatments for inch loss and targeted body contorting.", icon: <Activity /> },
  { id: 2, title: "Belly Fat Burn", desc: "Melt away stubborn belly fat with safe, non-invasive technology.", icon: <Activity /> },
  { id: 3, title: "Hip & Thigh Reduction", desc: "Achieve visible results fast in 5-10 sessions.", icon: <Activity /> },
  { id: 4, title: "Detox & Metabolism", desc: "Boost your body's natural fat-burning capabilities safely.", icon: <Heart /> },
  { id: 5, title: "CoolSculpting", desc: "Freeze away stubborn fat. Permanent reduction, no surgery, no downtime.", icon: <ShieldCheck /> },
  { id: 6, title: "Cavitation Therapy", desc: "Safe, non-invasive body shaping using ultrasound technology.", icon: <ShieldCheck /> },
  { id: 7, title: "Laser Hair Reduction", desc: "Silky smooth skin with permanent 100% painless hair reduction.", icon: <Star /> },
  { id: 8, title: "Perfect Beard Shape", desc: "Sharp jawline look, permanent maintenance, no razor cuts.", icon: <Star /> },
  { id: 9, title: "Microblading", desc: "Perfect eyebrows tailored to your unique facial structure.", icon: <Star /> },
  { id: 10, title: "EMS Sculpting", desc: "Build muscle and burn fat simultaneously.", icon: <Activity /> },
];

const testimonials = [
  { name: "Priya S.", comment: "The CoolSculpting treatment worked wonders! Painless and visible results in just a few sessions.", rating: 5 },
  { name: "Rahul M.", comment: "Got laser hair removal and a perfect beard shape. I haven't cut myself with a razor in months. Worth every penny.", rating: 5 },
  { name: "Anitha V.", comment: "Veenus Wellness is completely professional. The belly fat burn treatment gave me back my confidence.", rating: 5 },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Auto Scrolling Background */}
        <div className="absolute inset-0 z-0 flex whitespace-nowrap opacity-20 hover:opacity-10 transition-opacity duration-1000">
          <div className="animate-[carousel_40s_linear_infinite] flex gap-4 pr-4 h-full py-8 items-center">
            {/* Double the array for infinite smooth scrolling */}
            {[...carouselImages, ...carouselImages].map((img, idx) => (
              <div key={idx} className="relative h-64 sm:h-80 md:h-96 w-64 md:w-96 rounded-2xl overflow-hidden shrink-0 filter grayscale-[50%] sepia-[20%] hue-rotate-[-30deg]">
                <Image
                  src={img}
                  alt={`Veenus Center Treatment ${idx}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 glass-panel-light text-gold-400 text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in">
            <Star className="w-4 h-4" />
            <span>Khammam's Foremost Wellness Center</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in-up">
            Rediscover <br />
            <span className="text-gradient-gold">Your Best Self</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
            Advanced body slimming and skin care services with safe, proven, and painless treatments for effective results in a luxurious and welcoming environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#services"
              className="bg-transparent border border-gold-500 text-gold-400 font-bold tracking-widest uppercase px-8 py-4 rounded-full hover-gold-glow hover:bg-gold-500 hover:text-primary-900 transition-all duration-300"
            >
              Explore Treatments
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-gold-600 to-gold-400 text-primary-900 font-bold tracking-widest uppercase px-8 py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              Book A Session
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Offer Banner */}
      <section className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 py-4 shadow-2xl relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <span className="animate-pulse flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-bold text-primary-900 uppercase tracking-widest text-sm md:text-base">Limited Time Offer</span>
          </div>
          <p className="font-serif text-xl md:text-2xl font-bold text-primary-900 hidden sm:block">
            Get Up To 50% OFF
          </p>
          <Link href="/contact" className="text-primary-900 font-bold border-b-2 border-primary-900 pb-0.5 hover:text-white hover:border-white transition-colors uppercase text-sm tracking-wider">
            Claim Offer
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Treatments" 
            subtitle="Premium Wellness Services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.desc}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center">
            <p className="inline-flex glass-panel-light px-6 py-2 rounded-full text-gold-300 text-sm font-semibold tracking-wider uppercase mb-8">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Visible Results in 5-10 Sessions
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-800/30 border-t border-gold-500/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Patient Stories" 
            subtitle="Real Results"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((test, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl relative">
                <div className="flex text-gold-500 mb-4">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{test.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-primary-900 font-bold font-serif text-lg shadow-inner">
                    {test.name.charAt(0)}
                  </div>
                  <span className="font-bold text-white tracking-wide">{test.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import HeroCarousel from "@/components/HeroCarousel";
import { Star, ShieldCheck, Activity, Heart, CheckCircle2, Quote } from "lucide-react";

const carouselImages = Array.from({ length: 9 }, (_, i) => `/images/carousel-${i + 1}.jpg`);

const services = [
  { id: "body-slimming", title: "Body Slimming", desc: "Advanced services for inch loss and targeted body contorting.", img: "/images/carousel-1.jpg" },
  { id: "belly-fat-burn", title: "Belly Fat Burn", desc: "Melt away stubborn belly fat with safe, non-invasive technology.", img: "/images/carousel-2.jpg" },
  { id: "hip-thigh-reduction", title: "Hip & Thigh Reduction", desc: "Achieve visible results fast in 5-10 sessions.", img: "/images/carousel-4.jpg" },
  { id: "coolsculpting", title: "CoolSculpting", desc: "Freeze away stubborn fat. Permanent reduction, no surgery, no downtime.", img: "/images/carousel-3.jpg" },
  { id: "cavitation-therapy", title: "Cavitation Therapy", desc: "Safe, non-invasive body shaping using ultrasound technology.", img: "/images/carousel-5.jpg" },
  { id: "laser-hair-reduction", title: "Laser Hair Reduction", desc: "Silky smooth skin with permanent 100% painless hair reduction.", img: "/images/carousel-6.jpg" },
  { id: "perfect-beard-shape", title: "Perfect Beard Shape", desc: "Sharp jawline look, permanent maintenance, no razor cuts.", img: "/images/carousel-8.jpg" },
  { id: "microblading", title: "Microblading", desc: "Perfect eyebrows tailored to your unique facial structure.", img: "/images/carousel-7.jpg" },
];

const testimonials = [
  { name: "Priya S.", serviceName: "CoolSculpting", comment: "The CoolSculpting service worked wonders! Painless and visible results in just a few sessions. Highly recommend Veenus to anyone.", rating: 5 },
  { name: "Rahul M.", serviceName: "Laser Beard Shaping", comment: "Got laser hair removal and a perfect beard shape. I haven't cut myself with a razor in months. The luxurious environment makes every visit a treat.", rating: 5 },
  { name: "Anitha V.", serviceName: "Belly Fat Burn", comment: "Veenus Wellness is completely professional. The belly fat burn service gave me back my confidence. The staff is incredibly supportive.", rating: 5 },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section: Discrete Auto-Scroll Banner Gallery */}
      <section className="relative w-full h-[40vh] min-h-[300px] md:h-[85vh] md:min-h-[600px] flex items-center overflow-hidden border-b border-gold-500/20">
        <HeroCarousel images={carouselImages} />
      </section>

      {/* 2. Welcome Section */}
      <section className="py-16 md:py-24 relative z-10 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Only Title Title -> Appears above Image */}
          <div className="lg:hidden mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/30 bg-primary-800/50 text-gold-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              <Star className="w-5 h-5" />
              <span>Khammam's Premier Destination</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight">
              Welcome to your <span className="text-gradient-gold">Transformation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative h-[350px] md:h-[500px] w-full rounded-[2rem] overflow-hidden glass-panel border border-gold-500/20 shadow-2xl group order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent z-10"></div>
              <Image 
                src="/images/carousel-5.jpg" 
                alt="Welcome to Veenus" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-8 right-8 z-20 glass-panel bg-primary-900/80 p-6 rounded-2xl border-l-4 border-gold-500">
                <p className="font-serif text-3xl text-gold-400 font-bold">100%</p>
                <p className="text-white text-xs tracking-widest uppercase mt-1">Safe & Proven</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-8 order-2">
              {/* Desktop Only Title */}
              <div className="hidden lg:block space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/30 bg-primary-800/50 text-gold-400 font-semibold tracking-widest uppercase text-sm">
                  <Star className="w-5 h-5" />
                  <span>Khammam's Premier Destination</span>
                </div>
                <h2 className="font-serif text-6xl lg:text-7xl text-white font-bold leading-tight">
                  Welcome to your <span className="text-gradient-gold">Transformation</span>
                </h2>
              </div>
              <p className="text-slate-300 text-xl leading-relaxed font-light">
                At Veenus Wellness & Slimming Center, we merge luxurious comfort with state-of-the-art aesthetic technology. Our mission is to help you rediscover your best self through personalized, non-invasive services.
              </p>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                Whether you seek targeted inch loss, permanent hair reduction, or advanced body sculpting, our expert team provides completely painless procedures guaranteed to deliver visible results in just 5-10 sessions.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/about" className="glass-panel text-gold-400 items-center justify-center filter text-center font-bold uppercase tracking-widest text-xs sm:text-sm px-6 py-4 rounded-full border border-gold-500 hover:bg-gold-500 hover:text-primary-900 transition-all duration-300">
                  Read Our Story
                </Link>
                <Link href="/contact" className="bg-gradient-to-r text-center filter from-gold-600 to-gold-400 text-primary-900 font-bold uppercase tracking-widest items-center justify-center text-xs sm:text-sm px-6 py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300">
                  Book A Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offer Banner */}
      <section className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 py-4 shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary-900 uppercase tracking-widest text-base">Limited Time Offer</span>
          </div>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary-900 text-center sm:text-left leading-tight">
            Get Up To 50% OFF All Premium Services
          </p>
          <Link href="/contact" className="text-primary-900 font-bold border-b-2 border-primary-900 pb-0.5 hover:text-white hover:border-white transition-colors uppercase text-sm sm:text-base tracking-wider">
            Claim Offer Now
          </Link>
        </div>
      </section>

      {/* Services Grid (Mapped to /services) */}
      <section id="services" className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Services" 
            subtitle="Explore Premium Services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.desc}
                img={service.img}
                delay={index * 0.1}
                href={`/services#${service.id}`}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services" className="inline-flex glass-panel px-8 py-4 rounded-full text-gold-300 text-sm font-semibold tracking-widest uppercase border border-gold-500/30 hover:bg-gold-500/10 transition-colors">
              View All Services In Detail
            </Link>
          </div>
        </div>
      </section>

      {/* Redesigned Testimonials */}
      <section className="py-16 md:py-24 relative z-10 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Patient Stories" 
            subtitle="Hear From Our Clients"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            {testimonials.map((test, i) => (
              <div key={i} className="relative glass-panel bg-primary-900/60 p-6 md:p-10 rounded-3xl border border-gold-500/20 shadow-2xl group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                {/* Large decorative quote mark */}
                <Quote className="absolute top-6 right-8 w-16 h-16 text-gold-500/10 group-hover:text-gold-500/20 transition-colors duration-500" />
                
                <div className="flex text-gold-500 mb-6">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current mr-1" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-10 leading-relaxed font-light relative z-10 flex-grow text-lg md:text-xl">"{test.comment}"</p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-primary-900 font-bold font-serif text-2xl shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-wide text-lg">{test.name}</h4>
                    <p className="text-gold-500 text-sm uppercase tracking-widest mt-1">{test.serviceName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const detailedServices = [
  { 
    id: "body-slimming", 
    title: "Body Slimming", 
    desc: "Advanced services designed to target specific areas of the body, providing safe inch loss and creating a beautifully contoured shape. Our non-invasive procedures break down fat cells while preserving surrounding tissues, giving you a slimmer, firmer physique effortlessly.", 
    img: "/images/body slimming.jpeg",
    benefits: ["Targeted inch loss", "Safe & non-invasive", "Firms and tones skin"]
  },
  { 
    id: "belly-fat-burn", 
    title: "Belly Fat Burn", 
    desc: "Melt away stubborn tummy fat with our specialized ultrasound and laser technology. Ideal for stubborn areas that resist diet and exercise, this service is comfortable, incredibly fast, and shows visible reduction in just a few sessions.", 
    img: "/images/belly fat burn.jpeg",
    benefits: ["Rapid visible results", "Zero downtime", "Targets exact problem areas"]
  },
  { 
    id: "hip-thigh-reduction", 
    title: "Hip & Thigh Reduction", 
    desc: "Achieve the proportionate figure you desire. Our hip and thigh reduction therapies effectively smooth cellulite and reduce excess fat deposits, tightening the skin and revealing a beautifully sculpted lower body.", 
    img: "/images/hip & thigh reduction.jpeg",
    benefits: ["Cellulite reduction", "Proportionate sculpting", "Skin tightening effects"]
  },
  { 
    id: "coolsculpting", 
    title: "CoolSculpting", 
    desc: "The world's #1 non-invasive fat-reduction procedure. Freeze away stubborn fat permanently without surgery or downtime. The targeted cooling technology safely crystallizes fat cells, which your body naturally eliminates over time.", 
    img: "/images/cool sculpting.jpeg",
    benefits: ["Permanent fat cell reduction", "FDA cleared safe", "No needles or surgery"]
  },
  { 
    id: "cavitation-therapy", 
    title: "Cavitation Therapy", 
    desc: "Using advanced ultrasound technology, Cavitation Therapy safely breaks down deep fat cells which are then metabolized and naturally disposed of by your body, offering remarkable shaping without the need for anesthesia.", 
    img: "/images/caviation therapy.jpeg",
    benefits: ["Deep fat penetration", "Ultrasound precision", "Completely painless"]
  },
  { 
    id: "laser-hair-reduction", 
    title: "Laser Hair Reduction", 
    desc: "Say goodbye to unwanted hair forever. Our advanced 100% safe and painless laser hair reduction system ensures silky smooth skin. Suitable for all skin types, giving you the freedom to wear what you want, when you want.", 
    img: "/images/laser hair reduction.jpeg",
    benefits: ["Permanent hair reduction", "Pain-free diode laser", "Prevents ingrown hairs"]
  },
  { 
    id: "perfect-beard-shape", 
    title: "Perfect Beard Shape with Laser", 
    desc: "Define your sharp jawline look permanently. Eliminate razor cuts, skin irritation, and the hassle of daily shaving. Laser beard shaping keeps your lines universally crisp and well-maintained effortlessly.", 
    img: "/images/perfect beard shape.jpeg",
    benefits: ["Crisp permanent lines", "No razor bumps", "Low maintenance"]
  },
  { 
    id: "microblading", 
    title: "Microblading", 
    desc: "Enhance your natural beauty with perfectly tailored, semi-permanent eyebrows. Our expert technicians analyze your facial structure to craft realistic, fuller brows that frame your face flawlessly every single day.", 
    img: "/images/microblading.jpeg",
    benefits: ["Natural looking fullness", "Customized to your face", "Lasts 12-24 months"]
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Our <span className="text-gradient-gold">Services</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-300 font-light leading-relaxed animate-fade-in">
          Explore our comprehensive range of luxurious, proven, and completely safe services designed to help you look and feel your absolute best.
        </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-24 lg:gap-32">
        {detailedServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section 
              key={service.id} 
              id={service.id} 
              className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full group"
            >
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
                    <Image 
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary-900/30 mix-blend-overlay"></div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 relative inline-block">
                      {service.title}
                      <span className="absolute -bottom-3 left-0 w-20 h-1 bg-gold-500 rounded-full"></span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed font-light mt-8">
                      {service.desc}
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
                    <h4 className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-slate-200">
                          <ArrowRight className="w-4 h-4 text-gold-500 mr-3 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/contact"
                    className="inline-flex glass-panel border-gold-500 text-gold-400 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-gold-500 hover:text-primary-900 transition-all duration-300"
                  >
                    Book This Service
                  </Link>
                </div>

              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

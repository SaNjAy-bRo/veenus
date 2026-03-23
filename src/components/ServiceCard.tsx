"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  img?: string;
  delay?: number;
  href?: string;
}

export default function ServiceCard({ title, description, icon, img, delay = 0, href = "#" }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      className="group relative glass-panel rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] animate-float block flex flex-col h-full bg-primary-900/60"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {img && (
        <div className="relative w-full h-56 overflow-hidden shrink-0 border-b border-gold-500/20">
          <Image 
            src={img} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/20 to-transparent"></div>
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow relative z-10">
        {/* Icon (if no image is provided, or as an accent) */}
        {!img && icon && (
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-800 border border-gold-500/30 text-gold-400 group-hover:bg-gold-500 group-hover:text-primary-900 transition-colors duration-500">
            {icon}
          </div>
        )}

        <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-gold-300 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {description && (
          <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow">
            {description}
          </p>
        )}

        {/* CTA Line */}
        <div className="flex items-center mt-auto text-base font-semibold tracking-widest uppercase text-gold-500 group-hover:text-gold-300 transition-colors">
          <span>Service Info</span>
          <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
        </div>
      </div>
    </Link>
  );
}

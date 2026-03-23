"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative glass-panel rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] animate-float"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial glow on hover */}
      <div 
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-500)_0%,_transparent_70%)] opacity-0 transition-opacity duration-700 pointer-events-none mix-blend-overlay ${isHovered ? 'opacity-10' : ''}`}
      />
      
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-800 border border-gold-500/30 text-gold-400 group-hover:bg-gold-500 group-hover:text-primary-900 transition-colors duration-500">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {description}
          </p>
        )}
      </div>

      {/* CTA Line */}
      <div className="flex items-center text-sm font-semibold tracking-widest uppercase text-gold-500 group-hover:text-gold-300 transition-colors">
        <span>Explore Treatment</span>
        <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroCarouselProps {
  images: string[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per slide
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden bg-primary-900">
      <div 
        className="flex w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full shrink-0">
            <Image
              src={img}
              alt={`Veenus Center Banner ${idx + 1}`}
              width={1920}
              height={800}
              className="w-full h-auto object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? "w-8 h-2 bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.8)]" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to banner ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import heroImage from 'figma:asset/16fdef5546a7184f019dfa5eb28f6441a86d48bd.png';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Der Weg beginnt"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quote Content - Top Right */}
      <div className="relative z-10 h-full flex items-start justify-end px-4 pt-20">
        <div className="max-w-xl">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-white/20">
            <p className="text-lg md:text-xl lg:text-2xl text-white italic leading-tight mb-8">
              "Bei gleicher Umgebung lebt doch jeder in einer anderen Welt"
            </p>
            <p className="text-[#FFB800] text-base md:text-lg">— Arthur Schopenhauer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
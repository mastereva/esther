import React from 'react';
import heroImage from 'figma:asset/90065f0ff224d010c7407cea9d90c4bef76f1a14.png';

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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70"></div>
      </div>

      {/* Quote Content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-10 md:p-20 border border-white/20">
            <p className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white italic leading-tight mb-8">
              "Bei gleicher Umgebung lebt doch jeder in einer anderen Welt"
            </p>
            <p className="text-[#FFB800] text-2xl md:text-3xl">— Arthur Schopenhauer</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
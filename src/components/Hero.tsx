import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import heroImage from 'figma:asset/90065f0ff224d010c7407cea9d90c4bef76f1a14.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Weg zur Selbstreflexion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">          
          {/* Quote */}
          <div className="mb-8 pb-8">
            <p className="text-2xl text-white italic leading-relaxed mb-3">
              "Bei gleicher Umgebung lebt doch jeder in einer anderen Welt"
            </p>
            <p className="text-[#FFB800] text-sm">— Arthur Schopenhauer</p>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}
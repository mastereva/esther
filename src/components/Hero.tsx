import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import heroImage from 'figma:asset/90065f0ff224d010c7407cea9d90c4bef76f1a14.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          <div className="flex items-center space-x-3 mb-6">
            <Compass className="text-[#FFB800]" size={32} />
            <span className="text-[#FFB800] tracking-wide">
              Systemische Supervision, Coaching & Beratung
            </span>
          </div>
          
          {/* Quote */}
          <div className="mb-8 pb-8 border-b border-white/30">
            <p className="text-2xl text-white italic leading-relaxed mb-3">
              "Bei gleicher Umgebung lebt doch jeder in einer anderen Welt"
            </p>
            <p className="text-[#FFB800] text-sm">— Arthur Schopenhauer</p>
          </div>
          
          <h1 className="text-white mb-6">
            Willkommen auf meiner Homepage,<br />
            schön dass Sie da sind
          </h1>
          
          <p className="text-xl text-gray-200 mb-6 leading-relaxed">
            Bei Problemfokussierung verliert man manchmal die Möglichkeiten aus den Augen. 
            Ich biete Ihnen Unterstützung zur Selbstreflexion, um durch eigene Erkenntnisse 
            neue Handlungsspielräume zu eröffnen.
          </p>
          
          <p className="text-lg text-gray-300 mb-8">
            Sowohl im Einzel- als auch im Gruppensetting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FFB800] text-gray-900 rounded-lg hover:bg-[#FFB800]/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              Mehr erfahren
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
              <span className="text-white text-sm">DGSF-Zertifiziert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
              <span className="text-white text-sm">Hamburg & Umland</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
              <span className="text-white text-sm">20 Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
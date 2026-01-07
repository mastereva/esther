import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';

export function WelcomeSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Compass className="text-[#FFB800]" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Willkommen auf meiner Homepage,<br />
              schön dass Sie da sind
            </h1>
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-[#FFB800]">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Bei Problemfokussierung verliert man manchmal die Möglichkeiten aus den Augen. 
              Ich biete Ihnen Unterstützung zur Selbstreflexion, um durch eigene Erkenntnisse 
              neue Handlungsspielräume zu eröffnen.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 text-center italic">
              Sowohl im Einzel- als auch im Gruppensetting.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-10 py-5 bg-[#FFB800] text-gray-900 rounded-xl hover:bg-[#FFB800]/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group text-lg"
              >
                Kontakt aufnehmen
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-12 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#FFB800] rounded-full"></div>
              <span className="text-gray-700 text-lg">DGSF-Zertifiziert</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#FFB800] rounded-full"></div>
              <span className="text-gray-700 text-lg">Hamburg & Umland</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-[#FFB800] rounded-full"></div>
              <span className="text-gray-700 text-lg">20 Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

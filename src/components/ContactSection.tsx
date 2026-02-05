import React from 'react';
import selfieImage from 'figma:asset/74601a7e74d092984f8279b49f313f1bda68b61f.png';

export function ContactSection() {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#D1D9E6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Kontakt
          </h2>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Starten Sie Ihre Reise
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-4 border-[#FFB800] shadow-lg">
              <img src={selfieImage} alt="Eva Kohrs-Suvi" className="w-full h-full object-cover object-[center_30%]" />
            </div>
            
            <h3 className="text-3xl text-gray-900 mb-6">
              Nehmen Sie gerne Kontakt auf
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Vereinbaren Sie ein unverbindliches Erstgespräch. Gemeinsam finden wir heraus, 
              wie ich Sie optimal unterstützen kann.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-8 border-l-4 border-[#FFB800]">
              <p className="text-sm text-gray-600 mb-3">E-Mail-Adresse</p>
              <a
                href="mailto:e.kohrs-suvi@gmx.de"
                className="text-3xl text-[#FFB800] hover:text-[#FFA000] transition-colors break-all"
              >
                e.kohrs-suvi@gmx.de
              </a>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Absolute Vertraulichkeit und professionelle Schweigepflicht
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Flexible Termine und individuelle Vereinbarungen
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Vor Ort im Raum Hamburg & Nord-Östliches Umland oder online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
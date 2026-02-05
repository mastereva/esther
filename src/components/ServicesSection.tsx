import React from 'react';
import { User, Users, Presentation, MapPin, Check } from 'lucide-react';
import costsImage from 'figma:asset/f765f9cab17850519f34ae2306a5a7f6c02d8dfc.png';

export function ServicesSection() {
  return (
    <section id="services" style={{ backgroundColor: '#D1D9E6' }}>
      {/* Hero Banner with Quote */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={costsImage}
            alt="Wertschätzung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/30 to-gray-900/40"></div>
        </div>

        {/* Quote Overlay - Bottom Left Position */}
        <div className="relative z-10 h-full flex items-end justify-start px-4 pb-24">
          <div className="max-w-3xl text-left" style={{ marginLeft: '5cm' }}>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/20">
              <p className="text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed mb-4">
                "Ein freundliches Wort ist mehr wert als es kostet"
              </p>
              <p className="text-[#FFB800] text-base md:text-lg">— Ernst Ferstl</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24" style={{ backgroundColor: '#D1D9E6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Kosten
            </h2>
            <div className="w-24 h-1 bg-[#FFB800] mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Leistungen & Preise
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Einzelberatung */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-[#FFB800] to-[#FFA000] p-10 text-white">
                <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <User size={40} />
                </div>
                <h3 className="text-2xl mb-3">
                  Beratung / Coaching
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Einzelsetting
                </p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">80</span>
                  <span className="text-3xl ml-2">€</span>
                </div>
                <p className="text-white/80 mt-2">pro Stunde</p>
              </div>
              <div className="p-8 bg-gray-50">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Individuelle Begleitung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Vertraulicher Rahmen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Flexible Termingestaltung</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team-Supervision */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white relative">
                <div className="w-20 h-20 bg-[#FFB800]/20 rounded-xl flex items-center justify-center mb-6">
                  <Users size={40} className="text-[#FFB800]" />
                </div>
                <h3 className="text-2xl mb-3">
                  Supervision
                </h3>
                <p className="text-white/90 mb-4 text-lg">
                  Team- oder Fallsupervision
                </p>
                <p className="text-white/70 mb-6 text-sm">
                  3-12 Personen
                </p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">120</span>
                  <span className="text-3xl ml-2">€</span>
                </div>
                <p className="text-white/80 mt-2">pro Stunde</p>
              </div>
              <div className="p-8 bg-gray-50">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Teamentwicklung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Gemeinsame Fallreflexion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Konfliktbearbeitung</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Workshops */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 p-10 text-white">
                <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Presentation size={40} />
                </div>
                <h3 className="text-2xl mb-3">
                  Workshop
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Bis zu 20 Personen
                </p>
                <div className="text-3xl font-semibold mb-2">
                  Auf Anfrage
                </div>
                <p className="text-white/80">je nach Zeit und Aufwand</p>
              </div>
              <div className="p-8 bg-gray-50">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Themen aus der Sozialen Arbeit</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Praxisnah & lebhaft</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Individuell auf Ihr Team zugeschnitten</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-10 md:p-12 text-center shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <MapPin className="text-[#FFB800]" size={40} />
                <h3 className="text-3xl text-gray-900">
                  Flexibel für Sie da
                </h3>
              </div>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Gerne komme ich zu Ihnen im Raum Hamburg & Nord-Östliches Umland.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                  <span className="text-gray-700">Vor Ort bei Ihnen</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                  <span className="text-gray-700">Online via Video</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                  <span className="text-gray-700">Hamburg & Umgebung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
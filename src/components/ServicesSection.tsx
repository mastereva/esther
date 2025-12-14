import React from 'react';
import { User, Users, Presentation, Euro, MapPin, Check } from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image with Quote Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1710685375110-3b1f3bf8bb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHJlZmxlY3Rpb24lMjB3YXRlcnxlbnwxfHx8fDE3NjU2NTQxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-white"></div>
        
        {/* Quote Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-3xl md:text-4xl text-white italic leading-relaxed mb-4">
              "Ein freundliches Wort ist mehr wert als es kostet"
            </p>
            <p className="text-[#FFB800] text-xl">— Ernst Ferstl</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[450px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#FFB800]/10 text-[#FFB800] rounded-full mb-4">
            Leistungen & Preise
          </div>
          <h2 className="text-gray-900 mb-4">
            Was es kostet
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Einzelberatung */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-[#FFB800] to-[#FFA000] p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <User size={32} />
              </div>
              <h3 className="mb-2">
                Beratung / Coaching
              </h3>
              <p className="text-white/90 mb-4">
                Einzelsetting
              </p>
              <div className="flex items-baseline">
                <span className="text-4xl">80</span>
                <span className="text-2xl ml-1">€</span>
              </div>
              <p className="text-sm text-white/80 mt-2">pro Sitzung</p>
            </div>
            <div className="p-6 bg-gray-50">
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Individuelle Begleitung</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Vertraulicher Rahmen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Flexible Termingestaltung</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team-Supervision */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-4 border-[#FFB800]">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white relative">
              <div className="absolute top-4 right-4 bg-[#FFB800] text-gray-900 px-3 py-1 rounded-full text-xs">
                Beliebt
              </div>
              <div className="w-16 h-16 bg-[#FFB800]/20 rounded-lg flex items-center justify-center mb-4">
                <Users size={32} className="text-[#FFB800]" />
              </div>
              <h3 className="mb-2">
                Supervision
              </h3>
              <p className="text-white/90 mb-4">
                Team- oder Fallsupervision<br />
                3-12 Personen
              </p>
              <div className="flex items-baseline">
                <span className="text-4xl">120</span>
                <span className="text-2xl ml-1">€</span>
              </div>
              <p className="text-sm text-white/80 mt-2">pro Sitzung</p>
            </div>
            <div className="p-6 bg-gray-50">
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Teamentwicklung</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Gemeinsame Fallreflexion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Konfliktbearbeitung</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Workshops */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Presentation size={32} />
              </div>
              <h3 className="mb-2">
                Workshop
              </h3>
              <p className="text-white/90 mb-4">
                Bis zu 20 Personen
              </p>
              <div className="text-2xl">
                Auf Anfrage
              </div>
              <p className="text-sm text-white/80 mt-2">je nach Zeit und Aufwand</p>
            </div>
            <div className="p-6 bg-gray-50">
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Themen aus der Sozialen Arbeit</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Praxisnah & lebhaft</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="text-[#FFB800] flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Individuell auf Ihr Team zugeschnitten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 md:p-10 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MapPin className="text-[#FFB800]" size={32} />
              <h3 className="text-gray-900">
                Flexibel für Sie da
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Gerne komme ich zu Ihnen im Raum Hamburg & Nord-Östliches Umland.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                <span className="text-sm text-gray-700">Vor Ort bei Ihnen</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                <span className="text-sm text-gray-700">Online via Video</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                <span className="text-sm text-gray-700">Hamburg & Umgebung</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schwerpunkte */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-10">
          <h3 className="text-center text-gray-900 mb-8">
            Meine Schwerpunkte
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">SPFH</h4>
                <p className="text-sm text-gray-600">Sozialpädagogische Familienhilfe mit langjähriger Praxiserfahrung</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">Diversion</h4>
                <p className="text-sm text-gray-600">(Feministische) Diversionsarbeit und Ausgleich mit Geschädigten</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">Konstruktivismus</h4>
                <p className="text-sm text-gray-600">Besonderes Interesse an konstruktivistischen Ansätzen</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-gray-900 mb-1">Kommunikation</h4>
                <p className="text-sm text-gray-600">Fokus auf Kommunikationsstrukturen und -prozesse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

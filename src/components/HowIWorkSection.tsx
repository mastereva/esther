import React from 'react';
import { Compass, Heart, Lightbulb, Users } from 'lucide-react';

export function HowIWorkSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Image with Quote Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1615499847978-cf98484c8819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRoJTIwam91cm5leSUyMGhvcml6b258ZW58MXx8fHwxNzY1NjU0MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-[#FFB800]">
            <div className="mb-6">
              <Compass className="text-[#FFB800] mx-auto" size={48} />
            </div>
            <p className="text-3xl text-gray-800 italic leading-relaxed mb-4">
              "… die Geisteshaltung des Reisenden, der nicht das Bekannte sucht, 
              sondern dem gegenüber offen ist, was auf der Reise Geschieht."
            </p>
            <p className="text-[#FFB800]">— Gloria Steinem</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#FFB800]/10 text-[#FFB800] rounded-full mb-4">
            Wie ich arbeite
          </div>
          <h2 className="text-gray-900 mb-6">
            Gemeinsam auf Ihrer Reise
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ausgerüstet mit meinem systemischen Methodenkoffer begebe ich mich gerne 
              mit Ihnen auf die Reise. Ich lade Sie ein, Entwicklungsräume zu öffnen 
              und zu gestalten – Ihre Bedarfe geben die Richtung vor für den Weg, auf 
              dem ich Sie gerne begleite.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Meine wertschätzende, empathische und neugierige Haltung individueller 
              Lebensgestaltungen hilft Ihnen dabei, eigene Erkenntnisse Ihres Potenzials 
              für Lösungen zu entdecken und zu fördern.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#FFB800]">
            <div className="w-16 h-16 bg-[#FFB800]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-[#FFB800]" size={32} />
            </div>
            <h3 className="text-gray-900 mb-3">
              Wertschätzung & Empathie
            </h3>
            <p className="text-gray-600 text-sm">
              Meine Begleitung gibt Ihnen Orientierungssicherheit durch Zugewandtheit 
              und echtes Interesse an Ihrer individuellen Situation
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#FFB800]">
            <div className="w-16 h-16 bg-[#FFB800]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-[#FFB800]" size={32} />
            </div>
            <h3 className="text-gray-900 mb-3">
              Kreativität & Humor
            </h3>
            <p className="text-gray-600 text-sm">
              Freude an Kreativität und nicht zuletzt eine angemessene Portion Humor 
              zeichnen meine Arbeitsweise aus
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#FFB800]">
            <div className="w-16 h-16 bg-[#FFB800]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#FFB800]" size={32} />
            </div>
            <h3 className="text-gray-900 mb-3">
              DGSF-Standards
            </h3>
            <p className="text-gray-600 text-sm">
              Zusammenarbeit unter fachlichen und ethischen Standards gemäß der DGSF 
              im Rahmen von Beratung, Coaching oder Supervision
            </p>
          </div>
        </div>

        {/* Workshops Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4">
              Workshops für Teams
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Zudem biete ich Workshops für Teams zu verschiedenen Themen aus der 
              Sozialen Arbeit. Aufgrund meiner langjährigen Tätigkeit mit den Schwerpunkten 
              SPFH & Diversion gestalte ich diese lebhaft und praxisnah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

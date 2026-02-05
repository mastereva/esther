import React from 'react';
import { Compass, Heart, Lightbulb, Users } from 'lucide-react';
import howIWorkImage from 'figma:asset/6f48320161697ac4faff29bef5c8c2ebe2c1a788.png';
import dgsfLogo from 'figma:asset/99990b588519009cc34d05adda8f2ffbaf84ddf4.png';

export function HowIWorkSection() {
  return (
    <section id="how-i-work" style={{ backgroundColor: '#D1D9E6' }}>
      {/* Hero Banner with Quote */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={howIWorkImage}
            alt="Die Reise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/30 to-gray-900/40"></div>
        </div>

        {/* Quote Overlay - Center Top */}
        <div className="relative z-10 h-full flex items-start justify-center px-4 pt-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/20">
              <p className="text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed mb-4">
                "… die Geisteshaltung des Reisenden, der nicht das Bekannte sucht, 
                sondern dem gegenüber offen ist, was auf der Reise geschieht."
              </p>
              <p className="text-[#FFB800] text-base md:text-lg">— Gloria Steinem</p>
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
              Wie ich arbeite
            </h2>
            <div className="w-24 h-1 bg-[#FFB800] mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8 mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 md:p-12 shadow-lg border-l-4 border-[#FFB800]">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ausgerüstet mit meinem systemischen Methodenkoffer begebe ich mich gerne 
                mit Ihnen auf die Reise. Ich lade Sie ein, Entwicklungsräume zu öffnen 
                und zu gestalten – Ihre Bedürfnisse geben die Richtung vor für den Weg, auf 
                dem ich Sie gerne begleite.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Meine wertschätzende, empathische und neugierige Haltung gegenüber individueller 
                Lebensgestaltungen hilft Ihnen, eigene Erkenntnisse Ihres Potenzials 
                für Lösungen zu entdecken und zu fördern.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FFB800] group">
              <div className="w-20 h-20 bg-[#FFB800]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-[#FFB800]" size={40} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Wertschätzung & Empathie
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Meine Begleitung gibt Ihnen Orientierungssicherheit durch Zugewandtheit 
                und Interesse an Ihrer individuellen Situation
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FFB800] group">
              <div className="w-20 h-20 bg-[#FFB800]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="text-[#FFB800]" size={40} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">
                Kreativität & Humor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Freude an Kreativität und nicht zuletzt eine angemessene Portion Humor 
                zeichnen meine Arbeitsweise aus
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FFB800] group">
              <div className="w-20 h-20 bg-[#FFB800]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-[#FFB800]" size={40} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">
                DGSF-Standards
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Zusammenarbeit unter fachlichen und ethischen Standards gemäß der DGSF 
                im Rahmen von Beratung, Coaching oder Supervision
              </p>
              {/* DGSF Certificate */}
              <div className="mt-6 flex justify-center">
                <img src={dgsfLogo} alt="DGSF Zertifikat" className="w-32 h-32 object-contain" />
              </div>
            </div>
          </div>

          {/* Workshops Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl mb-6">
                Workshops für Teams
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Zudem biete ich Workshops für Teams zu verschiedenen Themen aus der 
                Sozialen Arbeit. Aufgrund meiner langjährigen Tätigkeit mit den Schwerpunkten 
                SPFH & Diversion gestalte ich diese lebhaft und praxisnah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import aboutImage from 'figma:asset/c83c3615130ad3e7c2b7802b57daaa70264bb945.png';

export function AboutSection() {
  const qualifications = [
    {
      date: 'April 2026',
      title: 'Systemische Supervisorin, Coach, Organisationsberaterin',
      institution: 'HISW',
    },
    {
      date: 'November 2011',
      title: 'Systemische Beraterin',
      institution: 'HISW',
    },
    {
      date: 'August 2008',
      title: 'Diplom Sozialpädagogin (FH)',
      institution: 'HAW Hamburg',
    },
    {
      date: 'Januar 2007',
      title: 'Konfrontative – Soziale – Trainerin (KST®)',
      institution: 'IKD Hamburg',
    },
  ];

  const additionalTraining = [
    'Kinderschutzfachkraft',
    'Arbeit mit alkoholbelasteten Familien',
    'Arbeit in Familien mit psychischer Erkrankung',
    'Arbeiten im Zwangskontext',
    'Trauma und Sucht',
    'Das Konzept der Ego-States',
    'Sozialpädagogische Familiendiagnostik',
  ];

  return (
    <section id="about" style={{ backgroundColor: '#D1D9E6' }}>
      {/* Hero Banner with Quote */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt="Neue Perspektiven und Freiheit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/30 to-gray-900/40"></div>
        </div>

        {/* Quote Overlay - Far Top Right Corner */}
        <div className="relative z-10 h-full flex items-start justify-end pr-4 pt-8">
          <div className="max-w-2xl">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <p className="text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed mb-4">
                "Aber glaubst du nicht, …, dass man Seeräuber und eine wirklich feine 
                Dame gleichzeitig werden kann?"
              </p>
              <p className="text-[#FFB800] text-base md:text-lg">— Pippi Langstrumpf</p>
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
              Über mich
            </h2>
            <div className="w-24 h-1 bg-[#FFB800] mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Wer ich bin
            </p>
          </div>

          {/* Personal Story - Timeline Style */}
          <div className="max-w-5xl mx-auto mb-20">
            {/* Introduction Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-[#FFB800]/10 to-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FFB800]">
                <h3 className="text-2xl text-gray-900 mb-4">Mein Weg</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ich, Jahrgang '68, habe mit fast 40 mein Diplom an der Fachhochschule 
                  Hamburg erhalten. Und davor? Lebenserfahrung in anderen Bereichen gesammelt.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-gray-900">
                <h3 className="text-2xl text-gray-900 mb-4">Meine Passion</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ich habe zwar spät studiert, dann aber mit Leidenschaft. Mein größtes 
                  Interesse gilt bis heute dem Konstruktivismus und der Kommunikation.
                </p>
              </div>
            </div>

            {/* Professional Journey */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-[#FFB800] mb-12">
              <h3 className="text-3xl text-gray-900 mb-8">Beruflicher Werdegang</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Während meines gesamten Berufslebens in der Sozialen Arbeit habe ich 
                    begleitend Fort- und Weiterbildungen absolviert – das zeichnet für mich 
                    Professionalität aus.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nunmehr bin ich seit 20 Jahren beim gleichen Träger beschäftigt. Mein 
                    Arbeitsfeld hat sich im Laufe der Jahre verschoben. Begonnen habe ich 
                    im Schwerpunkt mit (feministischer) Diversionsarbeit, anschließend habe 
                    ich viele Jahre als Sozialpädagogische Familienhilfe und 
                    Erziehungsbeistandschaft gearbeitet.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Aktuell arbeite ich überwiegend im Bereich Ausgleich mit Geschädigten 
                    im Rahmen des Jugendgerichtsgesetzes und mit einem geringen Anteil nach 
                    wie vor in der Familienhilfe.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-[#FFB800]/20 to-transparent rounded-xl p-6">
                  <p className="text-xl text-gray-800 italic leading-relaxed">
                    Mit der Weiterbildung zur systemischen Supervision, Coaching und 
                    Organisationsberatung hat sich mir ein weiteres Feld erschlossen. 
                    Lebenslanges Lernen ist für mich nicht nur eine Plattitüde.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications Timeline */}
          <div className="mb-20">
            <h3 className="text-4xl text-center text-gray-900 mb-12">
              Ausbildung & Qualifikationen
            </h3>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {qualifications.map((qual, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border-l-4 border-[#FFB800] group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#FFB800]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFB800]/20 transition-colors">
                      <GraduationCap className="text-[#FFB800]" size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-[#FFB800] mb-2 font-semibold">{qual.date}</p>
                      <h4 className="text-lg text-gray-900 mb-2 leading-snug">
                        {qual.title}
                      </h4>
                      <p className="text-gray-600">{qual.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Training */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-white shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <BookOpen className="text-[#FFB800]" size={40} />
                <h3 className="text-3xl md:text-4xl">
                  Fortbildungen seit 2008
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Ein Auszug aus meinen kontinuierlichen Weiterbildungen:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalTraining.map((training, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-200 leading-relaxed">{training}</span>
                  </div>
                ))}
                <div className="flex items-start space-x-3 bg-white/10 rounded-xl p-4">
                  <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-200 leading-relaxed">… und einiges mehr</span>
                </div>
              </div>
              <p className="text-gray-400 mt-8 italic">
                Sowie Teilnahme an verschiedenen Fachtagen der DGSF und anderen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
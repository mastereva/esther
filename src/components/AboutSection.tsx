import React from 'react';
import { Award, BookOpen, GraduationCap, Heart } from 'lucide-react';
import aboutImage from 'figma:asset/e5d9a5c1c34b6484880f5778195026e8e0e5d7d2.png';

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
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote over Image */}
        <div className="mb-20 relative">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={aboutImage}
              alt="Neue Perspektiven und Freiheit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>
            
            {/* Quote Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-4xl">
                <p className="text-2xl md:text-3xl text-white italic leading-relaxed mb-4">
                  "Aber glaubst du nicht, …, daß man Seeräuber und eine wirklich feine 
                  Dame gleichzeitig werden kann?"
                </p>
                <p className="text-[#FFB800] text-lg">— Pippi Langstrumpf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#FFB800]/10 text-[#FFB800] rounded-full mb-4">
            Über mich
          </div>
          <h2 className="text-gray-900 mb-4">
            Wer ich bin
          </h2>
        </div>

        {/* Personal Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ich, Jahrgang '68, habe mit fast 40 mein Diplom an der Fachhochschule 
              Hamburg erhalten. Und davor? Lebenserfahrungen gesammelt :)
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ich habe zwar spät studiert, dann aber mit Leidenschaft. Mein größtes 
              Interesse gilt bis heute dem Konstruktivismus und der Kommunikation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Während meines gesamten Berufslebens in der Sozialen Arbeit habe ich 
              begleitend Fort- und Weiterbildungen absolviert – das zeichnet für mich 
              Professionalität aus.
            </p>
            
            <div className="pt-6 border-t border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Nunmehr bin ich seit 20 Jahren beim gleichen Träger beschäftigt. Mein 
                Arbeitsfeld hat sich im Laufe der Jahre verschoben. Begonnen habe ich 
                im Schwerpunkt mit (feministischer) Diversionsarbeit, anschließend habe 
                ich viele Jahre lang als Sozialpädagogische Familienhilfe und 
                Erziehungsbeistandschaft gearbeitet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Aktuell arbeite ich überwiegend im Bereich Ausgleich mit Geschädigten 
                im Rahmen des Jugendgerichtsgesetzes und mit einem geringen Anteil nach 
                wie vor in der Familienhilfe.
              </p>
            </div>

            <div className="bg-[#FFB800]/10 rounded-lg p-6 mt-6">
              <p className="text-gray-800 italic">
                Mit der Weiterbildung zur systemischen Supervision, Coaching und 
                Organisationsberatung hat sich mir ein weiteres Feld erschlossen. 
                Lebenslanges Lernen ist für mich nicht nur eine Plattitüde.
              </p>
            </div>
          </div>
        </div>

        {/* Qualifications Timeline */}
        <div className="mb-16">
          <h3 className="text-center text-gray-900 mb-8">
            Ausbildung & Qualifikationen
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-[#FFB800]"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFB800]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-[#FFB800]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#FFB800] mb-1">{qual.date}</p>
                    <h4 className="text-gray-900 mb-1">
                      {qual.title}
                    </h4>
                    <p className="text-sm text-gray-600">{qual.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Training */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-white">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="text-[#FFB800]" size={32} />
              <h3>
                Fortbildungen seit 2008
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Ein Auszug aus meinen kontinuierlichen Weiterbildungen:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {additionalTraining.map((training, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white/10 rounded-lg p-3"
                >
                  <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-200">{training}</span>
                </div>
              ))}
              <div className="flex items-start space-x-3 bg-white/10 rounded-lg p-3">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-200">… und einiges mehr</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Sowie Teilnahme an verschiedenen Fachtagen der DGSF und anderen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Compass } from 'lucide-react';

export default function Welcome () {
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
        <section className='bg-[#ffebb8] relative min-h-screen flex items-center pt-20'>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">          
            <h1 className="mb-6">
            Willkommen auf meiner Homepage,<br />
            schön dass Sie da sind
          </h1>
          
          <p className="text-xl mb-6 leading-relaxed">
            Bei Problemfokussierung verliert man manchmal die Möglichkeiten aus den Augen. 
            Ich biete Ihnen Unterstützung zur Selbstreflexion, um durch eigene Erkenntnisse 
            neue Handlungsspielräume zu eröffnen.
          </p>
          
          <p className="text-lg mb-8">
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
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-lg bg-white text-gray-900 hover:bg-[#ffecbd] transition-all"
            >
              Mehr erfahren
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-between items-center gap-6 mt-12 pt-12 border-t border-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
              <span className="text-sm">DGSF-Zertifiziert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
              <span className="text-sm">Hamburg & Umland</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
              <span className="text-sm">20 Jahre Erfahrung</span>
            </div>
          </div>
            </div>
            </div>
        </section>
    )
}
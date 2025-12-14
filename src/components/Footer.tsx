import React from 'react';
import { Compass, Mail, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center">
                <Compass className="text-white" size={24} />
              </div>
              <span className="text-xl">
                Systemisches Coaching
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Beratung, Coaching und Supervision für Fachkräfte in der Sozialen Arbeit. 
              DGSF-zertifiziert mit Spezialisierung auf SPFH und Diversion im Raum Hamburg.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
              <span>Gemeinsam auf dem Weg zu neuen Perspektiven</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['Startseite', 'Über mich', 'Leistungen', 'Kontakt'].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(['home', 'about', 'services', 'contact'][index])}
                    className="text-gray-400 hover:text-[#FFB800] transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kontakt@systemisches-coaching.de"
                  className="flex items-center space-x-2 text-gray-400 hover:text-[#FFB800] transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>kontakt@systemisches-coaching.de</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4915112345678"
                  className="flex items-center space-x-2 text-gray-400 hover:text-[#FFB800] transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>+49 151 1234 5678</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Systemisches Coaching. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-6">
              <button className="text-sm text-gray-400 hover:text-[#FFB800] transition-colors">
                Impressum
              </button>
              <button className="text-sm text-gray-400 hover:text-[#FFB800] transition-colors">
                Datenschutz
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#FFB800]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FFB800] text-xs">DGSF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
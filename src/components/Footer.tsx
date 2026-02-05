import React from 'react';
import { Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center">
              <Compass className="text-white" size={24} />
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Beratung · Coaching · Supervision
          </p>
          <p className="text-gray-400 mb-6">
            E-Mail: <a href="mailto:e.kohrs-suvi@gmx.de" className="text-[#FFB800] hover:underline">e.kohrs-suvi@gmx.de</a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#impressum"
                className="text-sm text-gray-400 hover:text-[#FFB800] transition-colors"
              >
                Impressum
              </a>
              <a
                href="#datenschutz"
                className="text-sm text-gray-400 hover:text-[#FFB800] transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

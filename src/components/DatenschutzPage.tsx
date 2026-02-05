import React from 'react';

export function DatenschutzPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/90 shadow-lg rounded-3xl p-8 sm:p-12 border border-white/60">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FFB800] font-semibold">
              Datenschutz
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mt-3">
              Datenschutzerklärung
            </h1>
            <p className="text-gray-600 mt-3">
              Füge hier deine Datenschutzerklärung ein.
            </p>
          </div>
          <a
            href="#home"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#FFB800] text-gray-900 font-semibold hover:bg-[#f0ab00] transition-colors shadow-md"
          >
            Zurück zur Startseite
          </a>
        </div>

        <div className="text-gray-700 leading-relaxed" />
      </div>
    </section>
  );
}

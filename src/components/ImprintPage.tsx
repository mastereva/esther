import React from 'react';

export function ImprintPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-[300px]" style={{
      paddingTop: "150px"
    }}>
      <div className="bg-white/90 shadow-lg rounded-3xl p-8 sm:p-12 border border-white/60" style={{
        backgroundColor: "#fff"
      }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#FFB800] font-semibold">
              Rechtliche Angaben
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mt-3">
              Impressum
            </h1>
          </div>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Esther Kohrs<br />
              Altenhagener Weg 10a<br />
              22147 Hamburg<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>
              Kleinunternehmer gemäß § 19 UStG
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Haftung für Inhalte
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              kann jedoch keine Gewähr übernommen werden. Bitte passe diesen
              Abschnitt nach Bedarf an.
            </p>
          </div>
        <a
            href="#home"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#FFB800] text-gray-900 font-semibold hover:bg-[#f0ab00] transition-colors shadow-md"
            style={
              {
                width: "100%"
              }
            }
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </section>
  );
}

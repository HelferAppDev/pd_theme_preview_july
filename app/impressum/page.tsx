'use client';

export default function Impressum() {
  return (
    <main className="w-full max-w-4xl mx-auto py-16 px-6 space-y-8">
        <section className="space-y-4">
          <h2>Impressum</h2>
          <p className="text-gray-600">
            Informationen gemäß § 5 TMG
          </p>
        </section>

        <section className="space-y-4">
          <h3>Anbieter</h3>
          <p className="text-gray-700">
            proLog Digital<br />
            [Straße und Hausnummer]<br />
            [Postleitzahl Stadt]<br />
            Deutschland
          </p>
        </section>

        <section className="space-y-4">
          <h3>Kontakt</h3>
          <p className="text-gray-700">
            Telefon: [Telefonnummer]<br />
            E-Mail: <a href="mailto:info@prolog-digital.de" className="text-blue-600 hover:text-blue-800">info@prolog-digital.de</a>
          </p>
        </section>

        <section className="space-y-4">
          <h3>Vertretungsberechtigte Personen</h3>
          <p className="text-gray-700">
            [Name und Position]
          </p>
        </section>

        <section className="space-y-4">
          <h3>Haftungsausschluss</h3>
          <p className="text-gray-700">
            Die Inhalte dieser Website wurden sorgfältig zusammengestellt. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
          </p>
        </section>

        <section className="space-y-4">
          <h3>Urheberrecht</h3>
          <p className="text-gray-700">
            Die auf dieser Website veröffentlichten Inhalte sind urheberrechtlich geschützt. Alle Rechte sind vorbehalten.
          </p>
        </section>
      </main>
  );
}

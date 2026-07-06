'use client';

import { PageHeader } from '@/components/page-header';
import {
  ButtonWeiter,
  ButtonÜberspringen,
  ButtonHilfe,
  ButtonSchließen,
  ButtonWiederholen,
  ButtonAnmelden,
} from '@/components/buttons';

export default function Home() {
  return (
    <>
      <PageHeader title="Logopädie-Trainer" showBackButton={false} />
      <main className="w-full max-w-4xl mx-auto py-16 px-6 space-y-16">

      {/* H1 - Screen Title */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">H1 - Screen Title</p>
          <p className="text-sm text-gray-500">Bold (700), 32px/2rem, line-height 1.2</p>
        </div>
        <h1>Willkommen im Logopädie-Trainer</h1>
      </section>

      {/* H2 - Section Title */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">H2 - Section Title</p>
          <p className="text-sm text-gray-500">SemiBold (600), 24px/1.5rem, line-height 1.3</p>
        </div>
        <h2>Kategorieüberschriften und Modaltitel</h2>
        <p className="text-gray-600">Verwendet für Gruppenüberschriften, Kategorien und Modal-Titel.</p>
      </section>

      {/* H3 - Card Title */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">H3 - Card Title</p>
          <p className="text-sm text-gray-500">Medium (500), 18px/1.125rem, line-height 1.4</p>
        </div>
        <h3>Bezeichnungen auf Kategorie-Kacheln</h3>
        <p className="text-gray-600">Auch für Übungstitel und andere sekundäre Überschriften.</p>
      </section>

      {/* Body Text */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Body Text</p>
          <p className="text-sm text-gray-500">Regular (400), 16px/1rem, line-height 1.6</p>
        </div>
        <p>Dies ist ein normaler Body-Text. Er wird für Erklärungen, Übungsanleitungen und Hilfetexte verwendet. Fira Sans mit regulärem Gewicht bietet eine angenehme Lesbarkeit für längere Texte und Inhalte.</p>
        <p>Ein weiterer Absatz zur Demonstration. Die Zeilenhöhe von 1.6 bietet optimalen Abstand zwischen den Zeilen für bessere Lesbarkeit.</p>
      </section>

      {/* Therapy Big Text */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Therapy Big Text</p>
          <p className="text-sm text-gray-500">SemiBold (600), 36-48px, line-height 1.2</p>
        </div>
        <div className="therapy-big text-blue-600">
          Silbe
        </div>
        <p className="text-gray-600">Wird für Reizelemente in Sprachspielen verwendet – Zielwörter, Silben und andere fokussierte Inhalte.</p>
      </section>

      {/* Button Label - Component Showcase */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Button Components</p>
          <p className="text-sm text-gray-500">Complete button system with icons and colors</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <ButtonWeiter />
          <ButtonÜberspringen />
          <ButtonHilfe />
          <ButtonSchließen />
          <ButtonWiederholen />
          <ButtonAnmelden />
        </div>
      </section>

      {/* Visual Hierarchy Example */}
      <section className="space-y-6 border-t pt-12">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Example: Übungskarte</p>
        </div>
        <div className="border rounded-lg p-6 space-y-4 bg-gray-50">
          <h2>Ausspracheübungen</h2>
          <h3>Satzbildung mit Ziellauten</h3>
          <p>Bilde korrekte Sätze mit den vorgegebenen Zielwörtern. Achte auf die richtige Aussprache des Ziellautes.</p>
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-2">Zielwort:</p>
            <div className="therapy-big text-blue-600">
              Sonne
            </div>
          </div>
          <ButtonWeiter />
          <ButtonÜberspringen />
          <ButtonHilfe />
        </div>
      </section>
    </main>
    </>
  );
}

'use client';

import { MdArrowForward, MdClose, MdRefresh, MdSkipNext } from 'react-icons/md';
import { FiHelpCircle, FiMic, FiHeadphones, FiBookOpen, FiLayers, FiEdit3, FiLogIn } from 'react-icons/fi';
import {
  ButtonWeiter,
  ButtonÜberspringen,
  ButtonHilfe,
  ButtonSchließen,
  ButtonWiederholen,
  ButtonAnmelden,
} from '@/components/buttons';
import { CategoryCard } from '@/components/cards/category-card';

export default function ThemePreview() {
  const categoryExamples = [
    { icon: <FiMic size={48} />, title: 'Artikulation', disabled: false },
    { icon: <FiHeadphones size={48} />, title: 'Sprachverstehen', disabled: false },
    { icon: <FiBookOpen size={48} />, title: 'Wortschatz', disabled: false },
    { icon: <FiLayers size={48} />, title: 'Grammatik', disabled: false },
    { icon: <FiEdit3 size={48} />, title: 'Schriftsprache', disabled: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1>Logopädie-Trainer Design System</h1>
          <p className="text-lg text-gray-600">
            Complete UI Component Preview
          </p>
          <div className="mt-6">
            <a href="/dashboard" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Dashboard Demo
            </a>
          </div>
        </div>

        {/* Button System */}
        <section className="space-y-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div>
            <h2>Button System</h2>
            <p className="text-gray-600 mt-2">
              Six button variants with icons and semantic colors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary CTA - Yellow */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Weiter (Primary CTA)</p>
              <ButtonWeiter />
            </div>

            {/* Secondary Action - Blue */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Überspringen (Secondary)</p>
              <ButtonÜberspringen />
            </div>

            {/* Help - Violet */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Hilfe (Support)</p>
              <ButtonHilfe />
            </div>

            {/* Close - Orange */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Schließen (Dismiss)</p>
              <ButtonSchließen />
            </div>

            {/* Repeat - Green */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Wiederholen (Positive)</p>
              <ButtonWiederholen />
            </div>

            {/* Login - Blue */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-600">Anmelden (Navigation)</p>
              <ButtonAnmelden />
            </div>
          </div>

          {/* Button States */}
          <div className="pt-6 border-t border-gray-200 space-y-4">
            <p className="text-sm font-semibold text-gray-600">Disabled State Example</p>
            <ButtonWeiter disabled />
          </div>
        </section>

        {/* Category Cards System */}
        <section className="space-y-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div>
            <h2>Category Cards</h2>
            <p className="text-gray-600 mt-2">
              Interactive category selection tiles with hover and disabled states
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categoryExamples.map((category, index) => (
              <div key={index}>
                <CategoryCard
                  icon={category.icon}
                  title={category.title}
                  disabled={category.disabled}
                  onClick={() => !category.disabled && console.log(`Selected: ${category.title}`)}
                />
              </div>
            ))}
          </div>

          {/* Card States Info */}
          <div className="pt-6 border-t border-gray-200 space-y-3">
            <p className="text-sm font-semibold text-gray-600">States</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-medium">Active:</span> Blue border on hover, lifts 4px, subtle gradient shadow
              </li>
              <li>
                <span className="font-medium">Disabled:</span> Grayed out background, disabled text color, no interactions
              </li>
            </ul>
          </div>
        </section>

        {/* Color System */}
        <section className="space-y-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div>
            <h2>Color Palette</h2>
            <p className="text-gray-600 mt-2">
              Semantic color system with accessibility contrast ratios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Yellow */}
            <div className="space-y-3">
              <div
                className="h-24 rounded-lg shadow-md"
                style={{ backgroundColor: '#fff041' }}
              />
              <div>
                <p className="font-semibold text-gray-800">Primary Yellow</p>
                <p className="text-sm text-gray-600">#fff041</p>
                <p className="text-xs text-gray-500 mt-1">Text: #1E293B (Dark)</p>
              </div>
            </div>

            {/* Secondary Green */}
            <div className="space-y-3">
              <div
                className="h-24 rounded-lg shadow-md"
                style={{ backgroundColor: '#bbcf01' }}
              />
              <div>
                <p className="font-semibold text-gray-800">Secondary Green</p>
                <p className="text-sm text-gray-600">#bbcf01</p>
                <p className="text-xs text-gray-500 mt-1">Text: #1E293B (Dark)</p>
              </div>
            </div>

            {/* Secondary Blue */}
            <div className="space-y-3">
              <div
                className="h-24 rounded-lg shadow-md"
                style={{ backgroundColor: '#0075bf' }}
              />
              <div>
                <p className="font-semibold text-gray-800">Secondary Blue</p>
                <p className="text-sm text-gray-600">#0075bf</p>
                <p className="text-xs text-gray-500 mt-1">Text: #FFFFFF (Light)</p>
              </div>
            </div>

            {/* Accent Violet */}
            <div className="space-y-3">
              <div
                className="h-24 rounded-lg shadow-md"
                style={{ backgroundColor: '#b71570' }}
              />
              <div>
                <p className="font-semibold text-gray-800">Accent Violet</p>
                <p className="text-sm text-gray-600">#b71570</p>
                <p className="text-xs text-gray-500 mt-1">Text: #FFFFFF (Light)</p>
              </div>
            </div>

            {/* Error Orange */}
            <div className="space-y-3">
              <div
                className="h-24 rounded-lg shadow-md"
                style={{ backgroundColor: '#ea7204' }}
              />
              <div>
                <p className="font-semibold text-gray-800">Error Orange</p>
                <p className="text-sm text-gray-600">#ea7204</p>
                <p className="text-xs text-gray-500 mt-1">Text: #FFFFFF (Light)</p>
              </div>
            </div>

            {/* Disabled Gray */}
            <div className="space-y-3">
              <div
                className="h-24 rounded-lg shadow-md"
                style={{ backgroundColor: '#E2E8F0' }}
              />
              <div>
                <p className="font-semibold text-gray-800">Disabled State</p>
                <p className="text-sm text-gray-600">#E2E8F0</p>
                <p className="text-xs text-gray-500 mt-1">Text: #94A3B8 (Light)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography System */}
        <section className="space-y-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div>
            <h2>Typography System</h2>
            <p className="text-gray-600 mt-2">
              Fira Sans with semantic hierarchy
            </p>
          </div>

          <div className="space-y-8">
            {/* H1 */}
            <div className="space-y-2">
              <h1>H1 - Screen Title (Bold, 32px)</h1>
              <p className="text-sm text-gray-500">Font Weight: 700 | Line Height: 1.2</p>
            </div>

            {/* H2 */}
            <div className="space-y-2">
              <h2>H2 - Section Title (SemiBold, 24px)</h2>
              <p className="text-sm text-gray-500">Font Weight: 600 | Line Height: 1.3</p>
            </div>

            {/* H3 */}
            <div className="space-y-2">
              <h3>H3 - Card Title (Medium, 18px)</h3>
              <p className="text-sm text-gray-500">Font Weight: 500 | Line Height: 1.4</p>
            </div>

            {/* Body */}
            <div className="space-y-2">
              <p>
                Body Text (Regular, 16px) - Dies ist ein Beispiel für normalen Body-Text. 
                Er wird für Erklärungen, Übungsanleitungen und Hilfetexte verwendet.
              </p>
              <p className="text-sm text-gray-500">Font Weight: 400 | Line Height: 1.6</p>
            </div>

            {/* Therapy Big */}
            <div className="space-y-2">
              <div className="therapy-big text-blue-600">
                Therapy Big Text (36-48px)
              </div>
              <p className="text-sm text-gray-500">Font Weight: 600 | Line Height: 1.2</p>
              <p className="text-gray-600">Für Reizelemente in Sprachspielen – Zielwörter und Silben</p>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section className="space-y-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div>
            <h2>Design Tokens</h2>
            <p className="text-gray-600 mt-2">
              Consistent spacing, radius, and transitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Border Radius</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Button: 12px (--radius-button)</li>
                <li>Card: 20px (--radius-card)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Transitions</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Smooth: all 0.2s ease-in-out (--transition-smooth)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Button Specs</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Height: 48px</li>
                <li>Padding: 0 24px</li>
                <li>Icon-Text Gap: 10px</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Card Specs</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Size: 220px × 200px</li>
                <li>Border: 2px solid</li>
                <li>Icon Size: 48px</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section className="space-y-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div>
            <h2>Usage Example</h2>
            <p className="text-gray-600 mt-2">
              Real-world component composition
            </p>
          </div>

          <div className="border-2 border-blue-200 rounded-2xl p-8 bg-blue-50 space-y-6">
            <div>
              <h3 className="mb-2">Ausspracheübung</h3>
              <p className="text-gray-700 mb-6">
                Sprich das Wort deutlich aus und vergleiche deine Aussprache.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-blue-300 text-center">
              <p className="text-sm text-gray-600 mb-3">Zielwort:</p>
              <div className="therapy-big text-blue-600 mb-4">Sonne</div>
              <p className="text-sm text-gray-600">Höre dir das Wort an</p>
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              <ButtonWeiter onClick={() => console.log('Continue')} />
              <ButtonÜberspringen onClick={() => console.log('Skip')} />
              <ButtonHilfe onClick={() => console.log('Help')} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

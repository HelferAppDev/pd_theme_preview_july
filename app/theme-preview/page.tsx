'use client';

import { PageHeader } from '@/components/page-header';
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
    <>
      <PageHeader title="Theme Preview" />
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center space-y-3">
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
        </div>
      </div>
    </>
  );
}

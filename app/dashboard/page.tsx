'use client';

import { PageHeader } from '@/components/page-header';
import { FiMic, FiHeadphones, FiBookOpen, FiLayers, FiEdit3 } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard" />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Moin Max!</h3>
            <p className="text-lg text-gray-600">
              Wähle einen Fachbereich aus, um dein heutiges Sprachtraining zu starten.
            </p>
          </div>

        {/* Active Cards Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-600 border-l-4 border-blue-600 pl-3">
              Verfügbare Logopädie-Bausteine
            </h2>
          </div>

          {/* Grid of therapy cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Artikulation */}
            <div className="therapy-card artikulation c-green">
              <div className="card-icon">
                <FiMic size={44} />
              </div>
              <div className="card-title">Artikulation</div>
            </div>

            {/* Sprachverstehen */}
            <div className="therapy-card verstehen c-blue">
              <div className="card-icon">
                <FiHeadphones size={44} />
              </div>
              <div className="card-title">Sprachverstehen</div>
            </div>

            {/* Wortschatz */}
            <div className="therapy-card wortschatz c-violet">
              <div className="card-icon">
                <FiBookOpen size={44} />
              </div>
              <div className="card-title">Wortschatz</div>
            </div>

            {/* Grammatik */}
            <div className="therapy-card grammatik c-blue">
              <div className="card-icon">
                <FiLayers size={44} />
              </div>
              <div className="card-title">Grammatik</div>
            </div>
          </div>
        </div>

        {/* Disabled Cards Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-600 border-l-4 border-blue-600 pl-3">
              Noch gesperrte Bereiche
            </h2>
          </div>

          {/* Grid of disabled therapy cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Schriftsprache - Disabled */}
            <div className="therapy-card schrift c-yellow is-disabled">
              <div className="card-icon">
                <FiEdit3 size={44} />
              </div>
              <div className="card-title">Schriftsprache</div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}

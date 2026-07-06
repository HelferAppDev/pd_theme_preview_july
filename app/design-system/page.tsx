export default function DesignSystem() {
  return (
    <main className="w-full min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Color System */}
        <section className="space-y-8">
          <div>
            <h2>Color System</h2>
            <p className="text-gray-600 mt-2">Primary, Secondary, and Accent colors with proper contrast ratios</p>
          </div>

          {/* Primary Colors */}
          <div className="space-y-4">
            <h3>Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Yellow */}
              <div className="space-y-3">
                <div 
                  className="w-full h-32 rounded-lg flex items-center justify-center font-bold text-2xl"
                  style={{ backgroundColor: '#fff041', color: '#1E293B' }}
                >
                  Yellow
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">#fff041</p>
                  <p className="text-sm text-gray-600">Text: #1E293B (Dark Slate)</p>
                  <p className="text-xs text-gray-500">Primary action, highlights</p>
                </div>
              </div>

              {/* Green */}
              <div className="space-y-3">
                <div 
                  className="w-full h-32 rounded-lg flex items-center justify-center font-bold text-2xl"
                  style={{ backgroundColor: '#bbcf01', color: '#1E293B' }}
                >
                  Green
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">#bbcf01</p>
                  <p className="text-sm text-gray-600">Text: #1E293B (Dark Slate)</p>
                  <p className="text-xs text-gray-500">Success, positive actions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="space-y-4">
            <h3>Secondary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blue */}
              <div className="space-y-3">
                <div 
                  className="w-full h-32 rounded-lg flex items-center justify-center font-bold text-2xl"
                  style={{ backgroundColor: '#0075bf', color: '#FFFFFF' }}
                >
                  Blue
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">#0075bf</p>
                  <p className="text-sm text-gray-600">Text: #FFFFFF (White)</p>
                  <p className="text-xs text-gray-500">Information, secondary actions</p>
                </div>
              </div>

              {/* Violet */}
              <div className="space-y-3">
                <div 
                  className="w-full h-32 rounded-lg flex items-center justify-center font-bold text-2xl"
                  style={{ backgroundColor: '#b71570', color: '#FFFFFF' }}
                >
                  Violet
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">#b71570</p>
                  <p className="text-sm text-gray-600">Text: #FFFFFF (White)</p>
                  <p className="text-xs text-gray-500">Accent, premium features</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accent/Error Colors */}
          <div className="space-y-4">
            <h3>Accent & Error Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Orange */}
              <div className="space-y-3">
                <div 
                  className="w-full h-32 rounded-lg flex items-center justify-center font-bold text-2xl"
                  style={{ backgroundColor: '#ea7204', color: '#FFFFFF' }}
                >
                  Orange
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">#ea7204</p>
                  <p className="text-sm text-gray-600">Text: #FFFFFF (White)</p>
                  <p className="text-xs text-gray-500">Errors, warnings, alerts</p>
                </div>
              </div>

              {/* Neutral */}
              <div className="space-y-3">
                <div 
                  className="w-full h-32 rounded-lg flex items-center justify-center font-bold text-2xl border-2 border-gray-200"
                  style={{ backgroundColor: '#E2E8F0', color: '#1E293B' }}
                >
                  Neutral
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">#E2E8F0</p>
                  <p className="text-sm text-gray-600">Text: #1E293B (Dark Slate)</p>
                  <p className="text-xs text-gray-500">Disabled states, backgrounds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8 border-t pt-12">
          <div>
            <h2>Typography</h2>
            <p className="text-gray-600 mt-2">Fira Sans font family with defined hierarchy</p>
          </div>

          <div className="space-y-8">
            {/* H1 */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">H1 - Screen Title</p>
                <p className="text-sm text-gray-600">Bold (700) • 32px/2rem • Line-height 1.2</p>
              </div>
              <h1>Willkommen zu Font und Buttons</h1>
            </div>

            {/* H2 */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">H2 - Section Title</p>
                <p className="text-sm text-gray-600">SemiBold (600) • 24px/1.5rem • Line-height 1.3</p>
              </div>
              <h2>Kategorieüberschriften und Modaltitel</h2>
            </div>

            {/* H3 */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">H3 - Card Title</p>
                <p className="text-sm text-gray-600">Medium (500) • 18px/1.125rem • Line-height 1.4</p>
              </div>
              <h3>Bezeichnungen auf Kategorie-Kacheln</h3>
            </div>

            {/* Body Text */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Body Text</p>
                <p className="text-sm text-gray-600">Regular (400) • 16px/1rem • Line-height 1.6</p>
              </div>
              <p>Dies ist ein normaler Body-Text. Er wird für Erklärungen, Übungsanleitungen und Hilfetexte verwendet. Fira Sans mit regulärem Gewicht bietet eine angenehme Lesbarkeit für längere Texte und Inhalte. Testen Sie die optimale Zeilenhöhe von 1.6 für bestmögliche Lesbarkeit.</p>
            </div>

            {/* Therapy Big Text */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Therapy Big Text</p>
                <p className="text-sm text-gray-600">SemiBold (600) • 36-48px (responsive) • Line-height 1.2</p>
              </div>
              <div className="therapy-big text-blue-600">
                Silbe
              </div>
            </div>

            {/* Button Label */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Button Label</p>
                <p className="text-sm text-gray-600">Medium (500) • 16px/1rem • Line-height 1.0</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <button className="button-label px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section className="space-y-8 border-t pt-12">
          <div>
            <h2>Component Examples</h2>
            <p className="text-gray-600 mt-2">Common UI patterns with color system applied</p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3>Buttons</h3>
            <div className="space-y-6">
              {/* Primary Button */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Weiter (Primary CTA)</p>
                <div className="flex flex-wrap gap-4">
                  <button className="button-label px-6 py-3 text-gray-900 rounded-lg font-medium transition-colors flex items-center gap-2" style={{ backgroundColor: '#fff041' }}>
                    <span>→</span> Weiter
                  </button>
                </div>
              </div>

              {/* Secondary Button */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Überspringen (Secondary Action)</p>
                <div className="flex flex-wrap gap-4">
                  <button className="button-label px-6 py-3 text-white rounded-lg font-medium transition-colors flex items-center gap-2" style={{ backgroundColor: '#0075bf' }}>
                    <span>⇉</span> Überspringen
                  </button>
                </div>
              </div>

              {/* Help Button */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Hilfe (Support / Info)</p>
                <div className="flex flex-wrap gap-4">
                  <button className="button-label px-6 py-3 text-white rounded-lg font-medium transition-colors flex items-center gap-2" style={{ backgroundColor: '#b71570' }}>
                    <span>?</span> Hilfe
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Schließen (Cancel / Dismiss)</p>
                <div className="flex flex-wrap gap-4">
                  <button className="button-label px-6 py-3 text-white rounded-lg font-medium transition-colors flex items-center gap-2" style={{ backgroundColor: '#ea7204' }}>
                    <span>✕</span> Schließen
                  </button>
                </div>
              </div>

              {/* Repeat Button */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Wiederholen (Positive Re-Action)</p>
                <div className="flex flex-wrap gap-4">
                  <button className="button-label px-6 py-3 text-gray-900 rounded-lg font-medium transition-colors flex items-center gap-2" style={{ backgroundColor: '#bbcf01' }}>
                    <span>↻</span> Wiederholen
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Anmelden (System Navigation)</p>
                <div className="flex flex-wrap gap-4">
                  <button className="button-label px-6 py-3 text-white rounded-lg font-medium transition-colors flex items-center gap-2" style={{ backgroundColor: '#0075bf' }}>
                    <span>⇱</span> Anmelden
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Cards */}
          <div className="space-y-4">
            <h3>Category Cards</h3>
            <p className="text-gray-600 mb-6">Interactive category selection cards with hover and disabled states</p>
            <div className="space-y-6">
              {/* Active Cards */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4">Active States (Hover to see effect)</p>
                <div className="flex flex-wrap gap-6">
                  <div className="category-card">
                    <div className="icon-wrapper">🎤</div>
                    <div className="card-title">Aussprache</div>
                  </div>
                  <div className="category-card">
                    <div className="icon-wrapper">📖</div>
                    <div className="card-title">Lesen</div>
                  </div>
                  <div className="category-card">
                    <div className="icon-wrapper">👂</div>
                    <div className="card-title">Hörverstehen</div>
                  </div>
                </div>
              </div>

              {/* Disabled Cards */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4">Disabled States</p>
                <div className="flex flex-wrap gap-6">
                  <div className="category-card is-disabled">
                    <div className="icon-wrapper">✍️</div>
                    <div className="card-title">Schreiben</div>
                  </div>
                  <div className="category-card is-disabled">
                    <div className="icon-wrapper">🎮</div>
                    <div className="card-title">Spiele</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="space-y-4">
            <h3>Content Card Component</h3>
            <div className="border-2 rounded-3xl p-6 space-y-4" style={{ borderColor: '#0075bf' }}>
              <h3 style={{ color: '#0075bf' }}>Ausspracheübung</h3>
              <p className="text-gray-600">Trainiere deine Aussprache mit interaktiven Übungen.</p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4" style={{ borderColor: '#0075bf' }}>
                <p className="text-sm text-gray-600 mb-2">Zielwort:</p>
                <div className="therapy-big" style={{ color: '#0075bf' }}>
                  Sonne
                </div>
              </div>
              <button className="button-label px-6 py-3 text-white rounded-lg font-medium transition-colors w-full" style={{ backgroundColor: '#0075bf' }}>
                Übung beginnen
              </button>
            </div>
          </div>

          {/* Alert/Message Box */}
          <div className="space-y-4">
            <h3>Alert & Status Messages</h3>
            <div className="space-y-3">
              {/* Success */}
              <div className="flex gap-4 p-4 rounded-lg" style={{ backgroundColor: '#bbcf01', color: '#1E293B' }}>
                <span className="font-bold text-xl">✓</span>
                <div>
                  <p className="font-semibold">Erfolg!</p>
                  <p className="text-sm">Übung erfolgreich abgeschlossen.</p>
                </div>
              </div>

              {/* Error */}
              <div className="flex gap-4 p-4 rounded-lg" style={{ backgroundColor: '#ea7204', color: '#FFFFFF' }}>
                <span className="font-bold text-xl">⚠</span>
                <div>
                  <p className="font-semibold">Fehler</p>
                  <p className="text-sm">Bitte versuche es erneut.</p>
                </div>
              </div>

              {/* Info */}
              <div className="flex gap-4 p-4 rounded-lg" style={{ backgroundColor: '#0075bf', color: '#FFFFFF' }}>
                <span className="font-bold text-xl">ℹ</span>
                <div>
                  <p className="font-semibold">Information</p>
                  <p className="text-sm">Hier ist eine wichtige Information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section className="space-y-8 border-t pt-12">
          <div>
            <h2>Design Tokens</h2>
            <p className="text-gray-600 mt-2">Spacing, radius, and transition values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 space-y-2">
              <p className="font-semibold text-gray-900">Border Radius</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Button: <code className="bg-gray-100 px-2 py-1 rounded">12px</code></p>
                <p className="text-sm text-gray-600">Card: <code className="bg-gray-100 px-2 py-1 rounded">20px</code></p>
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <p className="font-semibold text-gray-900">Transitions</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Smooth: <code className="bg-gray-100 px-2 py-1 rounded text-xs">all 0.2s ease-in-out</code></p>
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <p className="font-semibold text-gray-900">Font Family</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Fira Sans (400, 500, 600, 700)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in diesem Changelog dokumentiert.

Format: Dieses Changelog folgt dem "Keep a Changelog"-Stil (übersichtlich nach Releases/Unreleased).

## Unreleased
- Hinzugefügt: `.github/copilot-instructions.md` — Leitfaden für Copilot-/Agenten-Sessions.
- Hinzugefügt: `changelog.md` (diese Datei).
- Aktion: Next.js Dev-Server lokal gestartet auf http://localhost:3005 (PORT=3005) während einer Dev-Session.
- Styling: Globales Letter-spacing gesetzt (0.02em) und Tailwind-utility `.tracking-02` hinzugefügt; angewendet auf body, Überschriften und Buttons.
- Accessibility: Leittext zur Platzierung von Icons vor/nach Text wurde in `app/page.tsx` und `app/design-system/page.tsx` ergänzt.
- Buttons: `ButtonBase` erweitert (iconPosition, nav-Flag); Navigation-Buttons (.nav-button) auf Primary Yellow gesetzt. `ButtonWeiter` rendert Icon rechts, `Zurück`-Button im Header zeigt Icon links + Text.
- Header: Settings- und Help-Icons (Einstellungen, Hilfe) im Header auf Primary Yellow gesetzt.
- Category Cards: Icons, Rahmen und Schatten auf Primary Yellow gesetzt; inner/inset shadows bei Hover entfernt. `theme-preview` verwendet jetzt dieselben therapy-card Hintergründe wie `/dashboard`.
- Komponenten: `CategoryCard` unterstützt `className` und passt sich an therapy-card Klassen an.

## 0.1.0 - 2026-07-06
- Initiales Projekt-Skeleton: Next.js (App Router), TypeScript, Tailwind CSS, ESLint.
- Wichtige Konfigurationsdateien: `package.json`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.

---

Pflegehinweis: Vor einem Release die Einträge unter "Unreleased" in eine neue Release-Section verschieben und semantische Versionen verwenden (z. B. `0.1.1`, `0.2.0`).

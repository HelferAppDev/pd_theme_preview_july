# Copilot instructions for pd_theme_preview_july

This file helps Copilot-style agents work effectively in this repository.

## Build, test, and lint commands
- Install deps: `npm install` (or `pnpm install`/`yarn` as preferred)
- Development server: `npm run dev`  # starts Next.js on localhost:3000
- Build: `npm run build`
- Start (production): `npm run start`
- Lint: `npm run lint` (this runs `eslint`)
  - Lint a single file: `npm run lint -- path/to/file` or `npx eslint path/to/file`

Tests: No test runner is configured in package.json. There are no `test` or test-related scripts.

## High-level architecture
- Next.js (app router) TypeScript application. Key directories:
  - `app/` — Next.js App Router routes and layout (server and client components)
  - `components/` — shared UI components (organized by feature: buttons, cards, navbar, footer, ...)
  - `public/` — static assets (logos, svgs)
- Styling: Tailwind CSS is wired via `postcss.config.mjs` and `tailwindcss` dependency.
- Linting: ESLint is configured (`eslint.config.mjs`) and uses `eslint-config-next` presets.
- Typescript: path alias `@/*` maps to repository root (see `tsconfig.json`).
- The repository includes a theme-preview under `app/theme-preview/page.tsx` and a small design-system in `components/`.

## Key conventions and repo-specific patterns
- Next version: `next`@16.2.4 — this repo includes agent-facing notes indicating this Next.js has breaking changes vs training-data Next.js. See `AGENTS.md` and `CLAUDE.md` for guidance; consult `node_modules/next/dist/docs/` when in doubt.
- Path aliasing: import short paths using `@/...` (configured in `tsconfig.json`).
- ESLint overrides: `eslint.config.mjs` overrides default ignores (e.g., `.next/**`, `out/**`, `build/**`).
- PostCSS/Tailwind: `postcss.config.mjs` enables the `@tailwindcss/postcss` plugin — use Tailwind utility classes in components and app styles.
- Folder layout: keep shared primitives in `components/` and page-specific UI under `app/*`. Follow existing structure for new components (create a folder per component family: `components/buttons`, `components/cards`, etc.).

## Files for AI/agents
- `AGENTS.md` and `CLAUDE.md` contain agent guidance (notably the note: "This is NOT the Next.js you know"). Copilot/agents should read these before making code changes.
- There is no existing `.github/copilot-instructions.md` prior to this file.

## Recommendations for Copilot sessions
- Read `AGENTS.md` / `CLAUDE.md` and `node_modules/next/dist/docs/` early; Next.js APIs may differ from typical expectations.
- Use `npm run dev` to reproduce behavior locally.
- Avoid adding new global ESLint ignores without checking `eslint.config.mjs`.
- Preserve the `@/*` path alias when adding new modules.

---

Created by an automated Copilot CLI session. If you want additional coverage (CI, tests, Playwright/Playwright MCP server setup, or deeper component conventions), say which area to expand.

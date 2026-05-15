# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server on `http://localhost:4200/` (Angular CLI `ng serve`, hot reload).
- `npm run build` — production build to `dist/` (uses `@angular/build:application`, prod budgets: 1 MB initial, 8 KB per-component style).
- `npm run watch` — dev-configuration build with watch.
- `npm test` — runs Vitest via the Angular `@angular/build:unit-test` builder. There is no `--testNamePattern` script wired up; pass through with `npm test -- -- -t "name"` or invoke `npx ng test --test-name-pattern "name"`.
- `npx ng generate component pages/<name>` — schematics default to SCSS (see `angular.json`).

Prettier config is inline in `package.json` (`printWidth: 100`, `singleQuote: true`, HTML parsed as `angular`). No ESLint config is checked in.

## Architecture

This is an Angular 21 standalone-components SPA scaffolded with the Angular CLI. It is an **academic demo of the UI design lifecycle**, organized as **5 sibling pages = 5 tabs**, each documenting one stage of designing a fictional furniture-sales app for "Taracea":

1. Análisis de requisitos
2. Modelo mental
3. Prototipado de baja fidelidad
4. Prototipado de alta fidelidad
5. Implementación — *this tab is the actual working sales app*, not just documentation about it.

Tabs 1–4 are meta (they describe/show artifacts of the design process); tab 5 is the product those artifacts lead to. Keep that distinction in mind when adding features: a "product" feature (catalog, cart, item detail) belongs under tab 5; brand colors / mental-model diagrams / lo-fi sketches belong to their respective earlier tabs.

### Wiring

- `src/main.ts` bootstraps `App` with `appConfig`.
- `src/app/app.config.ts` registers `provideRouter(routes)` and `provideBrowserGlobalErrorListeners()`.
- `src/app/app.routes.ts` currently exports an **empty `Routes` array** — the 5 pages are not yet wired. New pages should be added as standalone components and registered here; `app.html` already contains `<router-outlet />` (alongside placeholder content that is meant to be deleted).
- `src/app/app.html` is still the Angular CLI starter placeholder. Replace it when building out the real shell (tab nav + outlet).

### Brand / design source of truth

- `docs/requisitos_gui_taracea.md` — the canonical GUI requirements (in Spanish). It specifies the **color palette** (`#5D4037` primary, `#D7CCC8` secondary, `#8D6E63` accent, `#212121` text), **typography** (Playfair Display for headings, Source Sans Pro for body), and per-component requirements (header, catalog grid, item detail, cart). Use these values rather than the placeholder oklch palette currently inlined in `app.html`.
- `assets/TARACEA - MARCA/` — brand kit: logos (`LOGO PNG.png`, color variants), custom fonts (`Seebad-LT-Std_39942.ttf`, `PlateletHeavy.ttf`), brand PDFs, color reference (`COLORES -07.jpg`). Note: this folder is **not** listed in `angular.json`'s `assets` array (only `public/` is) — if files here need to ship with the build, either move them into `public/` or extend the `assets` config.

## Project conventions

- Project language for docs and user-facing copy is **Spanish** (see README and `docs/`). Match that register when adding content; code identifiers stay in English.
- Components are standalone (no NgModules). Follow the existing pattern in `app.ts`: explicit `imports: [...]`, `templateUrl` + `styleUrl`, signals (`signal()`) for component state.
- SCSS for all component styles; `src/styles.scss` is the only global stylesheet wired into the build.
# Design System — MABA Studios

<!-- impeccable:design-schema 1 -->

## Visual Identity

**Minimal & Editorial 2-Tone Architectural Grid** grounded in user-approved [hero-approved-comp5.png](file:///home/faran/Web%20Projects/maba%20studios/.impeccable/mocks/hero-approved-comp5.png) (`MABA_Studios_Comp5.jpg`). Built on a pitch-black obsidian canvas (`#07080A`), continuous 1px structural hairlines (`#1B1E24`), high-contrast alabaster editorial serif headlines, crisp geometric sans UI copy, and one disciplined structural cobalt accent (`#2563EB`) reserved for primary actions and active local-execution signals.

## Color Tokens (`src/app/globals.css`)

| Role | Token | Value | Usage |
|---|---|---|---|
| Canvas ground | `--bg-void` | `#07080A` | Primary full-bleed background |
| Elevated surface | `--bg-surface` | `#0C0E12` | Alternating structural bands, proof ledger, hover rows |
| Recessed schematic | `--bg-inset` | `#090B0E` | Architectural visuals and code/network panels |
| Structural hairline | `--hairline` | `#1B1E24` | 1px section, column, and row grid borders |
| Interactive border | `--hairline-strong` | `#2D3340` | Secondary buttons, toggles, interactive cells |
| Primary ink | `--ink-primary` | `#F5F6F8` | Headlines, product titles, primary controls |
| Secondary ink | `--ink-secondary` | `#A1A8B6` | Body copy, subcopy, FAQ answers (~8.2:1 on `#07080A`) |
| Muted metadata | `--ink-muted` | `#767F90` | Technical metadata, footer legal (~4.8:1 on `#07080A`) |
| Primary accent | `--accent-cobalt` | `#2563EB` | Primary CTAs, active tabs, focus rings, selection |
| Accent hover | `--accent-cobalt-hover` | `#1D4ED8` | Primary CTA hover state |
| Accent wash | `--accent-cobalt-tint` | `rgba(37, 99, 235, 0.14)` | Active technical highlight cells |
| Local status signal | `--signal-local` | `#34D399` | Strictly inside local-execution status readouts |

## Typography (`src/app/layout.tsx`)

- **Display Serif (`--font-display`):** `Bodoni Moda` (`500`, `600`, `700`) — uppercase editorial display headlines (`-0.025em` tracking, tight `1.04–1.08` leading, balanced wrapping) and the `MABA STUDIOS` wordmark.
- **UI & Body Sans (`--font-sans`):** `Geist` — clean, high-legibility body copy (`15–17px`, `1.65` line-height, `48–60ch` measure), navigation, and buttons.
- **Technical Monospace (`--font-mono`):** `Geist Mono` — reserved strictly for genuine technical data (platform tags, LAN addresses, drive letters, GLSL snippets, tabular invariants). Never used as decorative body prose.

## Structural & Layout Grammar

- **Architectural 1px Hairlines Over Floating Cards:** Sections, columns, feature rows, steps, and FAQ entries divide directly along full-bleed `1px` hairlines (`#1B1E24`) rather than floating rounded cards or nested boxes.
- **Hero Discipline:** Exact 50/50 vertical split below a 1px hairline-divided 80px header. Strictly minimal above the fold (headline, 2-line subcopy, 2 rectangular `2px`-radius buttons, full-bleed Milky Way astrophotography plate in `public/images/hero-milky-way.webp`). Zero product cards or eyebrows above headings.
- **Controls:** Sharp rectangular buttons (`rounded-[2px]`), high-contrast solid cobalt primary + 1px hairline secondary, consistent `1.5px` square-cap stroke SVG icons (`src/components/Icons.tsx`).
- **Browser Surface Polish:** Custom cobalt `::selection`, `caret-color`, `:focus-visible` outline (`2px solid #2563EB`), thin dark scrollbars, `tabular-nums`, and `prefers-reduced-motion: reduce` support.

## Raster Provenance

- `public/images/hero-milky-way.webp` (sidecar: `public/images/hero-milky-way.webp.json`) — Clean cropped deep-space Milky Way plate extracted from user-approved `MABA_Studios_Comp5.jpg`.

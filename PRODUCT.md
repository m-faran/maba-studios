# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

End users looking for local-first, offline-capable software and edge-AI tools they can run directly on their own devices without cloud accounts or recurring costs. This includes:

- Android users (especially on budget and mid-range hardware) seeking a free, completely offline AI assistant (`BAMA AI`).
- Local-LLM users running LM Studio on a PC who want to connect from their Android phone over local Wi-Fi (`BAMA Link`).
- Windows users who want to unify Google Drive, TeraBox, and local storage into a single mounted drive letter (`Virtual HDD`).
- Developers and mobile graphics users evaluating or integrating a lightweight open-source GLSL upscaler for low-end mobile GPUs (`BAMA Upscaler`).

## Product Purpose

This web application (`bama-studios`) is the official lab and product hub for **BAMA Studios**—an independent edge-AI engineering lab building quantization-native language models and local-first software engineered to run 100% on-device without cloud servers, accounts, or subscriptions.

The website exists to introduce the lab, clearly present its four products across Android, Windows, and mobile graphics, and guide visitors to the right distribution channel for each product (Google Play, Windows downloads, and GitHub). Success means visitors immediately grasp BAMA Studios' local-first engineering focus, identify the product relevant to their device and need, and reach the real download or source link without friction.

## Positioning

BAMA Studios differentiates from cloud-hosted AI platforms and flagship-only tools through three concrete engineering commitments:

- **True Air-Gapped Privacy (Zero Cloud Calls):** Quantization-native models and local-first software run 100% on-device with no cloud inference, no user accounts, and no external API dependency.
- **Engineered for Budget & Mid-Range Devices:** Software and shaders are designed specifically for constrained everyday hardware—including budget/mid-range Android devices and low-end mobile GPUs—rather than assuming flagship specs.
- **No Paywalls, API Keys, or Token Limits:** Core local tools ship free of subscriptions, API key setup, or metered token caps.

## Operating Context

Visitors evaluate BAMA Studios in the context of practical, heterogeneous personal hardware and local workflows:

- **Android (Google Play):** Installing and running `BAMA AI` completely offline on everyday phones, or running `BAMA Link` to bridge an Android device to an LM Studio instance on a PC over local Wi-Fi.
- **Windows:** Mounting `Virtual HDD` as a standard Windows drive letter that pools Google Drive, TeraBox, and a local cache via smart read-through caching.
- **Mobile Graphics / Open Source:** Inspecting and integrating `BAMA Upscaler`, a single-pass spatial GLSL shader designed for low-end mobile GPUs.

## Capabilities and Constraints

### Confirmed Product Portfolio

1. **BAMA AI (Android — Flagship App):** A completely offline AI assistant available free on Google Play.
2. **BAMA Link (Android):** Connects an Android phone to LM Studio on a PC over local Wi-Fi.
3. **Virtual HDD (Windows):** Pools Google Drive, TeraBox, and a local cache into a single mounted Windows drive letter using smart read-through caching.
4. **BAMA Upscaler (Open Source · GLSL):** A single-pass spatial upscaler built for low-end mobile GPUs.

### Confirmed Terminology

- Lab name: `BAMA Studios`
- Product names: `BAMA AI`, `BAMA Link`, `Virtual HDD`, `BAMA Upscaler`
- Technical terms: `quantization-native`, `local-first`, `air-gapped`, `read-through caching`, `single-pass spatial upscaler`, `LM Studio`

### Technical Constraints

- Web codebase is already scaffolded on Next.js 16 (App Router, `src/app`), React 19, Tailwind CSS 4 (`@tailwindcss/turbopack`), and TypeScript.

### Undecided Product Facts

- Exact external destination URLs (Google Play listings, Windows installer/release URLs, GitHub repositories) are not yet supplied.
- Open-source license specifics for `BAMA Upscaler` and licensing/pricing terms for `BAMA Link` and `Virtual HDD` are unconfirmed.
- Whether the website will remain strictly a lab/product hub or later add documentation pages, changelogs, or interactive browser demos is open.
- Website-specific technical policies (e.g., analytics/telemetry stance, hosting target, legal/privacy pages) are not yet established.

## Brand Commitments

- **Name:** `BAMA Studios` (all-caps `BAMA`), flagship app `BAMA AI`, companion/utility products `BAMA Link`, `Virtual HDD`, and `BAMA Upscaler`.
- **Unconfirmed:** No logo files, icons, or binding voice/identity guidelines exist in the repository yet.

## Evidence on Hand

### Confirmed

- Product names, target platforms, core mechanisms, and key differentiators for BAMA Studios and all four products (captured above).

### Absent — Do Not Fabricate

- Real distribution URLs (Google Play links, Windows download links, GitHub repo URLs).
- Brand logo, app icons, product screenshots, architecture diagrams, or demo captures.
- Device benchmarks (tokens/sec, RAM footprint, model sizes, GPU frame times, cache hit rates).
- Download counts, store ratings, user testimonials, client/partner logos, or press coverage.

## Product Principles

1. **Local-first reality over hype:** Keep claims grounded in the real engineering mechanisms—on-device execution, zero cloud calls, zero accounts, local Wi-Fi bridging, read-through caching, and single-pass GLSL upscaling.
2. **Respect constrained hardware:** Frame every product and interaction around real-world budget and mid-range devices rather than flagship assumptions.
3. **Zero-friction access to real software:** Help visitors quickly distinguish the four products by platform and job, and move directly to Google Play, Windows downloads, or GitHub without unnecessary gates.
4. **Never fabricate proof:** Leave placeholders or explicit gaps for unprovided links, screenshots, and benchmarks instead of inventing numbers, quotes, or credentials.

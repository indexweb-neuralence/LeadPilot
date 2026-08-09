# AI Context & Knowledge Transfer Document

This document functions as the **internal memory** of the LeadPilot project for subsequent AI agents (specifically Codex). It transfers project knowledge, architecture constraints, design invariants, and transition rules.

---

## 1. Project Architecture & Connection Map
LeadPilot is structured as a high-performance marketing web application.
* **Marketing Shell**: Four root HTML pages serve static layouts:
  - `index.html` (Homepage)
  - `meeting-booking.html` (Meeting Scheduler showcase page)
  - `lead-forms.html` (Inbound Form captures showcase page)
  - `lead-generator.html` (Outbound Routing automation showcase page)
* **Component Parity**: A parallel React/Tailwind codebase in `/components/ui/` maps core interactive blocks (like `how-it-works-dark.tsx`) to support a future single-page application (SPA) migration.

### How Pages Connect
* Global navigation links bind pages via local anchors and query presets:
  - Header CTAs ("Book Demo") route to `/meeting-booking.html`.
  - Feature highlights in `index.html` link directly to respective feature pages (`lead-forms.html`, `lead-generator.html`).

---

## 2. Invariant Design Decisions (Do Not Change)
1. **The Floating Box Scroll Expansion**: The `#how-it-works` showcase container starts at `90vw` width, `36px` border-radius, and `0.96` scale. As it scrolls into the viewport, it expands to `100vw` width and `0px` border-radius. **Do not change this to standard sticky containers**; doing so will crop long inner cards (Card 1, 2, 3 and the benefit bar) on standard viewport heights.
2. **Branded Booking Calendar Layout (May 2026)**: The date table grid must start on Friday (May 1, 2026), with date `19` highlighted active. Changing calendar offsets will break theme preset alignment tests.
3. **High-Fidelity Product UI Mockups**: Do not replace the detailed browser frame chrome, vertical workflow logs, and CRM widgets with decorative icons. The user requires the infographics to represent functional LeadPilot software.

---

## 3. Tech Stack & Conventions
* **Styles**: Shared CSS is located in `/style.css`. encapsulated mockup/layout styles are written directly in the `<style>` block of pages to minimize network overhead.
* **Icons**: Outline SVGs or Lucide icons only. Keep `stroke-width="2"` or `2.5` consistent.
* **Naming Conventions**:
  - Cards: `.showcase-card`, `.infographic-mockup`.
  - Presets: `.preset-chip`, `.preset-color-box`.
  - Connectors: `.cards-connector`, `.connector-button-circle`.

---

## 4. Scroll & Animation System
* **CSS Custom properties**: JS computes the box scroll percentage from `0` to `1` and sets `--scroll-progress`:
  ```javascript
  const rect = trackBox.getBoundingClientRect();
  let progress = (viewportHeight * 0.9 - rect.top) / (viewportHeight * 0.9 - 88);
  progress = Math.max(0, Math.min(1, progress));
  trackBox.style.setProperty('--scroll-progress', progress);
  ```
* **CSS Variables mapping**:
  ```css
  .how-showcase-box {
    width: calc(90% + (10% * var(--scroll-progress)));
    border-radius: calc(36px * (1 - var(--scroll-progress)));
  }
  ```
* **Framer Motion equivalent**: Handles expansion via hook interpolations:
  ```typescript
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  ```

---

## 5. Technical Debt & Conventions to Maintain
* **Static Assets**: Representative avatars and logos are hardcoded in the `/images/` directory. Keep relative filepaths intact (`images/Aisha Rehman.png`, `images/Daniel Brooks.png`, etc.).
* **Redundant Style Sheets**: Card elements are styled in HTML `<style>` blocks. Avoid refactoring them into global sheets unless compiling them to a Next.js module.
* **Canvas Emitters**: Homepage hero background particles render on `<canvas id="hero-canvas">`. Do not attach event listeners to this canvas that block click events on the hero text or CTA inputs.

---

## 6. What to Build Next
1. **SPA Porting**: Codex should prioritize converting the static HTML files into a unified Next.js App Router project, loading the components from `/components/ui/` natively.
2. **Dynamic Slots Picker**: Wire the calendar available slots in Card 1 to allow interactive time selections that update the confirmation CTA timestamp.
3. **Mobile Layout Check**: Validate card scale bounds on mobile viewports (`<480px`) to prevent browser frame chrome margins from cropping details.

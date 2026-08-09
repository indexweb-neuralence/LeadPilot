# Component Dependency Graph Specification

This document maps out the parent-child relationships, hook variables, asset loaders, state managers, and transition dependencies for LeadPilot frontend elements.

---

## 1. Static HTML Section Blueprint
The static landing pages map their sections in a top-down document object structure:

```
[index.html / Page Layout]
  ├── [Navbar / #navbar]
  ├── [Hero Container / #hero]
  │     └── [Hero Particles Canvas / #hero-canvas] (Vanilla JS initialization)
  ├── [Bento Product Showcase / .bento-grid]
  ├── [Bento Pricing Cards / .pricing-grid]
  └── [Footer / #footer]
```

```
[meeting-booking.html / Page Layout]
  ├── [Navbar / #navbar]
  ├── [Hero Container / #hero]
  ├── [Timeline Showcase Section / #how-it-works]
  │     ├── [Glow Blobs / .how-glow-blob]
  │     ├── [Background Waves SVG / .how-bg-curves]
  │     ├── [Mockup Card 1 / .showcase-card (01)]
  │     │     ├── [macOS browser frame / .mac-browser-window]
  │     │     ├── [Booking details panel / .widget-left]
  │     │     ├── [Calendar Days grid / .widget-right]
  │     │     └── [Customizer Presets chips / .preset-chip]
  │     ├── [Connector Chevrons / .cards-connector]
  │     ├── [Mockup Card 2 / .showcase-card (02)]
  │     │     ├── [Qualification pipeline Nodes / .workflow-node]
  │     │     └── [Representative Card assignee / .assigned-rep-card]
  │     ├── [Mockup Card 3 / .showcase-card (03)]
  │     │     ├── [CRM Log activity feed / .crm-activity-feed-panel]
  │     │     ├── [KPI Metric card dashboard / .crm-mini-widgets]
  │     │     ├── [Reminder workflow sequence / .reminder-sequence-timeline]
  │     │     └── [LeadPilot Sync status footer / .leadpilot-sync-block]
  │     └── [Benefit Strip columns / .benefit-bar-container-glass]
  └── [Footer / #footer]
```

---

## 2. React Components Library Hierarchy
Ported React/Tailwind component systems are organized in a component structure:

```
[App / demo.tsx] (Wrapper component)
  └── [HowItWorksDark / components/ui/how-it-works-dark.tsx]
        ├── [Framer Motion / useScroll, useTransform, motion] (Viewport calculations)
        ├── [Branded Booking Card] (Card 1 widget)
        │     └── [Theme Selector Chips] (Accent state manager)
        ├── [Dynamic Routing Card] (Card 2 widget)
        │     └── [Traveling Light Particles] (Path keyframe animations)
        ├── [CRM Dashboard Card] (Card 3 widget)
        │     ├── [KPI Metric widgets]
        │     └── [Sync Status bar footer] (LeadPilot Sync SVG)
        └── [Benefit Glass Strip] (7 columns row)
```

---

## 3. Detailed Component Dependencies

### A. HowItWorksDark (`how-it-works-dark.tsx`)
* **Parent**: `App` (`demo.tsx` wrapper).
* **Child Components**:
  - `Theme Selector Chips` (Inline sub-component).
  - `Traveling Light Particles` (CSS Keyframe class injection).
* **Imported Utilities**: None (React state is encapsulated).
* **Imported Assets**:
  - `images/Aisha Rehman.png`
  - `images/Sophia Laurent.png`
  - `images/Elena Rostova.png`
  - `images/Daniel Brooks.png`
* **Shared State**:
  - `activeTheme` (`ColorTheme` object): Shares primary theme color, background opacities, and highlights to update Card 1 elements.
  - `selectedSlot` (String): Highlights slot selection state.
* **CSS Dependencies**: Tailwind CSS, grid layout rules, backdrop blur utilities.
* **Animation Dependencies**: Framer Motion `scrollYProgress` scroll expansion container, traveling dots path transitions.
* **Reusable Hooks**: `useScroll`, `useTransform` (Scroll tracking hooks).

### B. Hero Particles Canvas (`initHeroCanvas`)
* **Parent**: `index.html` DOM container.
* **Child Components**: None (Vanilla Canvas rendering).
* **Imported Utilities**: `initHeroCanvas()` inside `meeting-booking.html` script helper.
* **Imported Assets**: None.
* **Shared State**: Window resize triggers.
* **CSS Dependencies**: Absolute sizing overlays.
* **Animation Dependencies**: `requestAnimationFrame` particle position updates.
* **Reusable Hooks**: None.

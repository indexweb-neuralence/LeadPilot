# LeadPilot Engineering Documentation

This document covers the technical architecture, component structures, asset pipelines, and performance practices.

---

## 1. Project Architecture
LeadPilot operates as a hybrid marketing website and frontend React component library:
1. **Marketing Frontend**: High-performance static HTML pages utilizing local CSS styles and modular vanilla JavaScript.
2. **React Components**: Found inside `/components/ui/` (e.g., `how-it-works-dark.tsx`), styled with Tailwind and powered by Framer Motion.

---

## 2. Responsive Scroll Expansion Implementation
In `meeting-booking.html`, scroll-driven container expansion is written in vanilla JS to optimize frame rates:
```javascript
const trackBox = document.getElementById('how-it-works');
if (trackBox) {
  const updateScrollProgress = () => {
    const rect = trackBox.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const startExpand = viewportHeight * 0.9;
    const endExpand = 88; // Navbar height
    
    let progress = (startExpand - rect.top) / (startExpand - endExpand);
    progress = Math.max(0, Math.min(1, progress));
    
    trackBox.style.setProperty('--scroll-progress', progress);
  };
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
}
```

The container's styling maps these progress bounds directly:
```css
.how-showcase-box {
  width: calc(90% + (10% * var(--scroll-progress)));
  border-radius: calc(36px * (1 - var(--scroll-progress)));
  transform: scale(calc(0.96 + (0.04 * var(--scroll-progress))));
  max-width: calc(1240px + (100vw - 1240px) * var(--scroll-progress));
}
```

---

## 3. CSS Architecture & System Tokens
Global CSS styles are declared in `style.css`, while page-specific components inject encapsulated styling rules in the `<style>` blocks of their respective HTML templates.
* **Encapsulation**: Layout elements (mockups, cards, grids) use unique class prefixes (e.g., `.crm-`, `.preset-`, `.workflow-`) to prevent naming collisions.
* **Hardware Acceleration**: GPU-bound CSS attributes (`transform`, `opacity`, `border-radius`) declare `will-change` properties.

---

## 4. Animation Easing & Emitter Loops
All custom animations use cubic-bezier transition curves:
* **Primary easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Stripe-style ease-out).
* **Particle systems**: Controlled using standard 2D canvas context loop animations (`requestAnimationFrame`).

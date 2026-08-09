# Visual Design Inventory Specification

This document inventories every visual design element, border treatment, typography layout, gradient, and spacing rule implemented throughout the LeadPilot project, complete with exact CSS parameters.

---

## 1. Card Styles (Mockup Showcase Panels)
* **Glassmorphic Cards (`.showcase-card`)**:
  - Background: `rgba(16, 16, 22, 0.45)` (72% opacity variant in React: `rgba(16, 16, 22, 0.72)`)
  - Backdrop Blur: `backdrop-filter: blur(20px)`
  - Border: `1px solid rgba(255, 255, 255, 0.05)`
  - Inner Highlight: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03)`
  - Border Radius: `24px` (`border-radius: 24px`)
  - Padding: `padding: 40px` (equal vertical and horizontal padding)
* **macOS Mockup Browser Window (`.mac-browser-window`)**:
  - Background: `rgba(9, 9, 12, 0.95)`
  - Border: `1px solid rgba(255, 255, 255, 0.05)`
  - Border Radius: `12px`
  - Padding: `padding: 12px`
* **Assigned Representative Card (`.assigned-rep-card`)**:
  - Background: `linear-gradient(135deg, rgba(22, 22, 34, 0.88) 0%, rgba(124, 58, 237, 0.08) 100%)`
  - Border: `1px solid rgba(124, 58, 237, 0.25)`
  - Border Radius: `14px`
  - Padding: `padding: 14px`

---

## 2. Button Styles
* **Active Slots Picker (`.slot-mock.active-slot`)**:
  - Background: `rgba(124, 58, 237, 0.08)` (variable by color preset chips)
  - Border: `1px solid #7C3AED`
  - Border Radius: `4px`
* **Circular Card Connector Chevrons (`.connector-button-circle`)**:
  - Background: `rgba(15, 15, 22, 0.95)`
  - Border: `1px solid rgba(255, 255, 255, 0.12)`
  - Width/Height: `56px` by `56px`
  - Border Radius: `50%` (circular)
  - Glow: `box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5), 0 0 25px rgba(124, 58, 237, 0.25)`

---

## 3. Badges & Labels
* **Eyebrow Header Pill (`.eyebrow-dark-pill`)**:
  - Background: `rgba(139, 92, 246, 0.1)`
  - Border: `1px solid rgba(139, 92, 246, 0.15)`
  - Text Color: `#c084fc`
  - Border Radius: `100px`
  - Letter Spacing: `1.5px`
  - Text Transform: `uppercase`
* **Qualified Status Label (`.status-badge-qualified`)**:
  - Background: `rgba(16, 185, 129, 0.08)` (Success Green)
  - Border: `1px solid rgba(16, 185, 129, 0.15)`
  - Text Color: `#34D399`
  - Border Radius: `4px`
  - Font Weight: `700`

---

## 4. Shadows, Gradients, and Glows
* **Section Ambient Glows (`.how-glow-blob`)**:
  - Filter: `filter: blur(140px)`
  - Opacity: `0.65`
  - Purple radial: `radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)`
  - Pink radial: `radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)`
* **Theme Accent Gradient Text (`.grad-text-dark`)**:
  - Gradient: `linear-gradient(to right, #8b5cf6, #ec4899)`
  - Clip rules: `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`, `background-clip: text`
* **Active Calendar Cells (`.active-cell`)**:
  - Background: `#7C3AED` (variable by theme preset selection)
  - Shadow: `box-shadow: 0 0 8px #7C3AED`

---

## 5. Spacing System
* **Scroll Showcase Track Margin (`.how-scroll-track`)**:
  - Padding: `padding: 120px 0`
* **Section Heading Margin (`.section-header-dark`)**:
  - Margin bottom: `margin-bottom: 50px`
* **Cards Row Grid Gap (`.showcase-cards-row`)**:
  - Margin top: `margin-top: 50px`
  - Cards flex flow: `display: flex; gap: 0; justify-content: space-between`
* **Responsive Breakpoints**:
  - Desktop: `> 1024px`
  - Tablet: `768px - 1024px`
  - Mobile: `< 768px` (cards stack, vertical padding drops to 60px)

# LeadPilot Design System Specification

This document details the typography, layout system, color spaces, shadows, and design tokens.

---

## 1. Typography Tokens
* **Primary Font**: `Inter`, sans-serif.
* **Heading Font**: `Inter Tight` or `Outfit`, sans-serif.
* **Weights**: Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800), Black (900).
* **Sizes**:
  - H1 / Hero: 56px - 64px (line-height: 1.1, letter-spacing: -0.03em).
  - H2 / Section Title: 44px - 46px (line-height: 1.15, letter-spacing: -0.02em).
  - Body Text: 15px (line-height: 1.6).
  - Sub / Captions: 11px - 13px (line-height: 1.4).

---

## 2. Color System
* **Backgrounds**:
  - Dark sections: `#050508` or `#07070A`.
  - Light sections: `#ffffff`.
* **Brand Accents**:
  - Primary Purple: `#7C3AED` or `#8b5cf6`.
  - Secondary Pink: `#EC4899`.
  - Primary Violet: `#c084fc`.
* **UI States**:
  - Success Green: `#10B981` / `#34D399` (Active dots/status pills).
  - Muted Borders: `rgba(255, 255, 255, 0.05)`.
  - Text Gray: `#94A3B8` / `#64748B`.

---

## 3. Glassmorphism & Lighting Specifications
* **Glass Container Background**: `rgba(16, 16, 22, 0.45)`.
* **Backdrop Blur**: `20px` (`backdrop-filter: blur(20px)`).
* **Glass Border**: `1px solid rgba(255, 255, 255, 0.05)`.
* **Inner Highlight**: `inset 0 1px 0 rgba(255, 255, 255, 0.03)`.
* **Shadows**: `0 20px 40px rgba(0, 0, 0, 0.4)`.

---

## 4. Background Curved Waves & Glows
* **SVG wave path stroke**: `rgba(139, 92, 246, 0.05)` and `rgba(236, 72, 153, 0.03)`.
* **Radial Lighting Blobs**: Blur `140px` with `8%` opacity Purple / `5%` opacity Pink.

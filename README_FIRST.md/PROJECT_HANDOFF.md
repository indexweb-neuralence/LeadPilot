# LeadPilot Project Handoff Documentation

This document serves as the master engineering handoff record for the **LeadPilot** B2B SaaS scheduling and lead routing website redesign project, migrating from Google Antigravity to Codex.

---

## 1. Project Overview & Business Purpose
LeadPilot is a premium, high-converting scheduling and lead-routing platform designed for modern sales organizations. Unlike generic schedulers (e.g., standard Calendly integrations) that stop at booking a time slot, LeadPilot integrates lead qualification, routing rules, and instant CRM record syncing.

### Core Business Problems Solved
1. **Drop-offs in scheduling**: High-friction booking forms cause prospect drop-offs. LeadPilot addresses this with high-performance, responsive booking forms.
2. **Manual Routing Latency**: Slow lead assignment delays response times. LeadPilot uses real-time qualifications and ownership matches to route meetings to representatives instantly.
3. **Mismatched Pipelines**: Muted CRM logging leads to visual disconnects. LeadPilot captures and syncs data to CRM pipelines automatically on slot booking.

---

## 2. Product Vision
LeadPilot aims to represent the "Stripe of Scheduling"—combining highly polished visual aesthetics (comparable to Apple, Stripe, Linear, and Arc Browser) with developer-grade functionality and responsive speed.

---

## 3. Current Implementation Status
* **Overall Progress**: ~90% Completed.
* **Website Pages**: Four main web pages are built in high-fidelity static HTML/CSS/JS.
* **React Library**: Core interactive infographics (such as the boxed dark timeline showcase) are ported to React (`components/ui/how-it-works-dark.tsx`) utilizing Framer Motion and Lucide.

### Completion Status Breakdown
* **Index / Homepage (`index.html`)**: 95% Complete.
* **Lead Forms Page (`lead-forms.html`)**: 90% Complete.
* **Lead Generator Page (`lead-generator.html`)**: 90% Complete.
* **Meeting Booking Page (`meeting-booking.html`)**: 95% Complete.
* **React Components Library**: 90% Complete.

---

## 4. Key Architectural Decisions
1. **Static HTML with Componentized Styles**: The primary marketing pages are served as high-performance, single-file HTML pages with built-in stylesheets to ensure instant load times and eliminate CSS compile overhead.
2. **Scroll-Driven CSS Custom Variables**: Viewport container expansions are managed via lightweight window scroll listeners that calculate progress rates and write CSS custom variables (e.g., `--scroll-progress`), ensuring rendering stays at 60 FPS on mobile and desktop.
3. **React Parallel Architecture**: A mirror of core widgets is maintained in React/Tailwind for future single-page application (SPA) migration.

---

## 5. Folder Structure
* `/components`: Contains React equivalent components (such as `how-it-works-dark.tsx`).
* `/images`: Stores profile avatars, brand logos, and icons.
* `/index.html`: Landing page.
* `/meeting-booking.html`: Rebuilt Meeting Booking page.
* `/lead-forms.html`: Lead forms overview page.
* `/lead-generator.html`: Lead routing details page.
* `/style.css` & `/script.js`: Global styles and interactions.

---

## 6. Animation Philosophy
Animations are used to communicate functionality, not just decoration:
* **Particle systems** represent incoming lead data packets.
* **Moving dotted lines** indicate automated data routing.
* **Pulsing green signals** show live server connections and online representative matches.
* **Smooth transforms** (Apple-style expansion on scroll) create visual depth.

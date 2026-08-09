# LeadPilot Animation System Specification

Comprehensive blueprint of all animation models in the codebase.

---

## 1. Scroll Expansion Physics
* **Method**: CSS Variable translation calculated by a scroll proximity observer.
* **Properties Interpolated**: Width (`90vw` &rarr; `100vw`), scale (`0.96` &rarr; `1`), border-radius (`36px` &rarr; `0px`), max-width (`1240px` &rarr; `100%`).
* **Easing**: Smooth scroll-based interpolation.

---

## 2. Canvas Background Emitter Particles
* **Method**: 2D Context canvas loops.
* **Properties**: X/Y coordinates, random velocity steps, line connection checks (distance limit < 100px).

---

## 3. Traveling Dot Routing Path (Framer Motion & CSS)
* **Method**: CSS animation translating absolute positioning coordinates.
* **Keyframes**:
  ```css
  @keyframes pulseDotTravel {
    0% { top: 0; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  ```

---

## 4. Online Status Pulsing Light
* **Method**: Double loop animations using scale and opacity.
* **Keyframes**:
  ```css
  @keyframes onlinePulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  ```

---

## 5. SVG Chart Path Drawing
* **Method**: CSS path stroke-dasharray and stroke-dashoffset transitions.
  ```css
  @keyframes drawChartMock {
    0% { stroke-dashoffset: 400; }
    50% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 0; }
  }
  ```

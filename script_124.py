#!/usr/bin/env python3
import re

FILE = 'crm-pipeline.html'

with open(FILE, 'r', encoding='utf-8') as f:
    html = f.read()

# ── 1. FIX HERO OVERLAP & TEXT TRUNCATION IN CSS ──────────────────────────────
# Fix spacing on .hero-trust-wrapper and .dashboard-wrapper
html = html.replace('.hero-trust-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 32px;\n    margin-bottom: 0;\n  }',
                    '.hero-trust-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 32px;\n    margin-bottom: 40px;\n  }')

html = html.replace('.dashboard-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 28px;\n    width: 100%;\n    max-width: 1300px;\n    box-sizing: border-box;\n    margin-top: 0;\n  }',
                    '.dashboard-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 32px;\n    width: 100%;\n    max-width: 1300px;\n    box-sizing: border-box;\n    margin-top: 16px;\n  }')

# Fix step card truncation on .timeline-step
html = html.replace('.timeline-step {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background: #ffffff;\n    border: 1px solid rgba(15, 23, 42, 0.05);\n    border-radius: 12px;\n    padding: 12px 18px;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.02), 0 4px 12px -2px rgba(15, 23, 42, 0.03);\n    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n    flex: 0 0 auto;\n    width: 210px;\n    box-sizing: border-box;\n  }',
                    '.timeline-step {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    background: #ffffff;\n    border: 1px solid rgba(15, 23, 42, 0.05);\n    border-radius: 12px;\n    padding: 12px 18px;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.02), 0 4px 12px -2px rgba(15, 23, 42, 0.03);\n    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n    flex: 0 0 auto;\n    width: 236px;\n    box-sizing: border-box;\n  }')

# Ensure "Qualified automatically" is completely visible without truncation
html = html.replace('<span class="step-title">Qualified automatically</span>',
                    '<span class="step-title">Qualified Automatically</span>')

# ── 2. APPEND SCRIPT BLOCK & FOOTER BLOCK ────────────────────────────────────
# Check if file ends with </section>
sec_close = html.rfind('</section>')
if sec_close != -1:
    html = html[:sec_close + len('</section>')]

COMPLETE_BOTTOM = '''

<script>
(function() {
  'use strict';

  // 1. HERO INFOGRAPHIC ANIMATION (Single deal workflow loop)
  function initHeroAnimation() {
    const steps = [0, 1, 2, 3, 4].map(i => document.getElementById('step-' + i));
    const conns = [0, 1, 2, 3].map(i => document.getElementById('conn-' + i));
    if (!steps[0]) return;

    let current = 0;
    function reset() {
      steps.forEach((s, idx) => {
        if (!s) return;
        s.classList.remove('active', 'completed');
      });
      conns.forEach(c => {
        if (!c) return;
        c.classList.remove('active');
      });
      if (steps[0]) steps[0].classList.add('active');
      current = 0;
    }

    function stepNext() {
      if (current < 4) {
        if (steps[current]) {
          steps[current].classList.remove('active');
          steps[current].classList.add('completed');
        }
        if (conns[current]) {
          conns[current].classList.add('active');
        }
        current++;
        if (steps[current]) {
          steps[current].classList.add('active');
        }
      } else {
        setTimeout(() => {
          reset();
        }, 1200);
      }
    }

    reset();
    setInterval(stepNext, 1800);
  }

  // 2. HOW IT WORKS ANIMATION (Dark mode workflow)
  function initHowItWorks() {
    const container = document.querySelector('#how-it-works .works-container');
    const cards     = document.querySelectorAll('.work-card');
    const pills     = document.querySelectorAll('.timeline-pill');
    const nodes     = document.querySelectorAll('.timeline-node');
    const progress  = document.querySelector('.timeline-line-progress');
    const pulseDot  = document.querySelector('.timeline-progress-dot');
    if (!cards.length) return;

    let activeIdx = 0;
    const total   = cards.length;

    function updateState(idx) {
      cards.forEach((c, i) => c.classList.toggle('active', i === idx));
      pills.forEach((p, i) => {
        p.classList.toggle('active', i === idx);
        p.classList.toggle('completed', i < idx);
      });
      nodes.forEach((n, i) => {
        n.classList.toggle('active', i === idx);
        n.classList.toggle('completed', i < idx);
      });

      const pct = (idx / (total - 1)) * 100;
      if (progress) progress.style.width = pct + '%';
      if (pulseDot) pulseDot.style.left = pct + '%';
    }

    let running = true;
    setInterval(() => {
      if (!running) return;
      updateState(activeIdx);
      activeIdx = (activeIdx + 1) % total;
    }, 2000);

    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (container) container.classList.add('animate-in');
        running = true;
      } else {
        running = false;
      }
    }, { threshold: 0.1 });
    if (container) obs.observe(container);
  }

  // 3. UNLIMITED PIPELINES ANIMATION
  function initPipeline() {
    const stages = document.querySelectorAll('#kf-pipelines .kf-pipeline-stage');
    const dots   = document.querySelectorAll('#kf-pipelines .kf-stage-dot');
    if (!stages.length) return;

    let idx = 0;
    setInterval(() => {
      stages.forEach((s, i) => s.classList.toggle('active-glow', i === idx));
      dots.forEach((d, i) => d.classList.toggle('pulse', i === idx));
      idx = (idx + 1) % stages.length;
    }, 1800);
  }

  // 4. DRAG & DROP DEALS ANIMATION (Single cursor drag)
  function initKanban() {
    const card = document.querySelector('#kf-kanban .kf-drag-card');
    const cursor = document.querySelector('#kf-kanban .kf-cursor');
    const targetCols = document.querySelectorAll('#kf-kanban .kf-column');
    if (!card || !targetCols.length) return;

    let step = 0;
    setInterval(() => {
      targetCols.forEach((col, i) => col.classList.toggle('target-highlight', i === (step + 1) % targetCols.length));
      step = (step + 1) % targetCols.length;
    }, 2400);
  }

  // 5. CUSTOM STAGES GLOW SEQUENCE
  function initStages() {
    const stageItems = document.querySelectorAll('#kf-stages .kf-stage-item');
    if (!stageItems.length) return;

    let idx = 0;
    setInterval(() => {
      stageItems.forEach((item, i) => item.classList.toggle('glow-active', i === idx));
      idx = (idx + 1) % stageItems.length;
    }, 1200);
  }

  // 6. AI FOLLOW-UPS TYPING & SCANNING
  function initAI() {
    const textEl = document.querySelector('#kf-ai .kf-typing-text');
    if (!textEl) return;

    const phrases = [
      "Follow-up email sent to Acme Corp.",
      "Meeting summary generated & synced.",
      "Lead qualified with 94% win intent."
    ];
    let pIdx = 0, cIdx = 0, isDeleting = false;

    function type() {
      const currentPhrase = phrases[pIdx];
      if (isDeleting) {
        cIdx--;
        textEl.textContent = currentPhrase.substring(0, cIdx);
        if (cIdx === 0) {
          isDeleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          setTimeout(type, 500);
          return;
        }
      } else {
        cIdx++;
        textEl.textContent = currentPhrase.substring(0, cIdx);
        if (cIdx === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, 2200);
          return;
        }
      }
      setTimeout(type, isDeleting ? 40 : 70);
    }
    type();
  }

  // 7. REAL-TIME REPORTING (Chart draw + counters)
  function initReporting() {
    const counters = document.querySelectorAll('#kf-reporting .kf-metric-num');
    counters.forEach(el => {
      const target = parseFloat(el.dataset.target || '84');
      let val = 0;
      const interval = setInterval(() => {
        val += Math.ceil(target / 20);
        if (val >= target) {
          val = target;
          clearInterval(interval);
        }
        el.textContent = val + '%';
      }, 50);
    });
  }

  // 8. TEAM COLLABORATION (Conversation activity stream)
  function initCollab() {
    const msgs = document.querySelectorAll('#kf-collab .kf-msg-bubble');
    if (!msgs.length) return;

    let idx = 0;
    setInterval(() => {
      msgs.forEach((m, i) => m.classList.toggle('active', i <= idx));
      idx = (idx + 1) % msgs.length;
    }, 1800);
  }

  // 9. SMART AUTOMATIONS (Interactive Checklist 1 -> 5)
  function initAutomation() {
    const items = document.querySelectorAll('#kf-automation .kf-check-item');
    if (!items.length) return;

    let idx = 0;
    setInterval(() => {
      items.forEach((item, i) => item.classList.toggle('checked', i <= idx));
      idx = (idx + 1) % items.length;
    }, 1400);
  }

  // 10. COMPARE SECTION (HubSpot 10-step & LeadPilot pulse)
  function initCompare() {
    const hsCanvas = document.getElementById('hs-canvas');
    const hsSvg = document.getElementById('hs-svg');
    const hsPulse = document.getElementById('hs-pulse');

    if (hsCanvas && hsSvg && hsPulse) {
      function ctr(el) {
        const box = el.querySelector('.hubspot-node-box') || el;
        const r = box.getBoundingClientRect();
        const cr = hsCanvas.getBoundingClientRect();
        return { x: r.left + r.width / 2 - cr.left, y: r.top + r.height / 2 - cr.top };
      }

      function buildPaths() {
        const cr = hsCanvas.getBoundingClientRect();
        if (cr.width === 0) return;

        const allSteps = Array.from(hsCanvas.querySelectorAll('[data-hs-step]'))
          .sort((a, b) => +a.dataset.hsStep - +b.dataset.hsStep);
        if (allSteps.length < 10) return;

        const pts = allSteps.map(ctr);
        hsSvg.querySelectorAll('.hs-path').forEach(e => e.remove());
        hsSvg.setAttribute('viewBox', '0 0 ' + cr.width + ' ' + cr.height);

        function makePath(d) {
          const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          p.setAttribute('class', 'hs-path');
          p.setAttribute('d', d);
          hsSvg.insertBefore(p, hsPulse);
          return p;
        }

        for (let i = 0; i < 4; i++) {
          makePath('M ' + pts[i].x + ' ' + pts[i].y + ' L ' + pts[i+1].x + ' ' + pts[i+1].y);
        }
        makePath('M ' + pts[4].x + ' ' + pts[4].y + ' L ' + pts[5].x + ' ' + pts[5].y);
        for (let i = 5; i < 9; i++) {
          makePath('M ' + pts[i].x + ' ' + pts[i].y + ' L ' + pts[i+1].x + ' ' + pts[i+1].y);
        }

        const frictionSet = new Set([1, 2, 4, 6, 8]);
        let running = true, animId = null;
        const SEG_MS = 900, PAUSE_MS = 700, N = pts.length - 1;
        let startTime = null, pausing = false, pauseEnd = 0, lastSegIdx = -1;

        function triggerFriction(stepEl) {
          const box = stepEl ? stepEl.querySelector('.hubspot-node-box') : null;
          if (!box) return;
          const shakes = [2.5, -2.5, 1.5, -1.5, 0.5, 0];
          let t = 0;
          function shake() {
            if (t >= shakes.length) { box.style.transform = ''; return; }
            box.style.transform = 'translateX(' + shakes[t] + 'px)';
            t++;
            setTimeout(shake, 22);
          }
          shake();
          box.style.boxShadow = '0 0 10px rgba(239,68,68,0.5)';
          setTimeout(() => { box.style.boxShadow = ''; }, 230);
        }

        function animatePulse(ts) {
          if (!running) return;
          if (pausing) {
            if (ts < pauseEnd) { animId = requestAnimationFrame(animatePulse); return; }
            pausing = false; startTime = ts; lastSegIdx = -1;
          }
          if (!startTime) startTime = ts;
          const elapsed = ts - startTime;
          const totalMs = SEG_MS * N;

          if (elapsed >= totalMs) {
            const last = pts[N];
            hsPulse.setAttribute('cx', last.x);
            hsPulse.setAttribute('cy', last.y);
            hsPulse.style.opacity = '0.85';
            pausing = true;
            pauseEnd = ts + PAUSE_MS;
            animId = requestAnimationFrame(animatePulse);
            return;
          }

          const t = elapsed / totalMs;
          const segT = t * N;
          const segIdx = Math.min(Math.floor(segT), N - 1);
          const segFrac = segT - segIdx;

          if (segIdx !== lastSegIdx) {
            lastSegIdx = segIdx;
            const destIdx = segIdx + 1;
            if (frictionSet.has(destIdx)) triggerFriction(allSteps[destIdx]);
          }

          const from = pts[segIdx];
          const to = pts[segIdx + 1];
          const cx = from.x + (to.x - from.x) * segFrac;
          const cy = from.y + (to.y - from.y) * segFrac;

          hsPulse.setAttribute('cx', cx);
          hsPulse.setAttribute('cy', cy);
          hsPulse.style.opacity = '1';
          animId = requestAnimationFrame(animatePulse);
        }

        requestAnimationFrame(animatePulse);
      }

      window.addEventListener('load', () => requestAnimationFrame(buildPaths));
      requestAnimationFrame(buildPaths);
    }

    // LeadPilot pulse
    const lpCanvas  = document.getElementById('lp-canvas');
    const lpSvg     = document.getElementById('lp-svg');
    const lineTrack = document.getElementById('lp-line-track');
    const lineTrail = document.getElementById('lp-line-trail');
    const pulseDot  = document.getElementById('lp-pulse-dot');
    if (!lpCanvas || !lpSvg || !lineTrack || !lineTrail || !pulseDot) return;

    const NODE_IDS = ['lp-node-0','lp-node-1','lp-node-2','lp-node-3','lp-node-4','lp-node-5','lp-node-6'];

    function getNodeCentres() {
      const cr = lpCanvas.getBoundingClientRect();
      return NODE_IDS.map(id => {
        const el = document.getElementById(id);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2 - cr.left, y: r.top + r.height / 2 - cr.top };
      }).filter(Boolean);
    }

    function positionSvg() {
      const cr = lpCanvas.getBoundingClientRect();
      if (cr.width === 0) return false;
      const centres = getNodeCentres();
      if (centres.length < 2) return false;

      const lineY = centres[0].y;
      const x0    = centres[0].x;
      const x1    = centres[centres.length - 1].x;
      const W     = cr.width;
      const H     = cr.height;

      lpSvg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      lpSvg.style.cssText = 'position:absolute;top:0;left:0;width:' + W + 'px;height:' + H + 'px;pointer-events:none;z-index:1;overflow:visible;';

      lineTrack.setAttribute('x1', x0);
      lineTrack.setAttribute('y1', lineY);
      lineTrack.setAttribute('x2', x1);
      lineTrack.setAttribute('y2', lineY);

      lineTrail.setAttribute('x1', x0);
      lineTrail.setAttribute('y1', lineY);
      lineTrail.setAttribute('x2', x0);
      lineTrail.setAttribute('y2', lineY);

      pulseDot.setAttribute('cy', lineY);

      return { centres, lineY, x0, x1 };
    }

    function clearActive() {
      NODE_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('lp-active');
      });
    }

    let runAnim    = false;
    let animId     = null;
    let layout     = null;

    const TOTAL_MS = 4200;
    const PAUSE_MS = 800;
    const GLOW_MS  = 300;

    let startTime   = null;
    let pausing     = false;
    let pauseEnd    = 0;
    let lastNodeIdx = -1;

    function activateNode(idx) {
      if (idx === lastNodeIdx) return;
      lastNodeIdx = idx;
      const el = document.getElementById(NODE_IDS[idx]);
      if (!el) return;
      el.classList.add('lp-active');
      if (idx < NODE_IDS.length - 1) {
        setTimeout(() => {
          el.classList.remove('lp-active');
        }, GLOW_MS);
      }
    }

    function animatePulse(ts) {
      if (!runAnim) return;

      if (pausing) {
        if (ts < pauseEnd) {
          animId = requestAnimationFrame(animatePulse);
          return;
        }
        pausing     = false;
        startTime   = ts;
        lastNodeIdx = -1;
        clearActive();
        lineTrail.setAttribute('x2', layout.x0);
      }

      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      if (elapsed >= TOTAL_MS) {
        pulseDot.setAttribute('cx', layout.x1);
        pulseDot.style.opacity = '1';
        lineTrail.setAttribute('x2', layout.x1);
        activateNode(NODE_IDS.length - 1);

        pausing  = true;
        pauseEnd = ts + PAUSE_MS;
        animId   = requestAnimationFrame(animatePulse);
        return;
      }

      const t  = elapsed / TOTAL_MS;
      const cx = layout.x0 + (layout.x1 - layout.x0) * t;

      pulseDot.setAttribute('cx', cx);
      pulseDot.style.opacity = '1';
      lineTrail.setAttribute('x2', cx);

      const centres = layout.centres;
      let closestIdx = 0;
      let minDist    = Infinity;
      centres.forEach((c, i) => {
        const d = Math.abs(cx - c.x);
        if (d < minDist) { minDist = d; closestIdx = i; }
      });

      const halfSeg = (layout.x1 - layout.x0) / (centres.length - 1) * 0.4;
      if (minDist < halfSeg) {
        activateNode(closestIdx);
      }

      animId = requestAnimationFrame(animatePulse);
    }

    function startAnimation() {
      layout = positionSvg();
      if (!layout) return;
      runAnim     = true;
      startTime   = null;
      lastNodeIdx = -1;
      pausing     = false;
      clearActive();
      animId = requestAnimationFrame(animatePulse);
    }

    const lpObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) startAnimation();
      else runAnim = false;
    }, { threshold: 0.1 });

    const doInit = () => requestAnimationFrame(() => requestAnimationFrame(() => {
      lpObs.observe(lpCanvas);
    }));
    if (document.readyState === 'complete') doInit();
    else window.addEventListener('load', doInit);
  }

  // RUN ALL INITIALIZERS
  function runAllInits() {
    initHeroAnimation();
    initHowItWorks();
    initPipeline();
    initKanban();
    initStages();
    initAI();
    initReporting();
    initCollab();
    initAutomation();
    initCompare();
  }

  if (document.readyState === 'complete') {
    runAllInits();
  } else {
    window.addEventListener('load', runAllInits);
  }
})();
</script>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="color:#fff">
          <img src="images/LEAD PILOT LOGO.png" alt="LeadPilot Logo" style="width: 32px; height: 32px; object-fit: contain; margin-right: 8px;">
          LeadPilot
        </a>
        <p>One platform for lead generation, CRM, meetings, quotations, AI sales tools, and revenue growth. Replace 9 separate tools with one connected platform.</p>
        <div class="footer-socials">
          <a href="#" class="social-btn" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" class="social-btn" aria-label="X (Twitter)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        
        <div class="footer-cta-card desktop-only-cta">
          <div class="footer-cta-title">Replace 9 tools.</div>
          <div class="footer-cta-desc">Run everything from one place.</div>
          <a href="index.html#cta" class="footer-cta-btn">Start Free Trial &rarr;</a>
        </div>
      </div>
      
      <div class="footer-links-col">
        <div class="footer-col-title">Product</div>
        <a href="lead-generator.html" class="footer-link">Lead Generator</a>
        <a href="crm-pipeline.html" class="footer-link">CRM &amp; Pipeline</a>
        <a href="index.html#tools" class="footer-link">AI Sales Assistant</a>
        <a href="meeting-booking.html" class="footer-link">Meeting Booking</a>
        <a href="index.html#tools" class="footer-link">AI Chatbot</a>
        <a href="index.html#tools" class="footer-link">Quotations</a>
        <a href="ai-sales-sequences.html" class="footer-link">Sales Sequences</a>
        <a href="lead-forms.html" class="footer-link">AI Lead Forms</a>
        <a href="index.html#ai-coach" class="footer-link">AI Sales Coach</a>
      </div>
      
      <div class="footer-links-col">
        <div class="footer-col-title">Compare</div>
        <a href="compare-zoominfo.html" class="footer-link">Compare with ZoomInfo</a>
        <a href="compare-hubspot.html" class="footer-link">Compare with HubSpot</a>
        <a href="compare-apollo.html" class="footer-link">Compare with Apollo</a>
        <a href="compare-zoho.html" class="footer-link">Compare with Zoho CRM</a>
        <a href="compare-salesforce.html" class="footer-link">Compare with Salesforce</a>
        <a href="compare-pipedrive.html" class="footer-link">Compare with Pipedrive</a>
        <a href="compare-close.html" class="footer-link">Compare with Close CRM</a>
        <a href="compare-freshsales.html" class="footer-link">Compare with Freshsales</a>
      </div>
      
      <div class="footer-links-col">
        <div class="footer-col-title">Resources</div>
        <a href="#" class="footer-link">Blog</a>
        <a href="#" class="footer-link">Resource Center</a>
        <a href="#" class="footer-link">Community</a>
        <a href="#" class="footer-link">Help Center</a>
        <a href="#" class="footer-link">API Docs</a>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2026 LeadPilot Technologies Inc. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Preferences</a>
      </div>
    </div>
  </div>
</footer>
</body>
</html>
'''

html += COMPLETE_BOTTOM

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(html)
print("Complete page restored successfully!")

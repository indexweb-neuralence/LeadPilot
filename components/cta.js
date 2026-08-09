// components/cta.js - Reusable LeadPilot Global Premium CTA Component

(function initGlobalCTA() {
  function renderCTA() {
    const ctaTarget = document.getElementById('cta');
    if (!ctaTarget) return;

    // Detect subdirectory depth for links
    const isSubdir = window.location.pathname.includes('/case-studies/');
    const prefix = isSubdir ? '../' : '';

    const ctaHTML = `
      <div class="container">
        <div class="cs-cta-card">
          <div class="cs-cta-glow"></div>
          <h2 class="cs-cta-title">Ready to Put Your Revenue Team on Autopilot?</h2>
          <p class="cs-cta-desc">Discover how LeadPilot helps modern sales teams generate more qualified pipeline, automate repetitive work, and close deals faster from one connected AI platform.</p>
          <div class="cs-cta-actions">
            <a href="${prefix}index.html#cta" class="cs-cta-btn-primary">Start Free Trial &rarr;</a>
            <a href="${prefix}index.html#cta" class="cs-cta-btn-secondary">Book Demo</a>
          </div>
        </div>
      </div>
    `;

    ctaTarget.innerHTML = ctaHTML;
    ctaTarget.className = 'section-spacing-cta';
    ctaTarget.style.paddingTop = '0';
    ctaTarget.style.paddingBottom = '40px';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCTA);
  } else {
    renderCTA();
  }
})();

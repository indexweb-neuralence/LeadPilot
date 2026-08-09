// js/blog-article.js - Reading Experience Controller

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress Bar
  const progressBar = document.getElementById('reading-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    });
  }

  // 2. Table of Contents Active Section Highlighting
  const tocLinks = document.querySelectorAll('.toc-links-list a');
  const sections = document.querySelectorAll('.article-content-body h2, .article-content-body h3');

  if (tocLinks.length > 0 && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            tocLinks.forEach(link => {
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // 3. Copy Link Action
  const copyBtn = document.getElementById('share-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" style="width: 18px; height: 18px; color: #10B981;"></i>';
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      });
    });
  }

  // 4. FAQ Accordion Single-Item Toggle Controller
  const faqHeaders = document.querySelectorAll('.faq-accordion-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const currentItem = header.closest('.faq-accordion-item');
      const isAlreadyActive = currentItem.classList.contains('active');

      // Close all accordion items in the page (only one open at a time)
      document.querySelectorAll('.faq-accordion-item').forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-accordion-header');
        const body = item.querySelector('.faq-accordion-body');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (body) body.setAttribute('aria-hidden', 'true');
      });

      // If clicked item was NOT open, open it now
      if (!isAlreadyActive) {
        currentItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        const body = currentItem.querySelector('.faq-accordion-body');
        if (body) body.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // 5. Interactive Pipeline Automation Workflow Simulator
  const canvasWrap = document.querySelector('.automation-canvas-wrap');
  if (canvasWrap) {
    let currentStep = 0;
    let isPaused = false;

    const statusPill = document.getElementById('live-sim-status');
    const tooltipText = document.getElementById('canvas-tooltip-text');

    const stepNodes = {
      1: document.getElementById('flow-step-1'),
      2: document.getElementById('flow-step-2'),
      '3a': document.getElementById('flow-step-3a'),
      '3b': document.getElementById('flow-step-3b'),
      4: document.getElementById('flow-step-4')
    };

    const connectors = {
      1: document.getElementById('connector-1'),
      healthy: document.getElementById('connector-healthy'),
      stale: document.getElementById('connector-stale'),
      4: document.getElementById('connector-4')
    };

    const chips = {
      yes1: document.getElementById('chip-yes-1'),
      no1: document.getElementById('chip-no-1'),
      yes2: document.getElementById('chip-yes-2'),
      no2: document.getElementById('chip-no-2')
    };

    const autoActions = [
      document.getElementById('auto-act-1'),
      document.getElementById('auto-act-2'),
      document.getElementById('auto-act-3'),
      document.getElementById('auto-act-4')
    ];

    function resetSimulation() {
      Object.values(stepNodes).forEach(node => node && node.classList.remove('active-step'));
      Object.values(connectors).forEach(conn => conn && conn.classList.remove('pulsing'));
      Object.values(chips).forEach(chip => chip && chip.classList.remove('active'));
      autoActions.forEach(act => act && act.classList.remove('active'));
    }

    function runNextStep() {
      if (isPaused) return;

      currentStep = (currentStep + 1) % 5;
      resetSimulation();

      if (currentStep === 0) {
        // Step 1: Monitoring
        if (stepNodes[1]) stepNodes[1].classList.add('active-step');
        if (connectors[1]) connectors[1].classList.add('pulsing');
        if (statusPill) statusPill.innerHTML = '<i data-lucide="refresh-cw" class="spin-icon"></i> 🔍 Step 1: Monitoring Buyer Activity...';
      } else if (currentStep === 1) {
        // Step 2: Primary Check
        if (stepNodes[2]) stepNodes[2].classList.add('active-step');
        if (chips.no1) chips.no1.classList.add('active');
        if (connectors.stale) connectors.stale.classList.add('pulsing');
        if (statusPill) statusPill.innerHTML = '<i data-lucide="zap" style="color: #7C3AED;"></i> ⚠ Step 2: 14 Days Inactivity Detected!';
      } else if (currentStep === 2) {
        // Step 3b: Secondary Check
        if (stepNodes['3b']) stepNodes['3b'].classList.add('active-step');
        if (chips.no2) chips.no2.classList.add('active');
        if (connectors[4]) connectors[4].classList.add('pulsing');
        if (statusPill) statusPill.innerHTML = '<i data-lucide="alert-circle" style="color: #F59E0B;"></i> 🚨 Step 3: No Future Meeting Scheduled!';
      } else if (currentStep === 3) {
        // Step 4: Flag & Trigger System Actions
        if (stepNodes[4]) stepNodes[4].classList.add('active-step');
        autoActions.forEach((act, idx) => {
          setTimeout(() => {
            if (act) act.classList.add('active');
          }, idx * 250);
        });
        if (statusPill) statusPill.innerHTML = '<i data-lucide="check-circle" style="color: #10B981;"></i> ⚡ Step 4: Breakup Sequence & Rep Alert Fired!';
      } else if (currentStep === 4) {
        // Branch A Demo: Healthy Opportunity
        if (stepNodes[1]) stepNodes[1].classList.add('active-step');
        if (stepNodes[2]) stepNodes[2].classList.add('active-step');
        if (chips.yes1) chips.yes1.classList.add('active');
        if (connectors.healthy) connectors.healthy.classList.add('pulsing');
        if (stepNodes['3a']) stepNodes['3a'].classList.add('active-step');
        if (statusPill) statusPill.innerHTML = '<i data-lucide="check" style="color: #10B981;"></i> ✓ Alternate Path: Buyer Responded → Deal Healthy';
      }

      if (window.lucide) lucide.createIcons();
    }

    // Start auto loop
    runNextStep();
    setInterval(runNextStep, 3200);

    // Hover tooltip behavior & pause on hover
    Object.keys(stepNodes).forEach(key => {
      const node = stepNodes[key];
      if (node) {
        node.addEventListener('mouseenter', () => {
          isPaused = true;
          resetSimulation();
          node.classList.add('active-step');
          const tip = node.getAttribute('data-tooltip');
          if (tip && tooltipText) {
            tooltipText.innerHTML = `<strong>${node.querySelector('.flow-card-title').innerText}:</strong> ${tip}`;
          }
        });
        node.addEventListener('mouseleave', () => {
          isPaused = false;
          if (tooltipText) {
            tooltipText.innerHTML = '<i data-lucide="info" style="color: #7C3AED; width: 18px; height: 18px; flex-shrink: 0;"></i> Hover any step above to inspect underlying CRM rules &amp; automation logic.';
            if (window.lucide) lucide.createIcons();
          }
        });
      }
    });
  }

  // Initialize Lucide Icons if loaded
  if (window.lucide) {
    lucide.createIcons();
  }
});

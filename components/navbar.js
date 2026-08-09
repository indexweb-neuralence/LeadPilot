// components/navbar.js - Reusable Official LeadPilot Global Navigation Component

(function initGlobalNavbar() {
  function renderNavbar() {
    // 1. Ensure css/navbar.css stylesheet is loaded
    if (!document.querySelector('link[href*="css/navbar.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/navbar.css';
      document.head.appendChild(link);
    }

    // 2. Master Global Navigation HTML (Source of Truth matching Landing Page, without dropdown chevrons)
    const navHTML = `
  <a href="index.html" class="nav-logo">
    <img src="images/LEAD PILOT LOGO.png" alt="LeadPilot Logo" class="nav-logo-img" style="width: 28px; height: 28px; object-fit: contain;">
    LeadPilot
  </a>
  <div class="nav-links">
    <!-- 1. PRODUCT DROPDOWN (NO CHEVRON ARROW) -->
    <div class="nav-dropdown-wrapper">
      <a href="#" class="nav-dropdown-trigger nav-link-product">Product</a>
      <div class="mega-menu">
        <div class="mega-menu-grid">
          <!-- Column 1: Lead Generation -->
          <div class="mega-menu-column">
            <div class="mega-menu-category">Lead Generation</div>
            
            <a href="lead-generator.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(37, 99, 235, 0.08); color: #2563EB;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21l-6-6" /><circle cx="15" cy="9" r="3" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">Lead Generator</span>
                <span class="mega-menu-desc">Find verified companies and decision-makers using advanced filters.</span>
              </div>
            </a>
            
            <a href="lead-forms.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(16, 163, 74, 0.08); color: #16A34A;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">AI Lead Forms</span>
                <span class="mega-menu-desc">Capture inbound leads with smart forms that sync with CRM.</span>
              </div>
            </a>
          </div>

          <!-- Column 2: Sales Pipeline -->
          <div class="mega-menu-column">
            <div class="mega-menu-category">Sales Pipeline</div>
            
            <a href="crm-pipeline.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(234, 88, 12, 0.08); color: #EA580C;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">CRM &amp; Pipeline</span>
                <span class="mega-menu-desc">Manage leads, deals, and your complete pipeline from one workspace.</span>
              </div>
            </a>
            
            <a href="meeting-booking.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(37, 99, 235, 0.08); color: #2563EB;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M9 16l2 2 4-4" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">Meeting Booking</span>
                <span class="mega-menu-desc">Let prospects book meetings instantly with calendar sync.</span>
              </div>
            </a>
          </div>

          <!-- Column 3: AI & Automation -->
          <div class="mega-menu-column">
            <div class="mega-menu-category">AI &amp; Automation</div>
            
            <a href="ai-sales-assistant.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(124, 58, 237, 0.08); color: #7C3AED;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">AI Sales Assistant</span>
                <span class="mega-menu-desc">AI assistance for research and sales productivity.</span>
              </div>
            </a>
            
            <a href="ai-chatbot.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(5, 150, 105, 0.08); color: #059669;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 10h.01M12 10h.01M16 10h.01" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">AI Chatbot</span>
                <span class="mega-menu-desc">Automatically qualify website visitors and convert them.</span>
              </div>
            </a>

            <a href="ai-sales-coach.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(124, 58, 237, 0.08); color: #7C3AED;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">AI Sales Coach</span>
                <span class="mega-menu-desc">Analyze conversations and improve performance with AI.</span>
              </div>
            </a>
          </div>

          <!-- Column 4: Outreach -->
          <div class="mega-menu-column">
            <div class="mega-menu-category">Outreach</div>
            
            <a href="ai-sales-sequences.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(217, 119, 6, 0.08); color: #D97706;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">Sales Sequences</span>
                <span class="mega-menu-desc">Build automated multi-step email and follow-up sequences.</span>
              </div>
            </a>
            
            <a href="quotations.html" class="mega-menu-item">
              <div class="mega-menu-icon-wrap" style="background: rgba(225, 29, 72, 0.08); color: #E11D48;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
              </div>
              <div class="mega-menu-text">
                <span class="mega-menu-title">Quotations</span>
                <span class="mega-menu-desc">Generate proposals in seconds with built-in workflows.</span>
              </div>
            </a>
          </div>
        </div>
        
        <!-- Mega Menu Footer -->
        <div class="mega-menu-footer">
          <div class="mega-menu-footer-left">
            <span class="footer-badge">Everything connected.</span>
            <span class="footer-text">LeadPilot combines lead generation, CRM, meetings, automation, AI, and sales coaching.</span>
          </div>
          <a href="index.html#tools" class="mega-menu-footer-link">View All Products →</a>
        </div>
      </div>
    </div>

    <!-- PRICING LINK -->
    <a href="pricing.html" class="nav-link-pricing">Pricing</a>

    <!-- 2. RESOURCES DROPDOWN (NO CHEVRON ARROW) -->
    <div class="nav-dropdown-wrapper">
      <a href="#" class="nav-dropdown-trigger nav-link-resources">Resources</a>
      <div class="mega-menu mega-menu-resources">
        <div class="mega-menu-resources-grid">
          <!-- Left Column: RESOURCES -->
          <div class="resources-left-col">
            <div class="mega-menu-category">RESOURCES</div>
            <div class="resource-items-list">
                <!-- Item 1: Blog -->
                <a href="blog.html" class="resource-item">
                  <div class="resource-icon-wrap" style="background: rgba(124, 58, 237, 0.08); color: #7C3AED;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                  </div>
                  <div class="resource-text">
                    <span class="resource-title">Blog</span>
                    <span class="resource-desc">Product updates, sales insights, and industry trends.</span>
                  </div>
                  <div class="resource-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </a>

                <!-- Item 2: Case Studies -->
                <a href="case-studies.html" class="resource-item">
                  <div class="resource-icon-wrap" style="background: rgba(234, 88, 12, 0.08); color: #EA580C;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div class="resource-text">
                    <span class="resource-title">Case Studies</span>
                    <span class="resource-desc">Real customer stories, results, and success journeys.</span>
                  </div>
                  <div class="resource-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </a>

                <!-- Item 3: Free Resources -->
                <a href="free-resources.html" class="resource-item">
                  <div class="resource-icon-wrap" style="background: rgba(16, 185, 129, 0.08); color: #10B981;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div class="resource-text">
                    <span class="resource-title">Free Resources</span>
                    <span class="resource-desc">Templates, ebooks, playbooks, and checklists.</span>
                  </div>
                  <div class="resource-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </a>

                <!-- Item 4: Webinars -->
                <a href="webinars.html" class="resource-item">
                  <div class="resource-icon-wrap" style="background: rgba(37, 99, 235, 0.08); color: #2563EB;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  </div>
                  <div class="resource-text">
                    <span class="resource-title">Webinars</span>
                    <span class="resource-desc">Live demos, training sessions, and product walkthroughs.</span>
                  </div>
                  <div class="resource-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </a>
              </div>
            </div>

          <!-- Right Column: FEATURED -->
          <div class="resources-right-col">
            <div class="mega-menu-category">FEATURED</div>
            <div class="featured-cards-wrap">
              <!-- Featured Card 1 (Large Main Card) -->
              <div class="featured-card-main">
                <div class="featured-main-content">
                  <span class="featured-badge">CASE STUDY</span>
                  <h3 class="featured-headline">How sales teams close more deals with LeadPilot</h3>
                  <p class="featured-desc">See how businesses simplified lead generation, CRM and follow-ups in one workspace.</p>
                  <a href="case-studies.html" class="featured-link">Read Case Study &rarr;</a>
                </div>
                
                <!-- Dashboard UI Graphic Illustration -->
                <div class="featured-main-visual">
                  <div class="mini-dashboard-card">
                    <div class="mini-dash-header">
                      <div class="mini-dash-title">Deals Overview</div>
                      <div class="mini-dash-pipeline-title">Pipeline</div>
                    </div>
                    <div class="mini-dash-body">
                      <div class="mini-dash-stats">
                        <div class="mini-stat-label">Total Deals</div>
                        <div class="mini-stat-val">248 <span class="mini-stat-growth">↑ 32.6%</span></div>
                        <svg width="140" height="50" viewBox="0 0 140 50" fill="none" class="mini-chart-svg">
                          <path d="M0 42 C 20 40, 35 30, 50 35 C 65 40, 80 18, 100 24 C 120 30, 130 10, 140 8" stroke="#7C3AED" stroke-width="2.5" fill="none"/>
                        </svg>
                      </div>
                      <div class="mini-dash-stages">
                        <div class="stage-row"><span class="dot dot-purple"></span> Qualified <span class="stage-num">82</span></div>
                        <div class="stage-row"><span class="dot dot-violet"></span> Proposal <span class="stage-num">64</span></div>
                        <div class="stage-row"><span class="dot dot-orange"></span> Negotiation <span class="stage-num">48</span></div>
                        <div class="stage-row"><span class="dot dot-pink"></span> Closed Won <span class="stage-num">54</span></div>
                      </div>
                    </div>
                    <!-- Floating Badge -->
                    <div class="floating-closed-won-badge">
                      <div class="won-check-circle">✓</div>
                      <div class="won-text-block">
                        <div class="won-title">Closed Won</div>
                        <div class="won-growth">↑ 28% vs last month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Featured Card 2 (Smaller Horizontal Card) -->
              <div class="featured-card-secondary">
                <div class="secondary-card-left">
                  <span class="featured-badge">WEBINAR</span>
                  <div class="secondary-text-group">
                    <span class="secondary-title">AI for Modern Sales Teams</span>
                    <span class="secondary-subtitle">Join our next live session.</span>
                  </div>
                </div>
                <div class="secondary-card-right">
                  <a href="5-ai-workflows-every-b2b-sales-leader-needs.html" class="secondary-cta-link">Reserve Your Seat &rarr;</a>
                  <div class="calendar-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mega Menu Footer Strip -->
        <div class="mega-menu-resources-footer">
          <div class="resources-footer-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <div class="resources-footer-text">
            <span class="res-footer-title">Everything connected.</span>
            <span class="res-footer-desc">Learn how LeadPilot helps sales teams generate leads, manage deals and automate repetitive work.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT LINK -->
    <a href="about.html" class="nav-link-about">About</a>
  </div>
  <div class="nav-actions">
    <a href="index.html#cta" class="btn-ghost-nav">Login</a>
    <a href="index.html#cta" class="btn-outline-nav">Book Demo</a>
    <a href="index.html#cta" class="btn-solid-nav">Start Free Trial</a>
  </div>

  <button class="mobile-nav-toggle" aria-label="Toggle Menu">
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
  </button>
    `;

    const mobileDrawerHTML = `
  <div class="mobile-drawer-header">
    <a href="index.html" class="nav-logo">
      <img src="images/LEAD PILOT LOGO.png" alt="LeadPilot Logo" style="width: 28px; height: 28px; object-fit: contain;">
      LeadPilot
    </a>
    <button class="mobile-drawer-close" aria-label="Close Menu">&times;</button>
  </div>
  <div class="mobile-drawer-links">
    <a href="lead-generator.html">Lead Generator</a>
    <a href="crm-pipeline.html">CRM &amp; Pipeline</a>
    <a href="ai-sales-assistant.html">AI Sales Assistant</a>
    <a href="quotations.html">Quotations</a>
    <a href="pricing.html">Pricing</a>
    <a href="blog.html">Resources</a>
    <a href="about.html">About</a>
  </div>
  <div class="mobile-drawer-actions">
    <a href="index.html#cta" class="btn-outline-drawer">Book Demo</a>
    <a href="index.html#cta" class="btn-solid-drawer">Start Free Trial</a>
  </div>
    `;

    // Auto-detect relative prefix for subdirectories
    const isSubdir = window.location.pathname.includes('/case-studies/');
    const prefix = isSubdir ? '../' : '';

    // Ensure css/navbar.css stylesheet is loaded
    if (!document.querySelector('link[href*="css/navbar.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = prefix + 'css/navbar.css';
      document.head.appendChild(link);
    }

    // Process HTML to prepend relative prefix if in a subdirectory
    let processedNavHTML = navHTML;
    let processedDrawerHTML = mobileDrawerHTML;
    if (isSubdir) {
      processedNavHTML = navHTML.replace(/(href|src)="(?!#|https?:)/g, '$1="../');
      processedDrawerHTML = mobileDrawerHTML.replace(/(href|src)="(?!#|https?:)/g, '$1="../');
    }

    // 3. Mount or Replace <nav> Element
    let navEl = document.querySelector('nav');
    if (!navEl) {
      navEl = document.createElement('nav');
      document.body.insertBefore(navEl, document.body.firstChild);
    }
    navEl.innerHTML = processedNavHTML;

    // 4. Mount or Replace Mobile Nav Drawer Element
    let drawerEl = document.querySelector('.mobile-nav-drawer');
    if (!drawerEl) {
      drawerEl = document.createElement('div');
      drawerEl.className = 'mobile-nav-drawer';
      document.body.appendChild(drawerEl);
    }
    drawerEl.innerHTML = processedDrawerHTML;

    // 5. Active Link Highlight Logic
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navAbout = document.querySelector('.nav-link-about');
    const navPricing = document.querySelector('.nav-link-pricing');
    const navResources = document.querySelector('.nav-link-resources');
    const navProduct = document.querySelector('.nav-link-product');

    const resourcePages = [
      'blog.html',
      'case-studies.html',
      'resources.html',
      'free-resources.html',
      'webinars.html',
      'index.html',
      'acme-manufacturing.html',
      'novagrid.html',
      'velocity-fintech.html',
      'orbit-logistics.html',
      'brightworks-consulting.html',
      'ai-sales-operating-system.html',
      '5-ai-workflows-every-b2b-sales-leader-needs.html',
      'pipeline-management-101.html',
      'b2b-prospecting-data-verification.html',
      'multi-channel-sales-sequences.html',
      'ai-conversation-intelligence.html',
      'leadpilot-summer-2026-release.html',
      'help.html',
      'faq.html'
    ];

    const productPages = [
      'lead-generator.html',
      'lead-forms.html',
      'crm-pipeline.html',
      'meeting-booking.html',
      'ai-sales-assistant.html',
      'ai-chatbot.html',
      'ai-sales-coach.html',
      'quotations.html',
      'hero.html'
    ];

    const isCaseStudy = isSubdir || currentPath.includes('case-stud') || currentPath.includes('acme') || currentPath.includes('novagrid') || currentPath.includes('velocity') || currentPath.includes('orbit') || currentPath.includes('brightworks');

    if (currentPath === 'about.html' && navAbout) {
      navAbout.classList.add('active');
      navAbout.style.color = '#7C3AED';
      navAbout.style.fontWeight = '700';
    } else if (currentPath === 'pricing.html' && navPricing) {
      navPricing.classList.add('active');
      navPricing.style.color = '#7C3AED';
      navPricing.style.fontWeight = '700';
    } else if (productPages.includes(currentPath) && navProduct) {
      navProduct.classList.add('active');
      navProduct.style.color = '#7C3AED';
      navProduct.style.fontWeight = '700';
    }

    // 6. Mobile Drawer Toggle Handlers
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const closeBtn = document.querySelector('.mobile-drawer-close');

    if (toggleBtn && drawerEl) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        drawerEl.classList.toggle('active');
      });
    }

    if (closeBtn && drawerEl) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        drawerEl.classList.remove('active');
      });
    }

    document.addEventListener('click', (e) => {
      if (drawerEl && drawerEl.classList.contains('active')) {
        if (!drawerEl.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
          drawerEl.classList.remove('active');
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && drawerEl) {
        drawerEl.classList.remove('active');
      }
    });

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
  } else {
    renderNavbar();
  }
})();

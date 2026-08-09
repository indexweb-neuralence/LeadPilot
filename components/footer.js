// components/footer.js - Reusable Official LeadPilot Global Footer Component

(function initGlobalFooter() {
  function renderFooter() {
    // 1. Ensure footer.css stylesheet is loaded
    if (!document.querySelector('link[href*="css/footer.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/footer.css';
      document.head.appendChild(link);
    }

    // 2. Master Global Footer HTML Content
    const footerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="nav-logo" style="color:#fff">
              <img src="images/LEAD PILOT LOGO.png" alt="LeadPilot Logo" style="width: 32px; height: 32px; object-fit: contain; margin-right: 8px;">
              LeadPilot
            </a>
            <p>One platform for lead generation, CRM, meetings, quotations, AI sales tools, and revenue growth. Replace 9 separate tools with one connected platform.</p>
            <div class="footer-socials">
              <a href="https://www.linkedin.com" target="_blank" class="social-btn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" class="social-btn" aria-label="X (Twitter)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" class="social-btn" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            <!-- Desktop-only CTA Card -->
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
            <a href="ai-sales-assistant.html" class="footer-link">AI Sales Assistant</a>
            <a href="meeting-booking.html" class="footer-link">Meeting Booking</a>
            <a href="ai-chatbot.html" class="footer-link">AI Chatbot</a>
            <a href="quotations.html" class="footer-link">Quotations</a>
            <a href="ai-sales-sequences.html" class="footer-link">Sales Sequences</a>
            <a href="lead-forms.html" class="footer-link">AI Lead Forms</a>
            <a href="ai-sales-coach.html" class="footer-link">AI Sales Coach</a>
          </div>
          
          <div class="footer-links-col" id="footer-compare-col">
            <div class="footer-col-title">Compare</div>
            <a href="lead-generator.html#compare" class="footer-link">Compare with ZoomInfo</a>
            <a href="lead-forms.html#compare" class="footer-link">Compare with Typeform</a>
            <a href="lead-forms.html#compare" class="footer-link">Compare with Jotform</a>
            <a href="lead-forms.html#compare" class="footer-link">Compare with Google Forms</a>
            <a href="crm-pipeline.html#compare" class="footer-link">Compare with HubSpot</a>
            <a href="meeting-booking.html#compare" class="footer-link">Compare with Calendly</a>
            <a href="ai-chatbot.html#compare" class="footer-link">Compare with Intercom</a>
            <a href="ai-sales-coach.html#compare" class="footer-link">Compare with Gong</a>
            <a href="ai-sales-sequences.html#compare" class="footer-link">Compare with Lemlist</a>
            <a href="quotations.html#compare" class="footer-link">Compare with PandaDoc</a>
          </div>
          
          <div class="footer-links-col">
            <div class="footer-col-title">Resources</div>
            <a href="blog.html" class="footer-link">Blog</a>
            <a href="blog.html" class="footer-link">Resource Center</a>
            <a href="help.html" class="footer-link">Help Center</a>
            <a href="help.html" class="footer-link">Documentation</a>
            <a href="case-studies.html" class="footer-link">Case Studies</a>
            <a href="pricing.html" class="footer-link">Pricing</a>
            <a href="faq.html" class="footer-link">FAQs</a>
            <a href="contact.html" class="footer-link">Contact Us</a>
          </div>
          
          <div class="footer-links-col">
            <div class="footer-col-title">Company</div>
            <a href="about.html" class="footer-link">About LeadPilot</a>
            <a href="careers.html" class="footer-link">Careers</a>
            <a href="privacy-policy.html" class="footer-link">Privacy Policy</a>
            <a href="terms-of-use.html" class="footer-link">Terms of Service</a>
            <a href="cookies-policy.html" class="footer-link">Cookies Policy</a>
          </div>

          <!-- Mobile/Tablet-only CTA Card -->
          <div class="footer-cta-card mobile-only-cta">
            <div class="footer-cta-title">Replace 9 tools.</div>
            <div class="footer-cta-desc">Run everything from one place.</div>
            <a href="index.html#cta" class="footer-cta-btn">Start Free Trial &rarr;</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 LeadPilot. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-of-use.html">Terms of Service</a>
            <a href="cookies-policy.html">Cookies Policy</a>
          </div>
        </div>
      </div>
    `;

    // 3. Create or mount global footer element
    let footerEl = document.querySelector('footer');
    if (!footerEl) {
      footerEl = document.createElement('footer');
      document.body.appendChild(footerEl);
    }

    footerEl.id = 'global-footer';
    footerEl.className = 'global-leadpilot-footer';
    footerEl.innerHTML = footerHTML;

    // Hide Compare column if on AI Assistant page (no comparison section)
    const isAIAssistantPage = window.location.pathname.includes('ai-sales-assistant') || window.location.pathname.includes('ai-assistant');
    if (isAIAssistantPage) {
      const compareCol = footerEl.querySelector('#footer-compare-col');
      if (compareCol) {
        compareCol.style.display = 'none';
      }
    }

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();

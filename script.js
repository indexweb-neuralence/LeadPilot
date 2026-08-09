// script.js - LeadPilot Interactive Engine (Hybrid Layout)

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 1. Sticky Header & Scroll Effects
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Nav Drawer Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      mobileToggle.innerHTML = isOpen 
        ? '<i data-lucide="x"></i>' 
        : '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      });
    });
  }

  // 3. Full Journey Interactive Snake Roadmap
  const journeyNodes = document.querySelectorAll('.journey-node');
  const journeyTitle = document.getElementById('journey-step-title');
  const journeyDesc = document.getElementById('journey-step-desc');
  const journeyIconBox = document.querySelector('.journey-icon-box');

  const journeyData = {
    1: {
      title: "Generate Leads",
      desc: "Search through a global database of verified business contacts filtered by industry, department size, location, and technology stack. Add leads directly to your CRM pipelines with a single click.",
      icon: "search"
    },
    2: {
      title: "Capture Leads",
      desc: "Automatically capture incoming leads from web forms, chat widgets, and printed QR scans, and sync their contact records instantly into your main lead bucket.",
      icon: "target"
    },
    3: {
      title: "Qualify Contacts",
      desc: "Use custom AI qualification logic to assess lead budget, timing, and authority before handing them off to your sales agents, saving hours of vetting time.",
      icon: "filter"
    },
    4: {
      title: "Automate Outreach",
      desc: "Launch multi-channel email and WhatsApp sequences that scale up touchpoints automatically and pause the moment a prospect replies.",
      icon: "send"
    },
    5: {
      title: "Book Meetings",
      desc: "Let prospects choose a time slot on your round-robin calendar. LeadPilot automatically handles time zones, calendar syncs, and confirmations.",
      icon: "calendar"
    },
    6: {
      title: "AI Sales Copilot",
      desc: "Your sales agents get automated email draft suggestions, call transcript summaries, and key recommendation notes in real time beside their conversations.",
      icon: "cpu"
    },
    7: {
      title: "Generate Quotations",
      desc: "Generate professional quotations and contracts with dynamic field values, send them to prospects, and get notified the exact second they open them.",
      icon: "file-text"
    },
    8: {
      title: "Close Deals",
      desc: "Collect secure e-signatures and payment details directly inside the LeadPilot workspace to lock in deals without any external friction.",
      icon: "trophy"
    },
    9: {
      title: "Analyze Pipeline",
      desc: "Track your team's deal flow velocities, pipeline conversion ratios, and win-loss root causes with auto-generated charts and dashboards.",
      icon: "bar-chart-3"
    },
    10: {
      title: "Coach Team",
      desc: "Grade rep call recordings automatically, review commitment lists, and push personalized coaching tips to underperforming agents.",
      icon: "award"
    }
  };

  if (journeyNodes && journeyTitle && journeyDesc) {
    journeyNodes.forEach(node => {
      node.addEventListener('click', () => {
        // Clear active classes
        journeyNodes.forEach(n => n.classList.remove('active'));
        
        // Add active to current
        node.classList.add('active');
        
        const stepNum = node.getAttribute('data-step');
        const data = journeyData[stepNum];
        
        if (data) {
          // Animate transition
          const box = document.getElementById('journey-details-box');
          box.style.opacity = '0.5';
          box.style.transform = 'translateY(5px)';
          
          setTimeout(() => {
            journeyTitle.textContent = data.title;
            journeyDesc.textContent = data.desc;
            journeyIconBox.innerHTML = `<i data-lucide="${data.icon}" class="text-purple"></i>`;
            lucide.createIcons();
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
          }, 150);
        }
      });
    });
  }

  // 4. 9 Modules Interactive Tab Switcher & Image Change
  const toolCards = document.querySelectorAll('.tool-card');
  const toolsImg = document.getElementById('tools-img');

  const moduleImages = {
    m1: "images/nine_tools.png",
    m2: "images/hero_dashboard.png",
    m3: "images/ai_os.png",
    m4: "images/meeting_forms.png",
    m5: "images/ai_os.png",
    m6: "images/hero_dashboard.png",
    m7: "images/nine_tools.png",
    m8: "images/meeting_forms.png",
    m9: "images/ai_coach.png"
  };

  if (toolCards && toolsImg) {
    toolCards.forEach(card => {
      card.addEventListener('click', () => {
        toolCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        const target = card.getAttribute('data-target');
        const imagePath = moduleImages[target];
        
        if (imagePath) {
          // Fade image out
          toolsImg.style.opacity = '0.3';
          toolsImg.style.transform = 'scale(0.98)';
          
          setTimeout(() => {
            toolsImg.src = imagePath;
            toolsImg.style.opacity = '1';
            toolsImg.style.transform = 'scale(1)';
          }, 200);
        }
      });
    });
  }

  // 5. Statistics Numeric Incremental Counting Animation
  const statsSection = document.querySelector('.stats-bar-integrated');
  const statNumbers = document.querySelectorAll('.stat-number');

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const suffix = stat.textContent.replace(/[0-9.]/g, ''); // Extract %, h, etc.
      let current = 0;
      const duration = 1500; // ms
      const stepTime = 15; // ms
      const increment = target / (duration / stepTime);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        // Format display
        if (Number.isInteger(target)) {
          stat.textContent = Math.floor(current).toLocaleString() + suffix;
        } else {
          stat.textContent = current.toFixed(1) + suffix;
        }
      }, stepTime);
    });
  };

  // Run observer to check when stats section enters viewport
  if (statsSection && statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  }

  // 6. Pricing Toggle Switcher
  const pricingToggleBtn = document.getElementById('pricing-toggle-btn');
  const monthlyLabel = document.getElementById('monthly-label');
  const annualLabel = document.getElementById('annual-label');
  const starterPrice = document.getElementById('starter-price');
  const growthPrice = document.getElementById('growth-price');
  const billingTypeTexts = document.querySelectorAll('.billing-type');

  if (pricingToggleBtn) {
    const handlePricingToggle = (isAnnual) => {
      if (isAnnual) {
        pricingToggleBtn.classList.add('active');
        annualLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
        
        starterPrice.textContent = starterPrice.getAttribute('data-annual');
        growthPrice.textContent = growthPrice.getAttribute('data-annual');
        
        billingTypeTexts.forEach(text => {
          if (text.closest('.pricing-card').querySelector('h3').textContent !== 'Enterprise') {
            text.textContent = 'Billed annually';
          }
        });
      } else {
        pricingToggleBtn.classList.remove('active');
        annualLabel.classList.remove('active');
        monthlyLabel.classList.add('active');
        
        starterPrice.textContent = starterPrice.getAttribute('data-monthly');
        growthPrice.textContent = growthPrice.getAttribute('data-monthly');
        
        billingTypeTexts.forEach(text => {
          if (text.closest('.pricing-card').querySelector('h3').textContent !== 'Enterprise') {
            text.textContent = 'Billed monthly';
          }
        });
      }
    };

    pricingToggleBtn.addEventListener('click', () => {
      const activeState = !pricingToggleBtn.classList.contains('active');
      handlePricingToggle(activeState);
    });

    monthlyLabel.addEventListener('click', () => handlePricingToggle(false));
    annualLabel.addEventListener('click', () => handlePricingToggle(true));
  }
});

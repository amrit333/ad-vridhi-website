(() => {
  'use strict';

  // 1. Subtle Initial Page Load Transition
  const dismissLoader = () => {
    document.body.classList.remove('is-loading');
  };
  if (document.readyState === 'complete') {
    requestAnimationFrame(dismissLoader);
  } else {
    window.addEventListener('load', () => setTimeout(dismissLoader, 160), { once: true });
    setTimeout(dismissLoader, 750);
  }

  // 2. Sticky Header State + Mobile Drawer
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const syncHeaderScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', syncHeaderScroll, { passive: true });
  syncHeaderScroll();

  const setDrawerOpen = (isOpen) => {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    mobileDrawer.classList.toggle('is-open', isOpen);
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const open = mobileToggle.getAttribute('aria-expanded') === 'true';
      setDrawerOpen(!open);
    });
    mobileLinks.forEach((link) => link.addEventListener('click', () => setDrawerOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    });
  }

  // 3. Scroll-Triggered Reveals (Respecting Reduced Motion)
  const revealItems = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((el) => el.classList.add('is-revealed'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );
    revealItems.forEach((el) => revealObserver.observe(el));
  }

  // 4. Animated Statistics Counters
  const counterEls = document.querySelectorAll('[data-count]');
  const animateCount = (el) => {
    const target = Number(el.getAttribute('data-count')) || 0;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const duration = 1100;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = `${prefix}${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window && counterEls.length > 0) {
    const statObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 }
    );
    counterEls.forEach((el) => statObserver.observe(el));
  }

  // 5. Tasteful Custom Cursor Spotlight on Interactive Showcase Zones Only
  const studioCursor = document.getElementById('studio-cursor');
  const cursorZones = document.querySelectorAll('[data-cursor-zone]');
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (studioCursor && cursorZones.length > 0 && !isTouch && !prefersReducedMotion) {
    let activeZone = false;
    cursorZones.forEach((zone) => {
      zone.addEventListener('mouseenter', () => {
        activeZone = true;
        studioCursor.textContent = zone.getAttribute('data-cursor-zone') || '';
        studioCursor.classList.add('is-visible', 'is-expanded');
      });
      zone.addEventListener('mouseleave', () => {
        activeZone = false;
        studioCursor.classList.remove('is-visible', 'is-expanded');
      });
    });

    window.addEventListener(
      'mousemove',
      (e) => {
        if (!activeZone) return;
        const offset = 36;
        studioCursor.style.setProperty('--cx', `${e.clientX - offset}px`);
        studioCursor.style.setProperty('--cy', `${e.clientY - offset}px`);
      },
      { passive: true }
    );
  }

  // 6. AI Automation Interactive Workflows
  const workflowData = {
    qualification: {
      title: 'Comment-to-DM & Lead Qualification',
      desc: 'Automated Instagram & Story-to-DM flows answer pricing, sizing, or resource requests instantly and route warm buyers straight to WhatsApp or booking calendars.',
      steps: [
        'Triggers personalized DM responses seconds after a Reel comment or Story reply.',
        'Collects intent, budget fit, and contact details without manual team intervention.',
        'Proven to generate 150+ qualified inquiries with zero paid ad spend.',
      ],
    },
    creative: {
      title: 'AI Content & Creative Intelligence',
      desc: 'Ad-Vridhi combines ChatGPT + Leonardo AI workflows with human creative direction to test winning hooks, thumbnails, and ad angles faster.',
      steps: [
        'Accelerates content calendar production across Reels, carousels, and YouTube SEO.',
        'Tracks hook retention and CPA shifts to refresh creatives before fatigue hits.',
        'Maintains consistent brand aesthetics across every campaign touchpoint.',
      ],
    },
    nurture: {
      title: 'WhatsApp & CRM Follow-Up Routing',
      desc: 'Pre-populates conditional-logic Meta lead answers directly into WhatsApp and sales pipelines for zero-friction prospect conversations.',
      steps: [
        'Segments buyer intent upfront (e.g. 5 distinct personas on 15-Q instant forms).',
        'Lets prospects choose immediate phone call, 1-on-1 video consult, or on-site visit.',
        'Protects lead quality with OTP phone verification and locked funnel order.',
      ],
    },
  };

  const tabButtons = document.querySelectorAll('.automation-tab');
  const autoTitle = document.getElementById('auto-title');
  const autoDesc = document.getElementById('auto-desc');
  const autoSteps = document.getElementById('auto-steps');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-tab');
      const data = workflowData[key];
      if (!data || !autoTitle || !autoDesc || !autoSteps) return;

      tabButtons.forEach((item) => {
        const active = item === btn;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });

      autoTitle.textContent = data.title;
      autoDesc.textContent = data.desc;
      autoSteps.innerHTML = '';
      data.steps.forEach((text) => {
        const li = document.createElement('li');
        const check = document.createElement('span');
        check.className = 'step-check';
        check.setAttribute('aria-hidden', 'true');
        check.textContent = '✓';
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(check);
        li.appendChild(span);
        autoSteps.appendChild(li);
      });
    });
  });

  // 7. Website Design Showcase (4 Concept Switcher + Desktop/Mobile Toggle)
  const conceptBtns = document.querySelectorAll('.concept-tab-btn');
  const conceptPanels = document.querySelectorAll('.concept-panel');
  const viewportBtns = document.querySelectorAll('.viewport-btn');
  const conceptStage = document.getElementById('concept-stage');
  const captionLabel = document.getElementById('concept-caption-label');

  conceptBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = `concept-${btn.getAttribute('data-concept')}`;
      conceptBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      conceptPanels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.id === targetId);
      });
    });
  });

  const viewLabels = {
    dual: 'Showing Desktop + Mobile Responsive Design',
    desktop: 'Showing Desktop Website Preview',
    mobile: 'Showing Mobile Website Preview',
  };

  viewportBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view') || 'dual';
      viewportBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      if (conceptStage) conceptStage.setAttribute('data-view', view);
      if (captionLabel) captionLabel.textContent = viewLabels[view] || viewLabels.dual;
    });
  });

  // 8. Real Client Case Study Filter Pills
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
      workCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        card.classList.toggle('is-hidden', !(filter === 'all' || category === filter));
      });
    });
  });

  // 9. Project Inquiry Form Validation & Feedback
  const growthForm = document.getElementById('growth-form');
  const formFeedback = document.getElementById('form-feedback');

  if (growthForm && formFeedback) {
    growthForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';

      const fullName = document.getElementById('full-name')?.value.trim() || '';
      const workEmail = document.getElementById('work-email')?.value.trim() || '';
      const companyName = document.getElementById('company-name')?.value.trim() || '';
      const growthGoal = document.getElementById('growth-stage')?.value || '';
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail);

      if (!fullName || !companyName || !emailValid) {
        formFeedback.classList.add('is-error');
        formFeedback.textContent =
          'Please enter your name, brand/company name, and a valid email address so our leadership team can respond.';
        return;
      }

      const selectedFocus = Array.from(
        growthForm.querySelectorAll('input[name="focus"]:checked')
      ).map((input) => input.value);
      const focusSummary = selectedFocus.length > 0 ? selectedFocus.join(', ') : 'Full-Funnel Growth';

      formFeedback.classList.add('is-success');
      formFeedback.textContent = `Thank you, ${fullName}. Your Ad-Vridhi project brief for ${companyName} (${growthGoal} — ${focusSummary}) is ready. Our founders will reach out to ${workEmail} within 24 hours.`;
      growthForm.reset();
    });
  }

  // 10. Footer Copyright Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

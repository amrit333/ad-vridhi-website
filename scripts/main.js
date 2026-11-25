(() => {
  'use strict';

  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header elevation on scroll
  const syncHeaderScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', syncHeaderScroll, { passive: true });
  syncHeaderScroll();

  // Accessible mobile drawer toggle
  const setDrawerOpen = (isOpen) => {
    if (!mobileToggle || !mobileDrawer) return;
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    mobileDrawer.classList.toggle('is-open', isOpen);
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const currentlyOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
      setDrawerOpen(!currentlyOpen);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => setDrawerOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    });
  }

  // AI Automation Interactive Workflows
  const workflowData = {
    qualification: {
      badge: 'Workflow 01 • Speed-to-Lead',
      title: 'Instant AI Lead Qualification & Routing',
      desc: 'Every minute lost after a prospect submits a form cuts conversion rates sharply. Ad-Vridhi deploys intelligent agents connected to your ad platforms and CRM to qualify, enrich, and book meetings automatically.',
      steps: [
        'Captures leads from Meta, Google, and landing pages with zero manual CSV exports.',
        'Enriches company profile, evaluates budget fit, and scores intent automatically.',
        'Triggers personalized instant outreach and calendar booking for qualified buyers.',
      ],
      impact: 'Up to 2.4x higher lead-to-meeting rate',
    },
    creative: {
      badge: 'Workflow 02 • Creative Intelligence',
      title: 'Creative & Audience Intelligence Loops',
      desc: 'Ad-Vridhi pairs human strategic direction with automated creative telemetry—pinpointing hook retention drop-offs, angle fatigue, and winning buyer messaging across campaigns.',
      steps: [
        'Aggregates hook rate, hold rate, and CPA shifts across ad sets every morning.',
        'Flags creative fatigue early so budgets reallocate before efficiency erodes.',
        'Synthesizes top-performing customer objections into next-sprint creative briefs.',
      ],
      impact: '35% faster winning creative iteration cycles',
    },
    nurture: {
      badge: 'Workflow 03 • Lifecycle Automation',
      title: 'Autonomous Lifecycle & Pipeline Nurture',
      desc: 'Most leads are not ready to buy on day one. We build intent-triggered follow-up systems that educate prospects with relevant proof points until they are ready to convert.',
      steps: [
        'Adapts messaging by service interest, browsing behavior, and funnel stage.',
        'Coordinates email, WhatsApp, and CRM tasks without manual sales chasing.',
        'Alerts account owners the moment a dormant prospect re-engages with high intent.',
      ],
      impact: '+28% recovered pipeline from existing leads',
    },
  };

  const tabButtons = document.querySelectorAll('.automation-tab');
  const autoBadge = document.getElementById('auto-badge');
  const autoTitle = document.getElementById('auto-title');
  const autoDesc = document.getElementById('auto-desc');
  const autoSteps = document.getElementById('auto-steps');
  const autoImpact = document.getElementById('auto-impact');

  const renderWorkflow = (key) => {
    const data = workflowData[key];
    if (!data || !autoBadge || !autoTitle || !autoDesc || !autoSteps || !autoImpact) return;

    autoBadge.textContent = data.badge;
    autoTitle.textContent = data.title;
    autoDesc.textContent = data.desc;
    autoImpact.textContent = data.impact;

    autoSteps.innerHTML = '';
    data.steps.forEach((stepText) => {
      const li = document.createElement('li');
      const check = document.createElement('span');
      check.className = 'step-check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';

      const textSpan = document.createElement('span');
      textSpan.textContent = stepText;

      li.appendChild(check);
      li.appendChild(textSpan);
      autoSteps.appendChild(li);
    });
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-tab');
      tabButtons.forEach((item) => {
        const active = item === btn;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      renderWorkflow(key);
    });
  });

  // Case Study Filter Pills
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterButtons.forEach((b) => b.classList.toggle('is-active', b === btn));

      workCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  // Growth Consultation Form Validation & Confirmation
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
          'Please enter your full name, company name, and a valid work email address so our team can respond.';
        return;
      }

      const selectedFocus = Array.from(
        growthForm.querySelectorAll('input[name="focus"]:checked')
      ).map((input) => input.value);

      const focusSummary =
        selectedFocus.length > 0 ? selectedFocus.join(', ') : 'Full-Funnel Growth';

      formFeedback.classList.add('is-success');
      formFeedback.textContent = `Thank you, ${fullName}. Your Ad-Vridhi growth brief for ${companyName} (${growthGoal} — ${focusSummary}) has been prepared. Our strategy team will follow up at ${workEmail} within 1 business day.`;
      growthForm.reset();
    });
  }

  // Keep footer copyright year current
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

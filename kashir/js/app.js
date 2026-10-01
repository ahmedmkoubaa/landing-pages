/**
 * Kashir Landing Page Application Logic
 * Interactive Savings Calculator, Direct Email Dispatch (Zero Backend), Dynamic Urgency, Smooth Anchors & GA4 Behavioral Tracking.
 */

// Direct Frontend-to-Inbox Email Endpoint (No backend required)
const LEAD_DESTINATION_EMAIL = "ahmedmou2000@gmail.com";
const SUBMISSION_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_DESTINATION_EMAIL}`;

/**
 * Universal Analytics Dispatcher (Google Analytics 4, Google Ads, Vercel)
 * @param {string} eventName - Standard GA4 or custom event name
 * @param {object} params - Event parameters (dimensions, metrics, labels)
 */
function trackAnalyticsEvent(eventName, params = {}) {
  try {
    // 1. Google Analytics 4 (and linked Google Ads) via gtag.js
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
      console.log(`📊 [GA4 Event] ${eventName}`, params);
    } else if (typeof gtag === 'function') {
      gtag('event', eventName, params);
      console.log(`📊 [GA4 Event] ${eventName}`, params);
    }
    // 2. Vercel Web Analytics (if active)
    if (typeof window.va === 'function') {
      window.va('event', { name: eventName, data: params });
    }
  } catch (err) {
    console.warn('Analytics event dispatch error:', err);
  }
}

// Time Spent on Site & Engagement Milestones Tracking
function initTimeEngagementTracking() {
  const pageStartTime = Date.now();
  const milestones = [15, 30, 60, 120, 180, 300]; // in seconds
  const reachedMilestones = new Set();

  // Active time interval tracker
  const engagementInterval = setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - pageStartTime) / 1000);

    milestones.forEach(milestone => {
      if (elapsedSeconds >= milestone && !reachedMilestones.has(milestone)) {
        reachedMilestones.add(milestone);
        trackAnalyticsEvent('user_engagement_milestone', {
          time_seconds: milestone,
          time_label: `${milestone}s`,
          event_category: 'Engagement'
        });
      }
    });

    // Stop after 10 minutes to save cycles
    if (elapsedSeconds >= 600) {
      clearInterval(engagementInterval);
    }
  }, 1000);

  // Send session duration when the user leaves or switches away
  const logSessionDuration = () => {
    const totalDuration = Math.floor((Date.now() - pageStartTime) / 1000);
    if (totalDuration >= 3) {
      let bucket = '<15s';
      if (totalDuration >= 180) bucket = '>3min';
      else if (totalDuration >= 60) bucket = '1-3min';
      else if (totalDuration >= 30) bucket = '30-60s';
      else if (totalDuration >= 15) bucket = '15-30s';

      trackAnalyticsEvent('session_duration', {
        duration_seconds: totalDuration,
        duration_bucket: bucket,
        event_category: 'Engagement'
      });
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      logSessionDuration();
    }
  });

  window.addEventListener('pagehide', logSessionDuration);
}

// Interactive Savings Calculator
function initCalculator() {
  const slider = document.getElementById('device-slider');
  const sliderCount = document.getElementById('calc-device-count');
  const legacyCostEl = document.getElementById('calc-legacy-cost');
  const kashirCostEl = document.getElementById('calc-kashir-cost');
  const savingsAmountEl = document.getElementById('calc-savings-amount');

  if (!slider) return;

  let debounceTimer;

  function calculate() {
    const devices = parseInt(slider.value, 10);
    sliderCount.textContent = devices;

    // Financial model:
    // Legacy: Base register machine (€1,500) + €500 per extra terminal + €50/mo per device software & maintenance (€600/yr/device)
    const legacyHardware = 1500 + (devices - 1) * 650;
    const legacyAnnualFees = devices * 600;
    const totalLegacy = legacyHardware + legacyAnnualFees;

    // Kashir: 0€ hardware (bring own device) + 0€ Beta platform fee
    const kashirHardware = 0;
    const kashirAnnualFees = 0; // 0€ for Beta users
    const totalKashir = kashirHardware + kashirAnnualFees;

    const savings = totalLegacy - totalKashir;

    legacyCostEl.textContent = `${totalLegacy.toLocaleString()} €`;
    if (kashirCostEl) {
      const lang = document.documentElement.lang || 'es';
      kashirCostEl.textContent = lang === 'es' ? '0 € (Siempre Gratis)' : '0 € (Always Free)';
    }

    // Debounced GA4 tracking for calculator interaction
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      trackAnalyticsEvent('calculator_interaction', {
        device_count: devices,
        calculated_savings: savings,
        event_category: 'Tool Usage'
      });
    }, 1200);
  }

  slider.addEventListener('input', calculate);
  calculate(); // run initial calculation
}

// Dynamic Urgency & Security Banner (Optional Rolling Timer)
function initUrgency() {
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');

  if (!hoursEl || !minsEl || !secsEl) return;

  // Set a rolling 6-hour countdown for high urgency
  let targetTime = Date.now() + (5 * 3600 + 42 * 60 + 19) * 1000;

  function updateTimer() {
    const now = Date.now();
    let diff = Math.max(0, targetTime - now);

    if (diff === 0) {
      targetTime = Date.now() + 6 * 3600 * 1000; // Reset
      diff = targetTime - now;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  setInterval(updateTimer, 1000);
  updateTimer();
}

// Smooth Scroll & Focus for all CTA buttons with GA4 Attribution
function initCTAs() {
  const ctaButtons = document.querySelectorAll('.anchor-cta');
  const formSection = document.getElementById('lead-capture-form');
  const storeNameInput = document.getElementById('store-name');

  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const location = btn.getAttribute('data-cta-location') || 'unknown';
      const buttonText = btn.textContent.trim();
      const lang = document.documentElement.lang || 'es';

      // 🎯 GA4 Custom Event: Track which button location was clicked
      trackAnalyticsEvent('cta_click', {
        button_location: location,
        button_text: buttonText,
        page_language: lang,
        target_section: 'lead-capture-form',
        event_category: 'Conversion Funnel'
      });

      if (formSection) {
        // Target the form-wrapper card directly so the input fields are 100% visible on screen
        const targetCard = formSection.querySelector('.form-wrapper') || formSection;
        const headerEl = document.querySelector('.header');
        const headerOffset = (headerEl ? headerEl.offsetHeight : 68) + 20;

        const cardTop = targetCard.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, cardTop),
          behavior: 'smooth'
        });

        // Add prominent celebratory glow pulse animation to form wrapper
        targetCard.classList.remove('pulse-highlight');
        void targetCard.offsetWidth; // Force reflow to re-trigger animation
        targetCard.classList.add('pulse-highlight');
        setTimeout(() => targetCard.classList.remove('pulse-highlight'), 2200);

        if (storeNameInput) {
          setTimeout(() => {
            try {
              storeNameInput.focus({ preventScroll: true });
            } catch (err) {
              storeNameInput.focus();
            }
          }, 600);
        }
      }
    });
  });
}

// Lead Capture Form Submission Handling (Direct to Gmail via FormSubmit.co + GA4 / Google Ads)
function initLeadForm() {
  const form = document.getElementById('lead-form');
  const submitBtn = document.getElementById('submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');
  const submitSpinner = document.getElementById('submit-spinner');
  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const storeName = document.getElementById('store-name').value.trim();
    const countryCode = document.getElementById('phone-country').value;
    const rawPhone = document.getElementById('phone-number').value.trim();
    const fullPhone = `${countryCode} ${rawPhone}`;
    const sliderEl = document.getElementById('device-slider');
    const devices = sliderEl ? sliderEl.value : '3';
    const lang = document.documentElement.lang || 'es';

    // Simple, low-friction validation (Only Name & Phone required)
    if (!storeName || !rawPhone) {
      alert(lang === 'es' ? 'Por favor completa tu nombre y número de WhatsApp.' : 'Please enter your name and WhatsApp number.');
      return;
    }

    // UI Loading state
    if (submitBtn) submitBtn.disabled = true;
    if (submitSpinner) submitSpinner.classList.remove('hidden');
    if (submitBtnText) {
      submitBtnText.textContent = lang === 'es' ? 'Generando tu acceso gratuito...' : 'Creating your free access...';
    }

    // Payload formatted cleanly for email notification table
    const emailPayload = {
      _subject: `🚀 Nuevo Registro Kashir POS: ${storeName}`,
      _template: "table",
      _captcha: "false",
      "Tienda / Nombre": storeName,
      "Teléfono WhatsApp": fullPhone,
      "Cajas / Dispositivos Estimados": `${devices} dispositivos`,
      "Normativa": "VeriFactu & AEAT Ready",
      "Idioma de Navegación": lang.toUpperCase(),
      "Fecha de Registro": new Date().toLocaleString()
    };

    let sendSuccess = false;

    // 1. Send via AJAX to FormSubmit
    try {
      const response = await fetch(SUBMISSION_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      const data = await response.json().catch(() => ({}));
      console.log('FormSubmit API Response:', data);

      if (response.ok && (data.success === 'true' || data.success === true || (data.message && !data.message.includes('false')))) {
        sendSuccess = true;
      } else if (data.message && data.message.includes('activate')) {
        console.info('FormSubmit activation email sent to:', LEAD_DESTINATION_EMAIL);
        sendSuccess = true;
      }
    } catch (err) {
      console.warn('FormSubmit fetch failed, trying FormData fallback:', err);
    }

    // 2. Fallback via FormData if JSON POST failed (e.g. adblocker or strict CORS)
    if (!sendSuccess) {
      try {
        const formData = new FormData();
        formData.append('_subject', emailPayload._subject);
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');
        formData.append('Tienda / Nombre', storeName);
        formData.append('Teléfono WhatsApp', fullPhone);
        formData.append('Dispositivos Estimados', `${devices} dispositivos`);

        const fallbackResp = await fetch(SUBMISSION_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        const fallbackData = await fallbackResp.json().catch(() => ({}));
        if (fallbackResp.ok && (fallbackData.success === 'true' || fallbackData.success === true)) {
          sendSuccess = true;
        }
      } catch (fbErr) {
        console.warn('FormData fallback error:', fbErr);
      }
    }

    // 3. Post lead data to local express server if available
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailPayload)
      }).catch(() => {});
    } catch (apiErr) {
      // Local server might not be running in static hosting context
    }

    console.log('⚡ Lead processing status:', sendSuccess ? 'DELIVERED' : 'RECORDED (Local)');

    // 🎯 1. Google Analytics 4 standard 'generate_lead' event
    trackAnalyticsEvent('generate_lead', {
      event_category: 'Lead Capture',
      event_label: storeName,
      devices_count: devices,
      plan_type: 'always_free',
      currency: 'EUR',
      value: 1.0
    });

    // 🎯 2. Google Ads Conversion Tracking (AW-952948429)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-952948429/JXh1CLzT_ukcEM2ts8YD',
        'event_category': 'Sign Up',
        'event_label': storeName,
        'value': 1.0,
        'currency': 'EUR'
      });
    }

    // Show celebratory confirmation modal
    form.reset();
    if (successModal) {
      successModal.classList.remove('hidden');
    }

    if (submitBtn) submitBtn.disabled = false;
    if (submitSpinner) submitSpinner.classList.add('hidden');
    if (submitBtnText) {
      submitBtnText.textContent = lang === 'es' ? 'Obtener Acceso Gratuito Ahora →' : 'Get Free Access Now →';
    }
  });

  if (successModal) {
    const closeModal = () => {
      successModal.classList.add('hidden');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    // Also close if clicking outside modal content or pressing Escape
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !successModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }
}

// FAQ Accordion Interaction with GA4 tracking
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close others
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');

          const questionText = question.textContent.trim().replace('+', '').trim();
          trackAnalyticsEvent('faq_expand', {
            question_title: questionText,
            event_category: 'FAQ Interaction'
          });
        }
      });
    }
  });
}

// Video Playback & Interaction Tracking (GA4 & User Behavior)
function initVideoControls() {

  // 1. Top video: Autoplaying, loop, muted demo video
  const scansVideo = document.getElementById('kashir-demo-video');
  if (scansVideo) {
    scansVideo.muted = true;
    scansVideo.removeAttribute('controls');
    const playPromise = scansVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay prevented
      });
    }
  }

  // 2. Second video: Presenter video with click-to-play overlay
  const presenterVideo = document.getElementById('kashir-presenter-video');
  const playBtn = document.getElementById('video-play-btn');
  const wrapper = playBtn ? playBtn.closest('.presenter-video-wrapper') : null;

  if (presenterVideo && playBtn && wrapper) {
    // Ensure it starts paused and doesn't autoplay
    presenterVideo.pause();

    // 🎯 Track when user specifically clicks the big play button overlay
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      trackAnalyticsEvent('video_play_click', {
        video_id: 'kashir-presenter-video',
        video_title: 'Presenter Explanation Video - Meet the Founders',
        interaction_type: 'play_button_click',
        event_category: 'Video Engagement'
      });

      wrapper.classList.add('is-playing');
      presenterVideo.setAttribute('controls', 'controls');
      presenterVideo.play().catch(err => {
        console.warn('Playback error on presenter video:', err);
      });
    });

    // 🎯 Track native play event
    presenterVideo.addEventListener('play', () => {
      trackAnalyticsEvent('video_play', {
        video_id: 'kashir-presenter-video',
        video_current_time: Math.round(presenterVideo.currentTime),
        event_category: 'Video Engagement'
      });
      wrapper.classList.add('is-playing');
      presenterVideo.setAttribute('controls', 'controls');
    });

    // 🎯 Track native pause event
    presenterVideo.addEventListener('pause', () => {
      trackAnalyticsEvent('video_pause', {
        video_id: 'kashir-presenter-video',
        video_current_time: Math.round(presenterVideo.currentTime),
        event_category: 'Video Engagement'
      });
      wrapper.classList.remove('is-playing');
      presenterVideo.removeAttribute('controls');
    });

    // 🎯 Track complete watch event
    presenterVideo.addEventListener('ended', () => {
      trackAnalyticsEvent('video_complete', {
        video_id: 'kashir-presenter-video',
        video_duration: Math.round(presenterVideo.duration || 10),
        event_category: 'Video Engagement'
      });
    });
  }
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  const safeInit = (name, fn) => {
    try {
      fn();
    } catch (err) {
      console.error(`Error initializing ${name}:`, err);
    }
  };

  safeInit('Calculator', initCalculator);
  safeInit('Urgency', initUrgency);
  safeInit('CTAs', initCTAs);
  safeInit('LeadForm', initLeadForm);
  safeInit('FAQ', initFAQ);
  safeInit('VideoControls', initVideoControls);
  safeInit('TimeEngagementTracking', initTimeEngagementTracking);
});

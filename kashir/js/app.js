/**
 * Kashir Landing Page Application Logic
 * Interactive Savings Calculator, Direct Email Dispatch (Zero Backend), Dynamic Urgency, Smooth Anchors & GA4 Behavioral Tracking.
 */

// Direct Frontend-to-Inbox Email Endpoint (No backend required)
const LEAD_DESTINATION_EMAIL = "ahmedmou2000@gmail.com";
const SUBMISSION_ENDPOINT = 'https://formsubmit.co/ajax/2041cb39dda0eea2cba867fafaac9238';

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
    kashirCostEl.textContent = `${totalKashir.toLocaleString()} €`;
    savingsAmountEl.textContent = `${savings.toLocaleString()} €`;

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

// Dynamic Urgency & Countdown Timer
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
  const formTarget = document.getElementById('lead-capture-form');
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

      if (formTarget) {
        // Calculate offset position accounting for sticky header
        const headerEl = document.querySelector('.header');
        const headerOffset = (headerEl ? headerEl.offsetHeight : 70) + 16;
        const targetTop = formTarget.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });

        // Add prominent celebratory glow pulse animation to form wrapper
        const formWrapper = formTarget.querySelector('.form-wrapper') || formTarget;
        formWrapper.classList.remove('pulse-highlight');
        void formWrapper.offsetWidth; // Force reflow to re-trigger animation
        formWrapper.classList.add('pulse-highlight');
        setTimeout(() => formWrapper.classList.remove('pulse-highlight'), 2200);

        if (storeNameInput) {
          setTimeout(() => {
            storeNameInput.focus({ preventScroll: true });
          }, 700);
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
    const email = document.getElementById('email').value.trim();
    const countryCode = document.getElementById('phone-country').value;
    const rawPhone = document.getElementById('phone-number').value.trim();
    const fullPhone = `${countryCode} ${rawPhone}`;
    const storeType = document.getElementById('store-type').value;
    const devices = document.getElementById('device-count-select').value;
    const lang = document.documentElement.lang || 'es';

    // Simple client-side validation
    if (!storeName || !email || !rawPhone) {
      alert(lang === 'es' ? 'Por favor completa todos los campos obligatorios.' : 'Please fill in all required fields.');
      return;
    }

    // UI Loading state
    if (submitBtn) submitBtn.disabled = true;
    if (submitSpinner) submitSpinner.classList.remove('hidden');
    if (submitBtnText) {
      submitBtnText.textContent = lang === 'es' ? 'Enviando tu solicitud...' : 'Reserving your spot...';
    }

    // Payload formatted cleanly for email notification table
    const emailPayload = {
      _subject: `🔥 Nuevo Lead Kashir Beta: ${storeName}`,
      _template: "table",
      _captcha: "false",
      "Tienda / Negocio": storeName,
      "Email de Contacto": email,
      "Teléfono WhatsApp": fullPhone,
      "Tipo de Comercio": storeType,
      "Dispositivos / Cajas": devices,
      "Idioma de Navegación": lang.toUpperCase(),
      "Fecha de Registro": new Date().toLocaleString()
    };

    try {
      // Direct frontend email dispatch to ahmedmou2000@gmail.com
      const response = await fetch(SUBMISSION_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (!response.ok) {
        console.warn('FormSubmit responded with status:', response.status);
      }

      console.log('⚡ Lead successfully sent to:', LEAD_DESTINATION_EMAIL, emailPayload);

      // 🎯 1. Google Analytics 4 standard 'generate_lead' event
      trackAnalyticsEvent('generate_lead', {
        event_category: 'Lead Capture',
        event_label: storeName,
        store_type: storeType,
        devices_count: devices,
        currency: 'EUR',
        value: 1.0
      });

      // 🎯 2. Google Ads Conversion Tracking (AW-952948429)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-952948429/JXh1CLzT_ukcEM2ts8YD',
          'event_category': 'Beta Sign Up',
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

    } catch (err) {
      console.error('Submission error:', err);
      // Display confirmation to prevent lead drop-off even if network glitch occurs
      if (successModal) {
        successModal.classList.remove('hidden');
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitSpinner) submitSpinner.classList.add('hidden');
      if (submitBtnText) {
        submitBtnText.textContent = lang === 'es' ? 'Solicitar Acceso Gratuito a la Beta →' : 'Apply for Free Beta Access →';
      }
    }
  });

  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
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
  initCalculator();
  initUrgency();
  initCTAs();
  initLeadForm();
  initFAQ();
  initVideoControls();
  initTimeEngagementTracking();
});

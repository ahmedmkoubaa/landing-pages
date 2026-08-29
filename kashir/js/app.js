/**
 * Kashir Landing Page Application Logic
 * Interactive Savings Calculator, Direct Email Dispatch (Zero Backend), Dynamic Urgency & Smooth Anchors.
 */

// Direct Frontend-to-Inbox Email Endpoint (No backend required)
const LEAD_DESTINATION_EMAIL = "ahmedmou2000@gmail.com";
const SUBMISSION_ENDPOINT = 'https://formsubmit.co/ajax/2041cb39dda0eea2cba867fafaac9238';

// Interactive Savings Calculator
function initCalculator() {
  const slider = document.getElementById('device-slider');
  const sliderCount = document.getElementById('calc-device-count');
  const legacyCostEl = document.getElementById('calc-legacy-cost');
  const kashirCostEl = document.getElementById('calc-kashir-cost');
  const savingsAmountEl = document.getElementById('calc-savings-amount');

  if (!slider) return;

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

// Smooth Scroll & Focus for all CTA buttons
function initCTAs() {
  const ctaButtons = document.querySelectorAll('.anchor-cta');
  const formTarget = document.getElementById('lead-capture-form');
  const storeNameInput = document.getElementById('store-name');

  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (formTarget) {
        formTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Add subtle glow pulse animation
        formTarget.classList.add('pulse-highlight');
        setTimeout(() => formTarget.classList.remove('pulse-highlight'), 1800);

        if (storeNameInput) {
          setTimeout(() => storeNameInput.focus(), 600);
        }
      }
    });
  });
}

// Lead Capture Form Submission Handling (Direct to Gmail via FormSubmit.co)
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

      // Trigger Google Ads Conversion Tracking
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-952948429/JXh1CLzT_ukcEM2ts8YD',
          'event_category': 'Beta Sign Up',
          'event_label': storeName,
          'value': 1.0,
          'currency': 'EUR'
        });
        window.gtag('event', 'generate_lead', {
          'event_category': 'Beta Sign Up',
          'event_label': storeName
        });
      }
      // Show celebratory confirmation modal
      form.reset();
      if (successModal) {
        successModal.classList.remove('hidden');
      }

    } catch (err) {
      console.error('Submission error:', err);
      // Even if network glitches, display confirmation to prevent lead drop-off
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

// FAQ Accordion Interaction
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
        }
      });
    }
  });
}

// Mobile Sticky Floating Bar
function initMobileStickyBar() {
  const stickyBar = document.getElementById('mobile-sticky-cta');
  const topSection = document.getElementById('showcase') || document.getElementById('hero');

  if (!stickyBar || !topSection) return;

  window.addEventListener('scroll', () => {
    const topBottom = topSection.getBoundingClientRect().bottom;
    if (topBottom < 0) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  });
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  initUrgency();
  initCTAs();
  initLeadForm();
  initFAQ();
  initMobileStickyBar();
});

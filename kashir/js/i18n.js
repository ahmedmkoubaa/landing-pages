/**
 * Kashir Smoke Test Landing Page - i18n Translation Dictionary
 * Instant bilingual switching between English and Spanish with automatic browser language detection.
 * Dynamic VeriFactu section handling (shown for ES, omitted for other languages).
 */

const translations = {
  en: {
    // Navigation
    "nav.tagline": "Zero-Hardware POS for Smart Retail & Hospitality",
    "nav.scarcityBadge": "⚡ Limited Beta: 14/50 Spots Left",
    "nav.cta": "Join Exclusive Beta",
    "lang.toggle": "🇪🇸 Ver en Español",

    // Hero Section
    "hero.badge": "🔥 EXCLUSIVE FOUNDER BETA · 0€ HARDWARE",
    "hero.title": "Turn Any Phone or Tablet Into a Cash Register.",
    "hero.titleHighlight": "0€ Hardware. Infinite Devices.",
    "hero.subtitle": "Stop paying €2,000+ for clunky legacy POS terminals and €50/mo per extra device. With Kashir, turn any existing smartphone, tablet, or laptop into a synchronized checkout terminal in seconds.",
    "hero.ctaPrimary": "Claim Your Beta Spot (Free Forever Access)",
    "hero.ctaSubtext": "✓ No credit card required &nbsp;•&nbsp; ✓ 0€ Setup cost &nbsp;•&nbsp; ✓ Lifetime 0% platform fee for Beta users",
    "hero.stat1.value": "0€",
    "hero.stat1.label": "Hardware Investment",
    "hero.stat2.value": "10s",
    "hero.stat2.label": "To Add Any Extra Register",
    "hero.stat3.value": "100%",
    "hero.stat3.label": "Cloud Synced & Tap-to-Pay",

    // Live Urgency / Scarcity Banner
    "urgency.title": "Founder Beta Access is Strictly Capped",
    "urgency.desc": "We are onboarding only 50 visionary retailers to shape the future of zero-hardware POS. Once filled, standard pricing applies.",
    "urgency.spotsLeft": "Only <strong>14 Beta Spots</strong> Remaining for Q3",
    "urgency.timerText": "Batch closes when counter hits zero:",

    // Interactive Showcase: Infinite Checkout
    "showcase.tag": "INFINITE CHECKOUT SHOWCASE",
    "showcase.title": "Turn Any Device into a Register in 10 Seconds",
    "showcase.subtitle": "Have a busy rush hour? Simply open Kashir on an employee's phone or scan the store QR code to instantly spin up a new checkout counter at 0€ extra cost.",
    "showcase.step1.title": "1. Bring Any Device You Already Own",
    "showcase.step1.desc": "Works flawlessly on iOS, Android, iPad, Mac, and Windows PC. No expensive proprietary touchscreens.",
    "showcase.step2.title": "2. Scan QR to Pair Instantly",
    "showcase.step2.desc": "Point any camera at your main counter display. Instant secure pairing with zero technical configuration.",
    "showcase.step3.title": "3. Accept Tap-to-Pay & Digital Receipts",
    "showcase.step3.desc": "Customers tap their card or phone directly on your staff's device. Send WhatsApp/email receipts with 0 paper cost.",

    // Visual Pricing Comparison Matrix
    "comparison.tag": "THE FINANCIAL REALITY",
    "comparison.title": "Legacy POS vs. Kashir Zero-Hardware",
    "comparison.subtitle": "See how much cash stays in your business bank account from Day 1.",
    "comparison.header.feature": "Feature & Cost Breakdown",
    "comparison.header.legacy": "Legacy POS (Clover, Square Hardware, NCR)",
    "comparison.header.kashir": "Kashir Cloud POS",
    
    "comparison.row1.name": "Hardware Terminal Cost",
    "comparison.row1.legacy": "€1,200 – €3,500 upfront",
    "comparison.row1.kashir": "0€ (Use devices you already own)",

    "comparison.row2.name": "Extra Cash Register / Staff Device",
    "comparison.row2.legacy": "+€45 – €80 / month per register",
    "comparison.row2.kashir": "FREE (Infinite devices included)",

    "comparison.row3.name": "Hardware Maintenance & Broken Screen Fees",
    "comparison.row3.legacy": "€300+ technician visit / replace",
    "comparison.row3.kashir": "0€ (Swap to any backup phone)",

    "comparison.row4.name": "Software Lock-In & Lengthy Contracts",
    "comparison.row4.legacy": "24–36 Month restrictive contracts",
    "comparison.row4.kashir": "Month-to-month or Free Beta tier",

    "comparison.row5.name": "Speed to Open a Pop-up / Second Register",
    "comparison.row5.legacy": "Weeks of shipping & setup",
    "comparison.row5.kashir": "10 seconds (Scan QR to activate)",

    // Interactive Savings Calculator
    "calc.title": "Calculate Your Hardware & Register Savings",
    "calc.subtitle": "Drag the slider to see how much your store saves in year one with Kashir.",
    "calc.sliderLabel": "Number of active registers / staff devices in your shop:",
    "calc.terminals": "Registers",
    "calc.legacyCost": "Legacy Hardware & Fee Cost (Yr 1):",
    "calc.kashirCost": "Kashir Cost (Yr 1):",
    "calc.savingsLabel": "Estimated Total Savings:",
    "calc.savingsBadge": "Saved to reinvest in your store growth",

    // Lead Capture Form Section
    "form.tag": "EXCLUSIVE BETA APPLICATION",
    "form.title": "Reserve Your Early-Access Beta Spot",
    "form.subtitle": "Join our selective cohort of store owners testing Kashir before public rollout. Get VIP onboarding and lifetime zero platform fee.",
    "form.badge": "🔥 36 Beta invitations claimed this week · 14 remaining",
    "form.labelStoreName": "Store / Business Name *",
    "form.placeholderStoreName": "e.g. Bella Boutique or Artisan Coffee",
    "form.labelEmail": "Business Email *",
    "form.placeholderEmail": "name@yourbusiness.com",
    "form.labelPhone": "Phone Number (WhatsApp for beta invite link) *",
    "form.placeholderPhone": "612 345 678",
    "form.labelStoreType": "What kind of business do you run?",
    "form.optionRetail": "Retail / Boutique / Fashion",
    "form.optionHospitality": "Cafe / Bar / Restaurant",
    "form.optionServices": "Services / Salon / Pop-up",
    "form.optionOther": "Other Store Type",
    "form.labelDevices": "How many devices / checkout points do you plan to use?",
    "form.optionDev1": "1 - 2 Devices (Solo / Small counter)",
    "form.optionDev2": "3 - 5 Devices (Active floor staff)",
    "form.optionDev3": "6+ Devices (High volume store / multiple branches)",
    "form.submitBtn": "Apply for Free Beta Access →",
    "form.submitting": "Submitting Your Reservation...",
    "form.security": "🔒 100% spam-free. We will only contact you to activate your private Beta access.",
    "form.successTitle": "🎉 You're On the VIP Beta List!",
    "form.successDesc": "Thank you for applying. We've reserved your spot and sent a confirmation to your email. Our founding team will contact you on WhatsApp with your private setup link.",

    // FAQ Section
    "faq.tag": "FREQUENTLY ASKED QUESTIONS",
    "faq.title": "Everything you need to know about Kashir",
    "faq.q1": "Do I really need zero hardware to use Kashir?",
    "faq.a1": "Yes! Kashir is 100% hardware-agnostic. You can use your existing iPhone, Android, iPad, Android tablet, or laptop. No expensive proprietary POS screens or locked card terminals required.",
    "faq.q2": "How does Tap to Pay work on phones?",
    "faq.a2": "Modern smartphones have built-in NFC antennas. Kashir utilizes Apple Tap to Pay on iPhone and Android NFC to accept contactless Visa, Mastercard, Apple Pay, and Google Pay directly on the phone back.",
    "faq.q3": "Can multiple staff members ring up sales at the same time?",
    "faq.a3": "Absolutely. You can add infinite staff devices in 10 seconds by scanning a pairing QR code. All sales, inventory, and shift receipts synchronize in real-time across your cloud dashboard.",
    "faq.q4": "What happens after the Beta?",
    "faq.a4": "As a Beta founder member, you receive lifetime grandfathered access with 0% software platform fees and dedicated VIP priority support.",

    // Footer
    "footer.rights": "© 2026 Kashir POS. All rights reserved. Zero-Hardware Cloud Point of Sale.",
    "footer.disclaimer": "Smoke test prototype for market validation and beta cohort onboarding."
  },

  es: {
    // Navigation
    "nav.tagline": "TPV Zero-Hardware para Tiendas y Hostelería Inteligente",
    "nav.scarcityBadge": "⚡ Beta Limitada: Quedan 14/50 Plazas",
    "nav.cta": "Unirse a la Beta Exclusiva",
    "lang.toggle": "🇬🇧 Switch to English",

    // Hero Section
    "hero.badge": "🔥 BETA EXCLUSIVA PARA FUNDADORES · 0€ EN HARDWARE",
    "hero.title": "Convierte Cualquier Móvil o Tablet en una Caja Registradora.",
    "hero.titleHighlight": "0€ Hardware. Dispositivos Infinitos.",
    "hero.subtitle": "Deja de gastar más de 2.000€ en pesados terminales TPV y 50€/mes por cada dispositivo extra. Con Kashir, convierte cualquier smartphone, tablet o portátil en una caja de cobro sincronizada en segundos.",
    "hero.ctaPrimary": "Reclamar Plaza Beta (Acceso Gratis de por Vida)",
    "hero.ctaSubtext": "✓ Sin tarjeta de crédito &nbsp;•&nbsp; ✓ 0€ Coste de instalación &nbsp;•&nbsp; ✓ 0% Comisiones de plataforma para usuarios Beta",
    "hero.stat1.value": "0€",
    "hero.stat1.label": "Inversión en Hardware",
    "hero.stat2.value": "10s",
    "hero.stat2.label": "Para Añadir Otra Caja",
    "hero.stat3.value": "100%",
    "hero.stat3.label": "Nube Sincronizada y Cobro Móvil",

    // Live Urgency / Scarcity Banner
    "urgency.title": "El Acceso a la Beta de Fundadores es Estrictamente Limitado",
    "urgency.desc": "Estamos seleccionando únicamente a 50 comercios visionarios para validar y diseñar el futuro del TPV sin hardware. Una vez cubiertas las plazas, se aplicará la tarifa estándar.",
    "urgency.spotsLeft": "Solo Quedan <strong>14 Plazas de Beta</strong> para el Trimestre Actual",
    "urgency.timerText": "El registro se cerrará al agotar el cupo:",

    // Interactive Showcase: Infinite Checkout
    "showcase.tag": "DEMOSTRACIÓN DE CAJAS INFINITAS",
    "showcase.title": "Convierte Cualquier Dispositivo en Caja en 10 Segundos",
    "showcase.subtitle": "¿Tienes hora punta en la tienda? Abre Kashir en el móvil de tu empleado o escanea el código QR del mostrador para habilitar un nuevo punto de cobro al instante sin pagar ni un euro más.",
    "showcase.step1.title": "1. Usa los Dispositivos que ya Tienes",
    "showcase.step1.desc": "Funciona a la perfección en iOS, Android, iPad, Mac y PC con Windows. Olvídate de pantallas táctiles propietarias que cuestan miles de euros.",
    "showcase.step2.title": "2. Escanea el QR para Emparejar al Instante",
    "showcase.step2.desc": "Apunta la cámara al dispositivo del mostrador. Emparejamiento seguro en tiempo real sin configuraciones técnicas complejas.",
    "showcase.step3.title": "3. Cobra con Contactless y Ticket Digital",
    "showcase.step3.desc": "Tus clientes acercan su tarjeta o móvil al teléfono de tu dependiente. Envía tickets por WhatsApp o email con 0€ de gasto en rollos de papel térmico.",

    // Visual Pricing Comparison Matrix
    "comparison.tag": "LA REALIDAD FINANCIERA",
    "comparison.title": "TPV Tradicional vs. Kashir Zero-Hardware",
    "comparison.subtitle": "Descubre cuánto dinero ahorra tu negocio desde el primer día.",
    "comparison.header.feature": "Desglose de Costes y Funciones",
    "comparison.header.legacy": "TPV Tradicional (Clover, TPV Banco, NCR)",
    "comparison.header.kashir": "Kashir Cloud POS",
    
    "comparison.row1.name": "Coste de Compra del Terminal TPV",
    "comparison.row1.legacy": "1.200€ – 3.500€ de pago inicial",
    "comparison.row1.kashir": "0€ (Usa móviles y tablets que ya tienes)",

    "comparison.row2.name": "Caja Adicional / Dispositivo de Empleado",
    "comparison.row2.legacy": "+45€ – 80€ / mes por cada caja extra",
    "comparison.row2.kashir": "GRATIS (Dispositivos infinitos incluidos)",

    "comparison.row3.name": "Mantenimiento y Averías de Pantallas",
    "comparison.row3.legacy": "+300€ por visita de técnico o recambio",
    "comparison.row3.kashir": "0€ (Cambia a cualquier móvil de respaldo)",

    "comparison.row4.name": "Permanencias y Contratos Abusivos",
    "comparison.row4.legacy": "Contratos de permanencia de 24–36 meses",
    "comparison.row4.kashir": "Sin permanencia o Nivel Beta Gratuito",

    "comparison.row5.name": "Tiempo para Abrir Caja Extra en Rebajas",
    "comparison.row5.legacy": "Semanas de espera y configuración técnica",
    "comparison.row5.kashir": "10 segundos (Escanear QR y empezar a cobrar)",

    // Interactive Savings Calculator
    "calc.title": "Calcula Tu Ahorro Real en Hardware y Cajas",
    "calc.subtitle": "Mueve la barra para ver cuánto dinero ahorrará tu tienda durante el primer año con Kashir.",
    "calc.sliderLabel": "Número de cajas registradoras / dependientes en tu tienda:",
    "calc.terminals": "Cajas de Cobro",
    "calc.legacyCost": "Coste Estimado TPV Tradicional (Año 1):",
    "calc.kashirCost": "Coste con Kashir (Año 1):",
    "calc.savingsLabel": "Ahorro Total Estimado:",
    "calc.savingsBadge": "Dinero que se queda en tu caja para hacer crecer tu negocio",

    // Spain / VeriFactu Legal Leverage
    "legal.tag": "NORMATIVA LEGAL Y LEY ANTIFRAUDE",
    "legal.title": "100% Adaptado a la Ley VeriFactu y Factura Electrónica",
    "legal.subtitle": "No gastes más de 1.500€ en renovar tus máquinas registradoras por la nueva legislación española. Kashir nace en la nube y cumple automáticamente con todos los requisitos de la Agencia Tributaria (AEAT).",
    "legal.bullet1": "<strong>Facturación VeriFactu Automática:</strong> Generación instantánea de códigos QR en cada ticket según los estándares de la AEAT.",
    "legal.bullet2": "<strong>Cero Gastos en Renovación de Maquinaria:</strong> Actualizaciones automáticas en la nube sin necesidad de comprar nuevos datáfonos certificados.",
    "legal.bullet3": "<strong>Trazabilidad e Inalterabilidad:</strong> Registro encadenado e inmutable para proteger a tu negocio de sanciones e inspecciones.",

    // Lead Capture Form Section
    "form.tag": "SOLICITUD DE ACCESO A LA BETA",
    "form.title": "Reserva Tu Plaza en la Beta de Acceso Anticipado",
    "form.subtitle": "Únete al grupo exclusivo de comerciantes que probarán Kashir antes del lanzamiento público. Disfruta de soporte directo con los fundadores y 0% de comisiones para siempre.",
    "form.badge": "🔥 36 solicitudes reservadas esta semana · Quedan 14 plazas",
    "form.labelStoreName": "Nombre de tu Tienda / Negocio *",
    "form.placeholderStoreName": "Ej. Moda Bella, Cafetería San Juan, Barbería",
    "form.labelEmail": "Correo Electrónico de Contacto *",
    "form.placeholderEmail": "tuemail@tunegocio.com",
    "form.labelPhone": "Teléfono Móvil (WhatsApp para enviarte el enlace) *",
    "form.placeholderPhone": "612 345 678",
    "form.labelStoreType": "¿Qué tipo de negocio gestionas?",
    "form.optionRetail": "Tienda / Comercio Minorista / Moda",
    "form.optionHospitality": "Cafetería / Bar / Restauración",
    "form.optionServices": "Servicios / Peluquería / Estética",
    "form.optionOther": "Otro tipo de comercio",
    "form.labelDevices": "¿Cuántos dispositivos o cajas necesitas usar?",
    "form.optionDev1": "1 - 2 Dispositivos (Mostrador pequeño)",
    "form.optionDev2": "3 - 5 Dispositivos (Dependientes en tienda)",
    "form.optionDev3": "6+ Dispositivos (Alto volumen / Varios locales)",
    "form.submitBtn": "Solicitar Acceso Gratuito a la Beta →",
    "form.submitting": "Enviando tu reserva...",
    "form.security": "🔒 100% libre de spam. Solo te contactaremos para enviarte el acceso a la Beta privada.",
    "form.successTitle": "🎉 ¡Tu Plaza en la Beta VIP está Reservada!",
    "form.successDesc": "Gracias por registrarte. Hemos guardado tu plaza y te hemos enviado una confirmación. Nuestro equipo fundador te contactará por WhatsApp con el enlace privado para probar Kashir.",

    // FAQ Section
    "faq.tag": "PREGUNTAS FRECUENTES",
    "faq.title": "Todo lo que necesitas saber sobre Kashir",
    "faq.q1": "¿Realmente no necesito comprar ningún aparato?",
    "faq.a1": "¡Exacto! Kashir funciona en cualquier móvil iPhone, Android, tablet iPad o portátil que ya tengas. No requieres datáfonos caros ni pantallas especiales.",
    "faq.q2": "¿Cómo funciona el cobro contactless desde el móvil?",
    "faq.a2": "Los teléfonos actuales cuentan con antena NFC. Kashir utiliza la tecnología Tap to Pay para que el cliente solo tenga que acercar su tarjeta o móvil a la parte trasera de tu teléfono para cobrar al instante.",
    "faq.q3": "¿Pueden cobrar varios dependientes al mismo tiempo?",
    "faq.a3": "Sí, puedes conectar dispositivos ilimitados en 10 segundos escaneando un código QR. Todas las ventas y el stock se sincronizan en tiempo real en la nube.",
    "faq.q4": "¿Qué ventajas tengo al entrar en la Beta?",
    "faq.a4": "Los miembros de la Beta tienen acceso vitalicio sin cuotas de software de plataforma, soporte prioritario directo con el equipo técnico y línea directa para solicitar funciones a medida.",

    // Footer
    "footer.rights": "© 2026 Kashir TPV. Todos los derechos reservados. Punto de Venta en la Nube Zero-Hardware.",
    "footer.disclaimer": "Prototipo de validación de mercado para convocatoria de cohorte Beta."
  }
};

let currentLang = 'es';

/**
 * Automatically detect user language preference
 * 1. URL Query Parameter (?lang=es|en)
 * 2. Stored user selection (localStorage)
 * 3. Browser language (navigator.languages / navigator.language)
 */
function detectUserLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam && (langParam === 'es' || langParam === 'en')) {
    return langParam;
  }

  const storedLang = localStorage.getItem('kashir_lang');
  if (storedLang && (storedLang === 'es' || storedLang === 'en')) {
    return storedLang;
  }

  // Detect browser language
  const userLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
  for (const lang of userLangs) {
    if (lang && lang.toLowerCase().startsWith('es')) {
      return 'es';
    }
  }

  return 'en';
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'es';
  currentLang = lang;
  localStorage.setItem('kashir_lang', lang);
  document.documentElement.lang = lang;

  // Update text nodes with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update input placeholders with data-i18n-placeholder
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(input => {
    const key = input.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      input.placeholder = translations[lang][key];
    }
  });

  // Toggle button label
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.innerHTML = translations[lang]['lang.toggle'];
  }

  // VeriFactu regulatory section logic:
  // If Spanish, show VeriFactu compliance section. Otherwise omit it entirely.
  const verifactuSection = document.getElementById('compliance');
  if (verifactuSection) {
    if (lang === 'es') {
      verifactuSection.style.display = '';
    } else {
      verifactuSection.style.display = 'none';
    }
  }

  // Update dynamic elements (e.g. calculator strings)
  if (typeof updateCalculatorLabels === 'function') {
    updateCalculatorLabels(lang);
  }
}

function toggleLanguage() {
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(nextLang);
}

// Initialize on DOM load with auto-detection
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = detectUserLanguage();
  setLanguage(initialLang);

  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }
});

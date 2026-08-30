/**
 * Kashir Smoke Test Landing Page - i18n Translation Dictionary
 * Automatic browser language detection, flag dropdown switcher,
 * and conditional VeriFactu compliance display.
 */

const translations = {
  en: {
    // Navigation
    "nav.tagline": "Zero-Hardware Cash Register for Local Stores",
    "nav.scarcityBadge": "⚡ Limited Beta: 14/50 Spots Left",
    "nav.cta": "Join Beta",

    // Hero / Showcase Section
    "hero.badge": "🔥 0€ HARDWARE · FOUNDER BETA",
    "hero.title": "Turn Any Phone or Tablet Into a Smart Cash Register.",
    "hero.titleHighlight": "0€ Hardware. Instant Scanned Invoicing.",
    "hero.subtitle": "Scan product barcodes with your phone camera, compile itemized bills with zero manual math, and issue compliant digital receipts in seconds.",
    "hero.ctaPrimary": "Try Beta for Free (Lifetime 0€ Access)",
    "hero.ctaSubtext": "✓ No credit card required &nbsp;•&nbsp; ✓ 0€ Setup cost &nbsp;•&nbsp; ✓ 0% platform fee for Beta users",

    // Video Section
    "video.unmute": "Unmute Video",
    "video.mute": "Mute Video",
    "video.liveDemo": "<strong>Live Demo:</strong> Scan products and issue invoices instantly without purchasing any extra hardware.",

    // Live Urgency / Scarcity Banner
    "urgency.title": "Founder Beta Access is Strictly Capped",
    "urgency.desc": "We are onboarding only 50 visionary store owners to test and shape the easiest zero-hardware register.",
    "urgency.spotsLeft": "Only <strong>14 Beta Spots</strong> Remaining",
    "urgency.timerText": "Registration closes soon:",

    // Interactive Showcase: Camera Scanning & Auto Math
    "showcase.tag": "SIMPLE STORE OPERATIONS",
    "showcase.title": "Scan, Calculate, and Invoice in Seconds",
    "showcase.subtitle": "Built for local store owners. Clean, clear buttons and so intuitive that anyone can start using it immediately.",
    "showcase.step1.title": "1. Use Any Phone You Already Own",
    "showcase.step1.desc": "Works smoothly on iOS, Android, iPad, Mac, and Windows PC. No expensive proprietary screens or technician visits.",
    "showcase.step2.title": "2. Scan Barcodes & Instant Bill Calculation",
    "showcase.step2.desc": "Scan products with barcodes or QR codes using your phone camera and generate invoices instantly without doing any manual math or mental calculations.",
    "showcase.step3.title": "3. Direct Inventory Access & No Manual Data Entry",
    "showcase.step3.desc": "Instant access to your full store inventory. Avoid registering products by hand every time and find any item with prices and taxes in a single tap.",

    // Visual Pricing Comparison Matrix
    "comparison.tag": "THE FINANCIAL REALITY",
    "comparison.title": "Legacy POS Machine vs. Kashir Digital",
    "comparison.subtitle": "See how much money stays in your business bank account from Day 1.",
    "comparison.header.feature": "Feature & Cost Breakdown",
    "comparison.header.legacy": "Legacy POS Machine (Clover, Bank POS)",
    "comparison.header.kashir": "Kashir Cloud Register",
    
    "comparison.row1.name": "Hardware Register Cost",
    "comparison.row1.legacy": "€1,200 – €3,500 upfront",
    "comparison.row1.kashir": "0€ (Use phones & tablets you already have)",

    "comparison.row2.name": "Adding Extra Devices / Staff Registers",
    "comparison.row2.legacy": "+€45 – €80 / month per register",
    "comparison.row2.kashir": "FREE (Infinite devices included)",

    "comparison.row3.name": "Barcode Scanning & Auto-Math",
    "comparison.row3.legacy": "Requires €200+ handheld scanner",
    "comparison.row3.kashir": "Built-in smartphone camera scanner",

    "comparison.row4.name": "Contracts & Long-term Lock-in",
    "comparison.row4.legacy": "24–36 Month restrictive contracts",
    "comparison.row4.kashir": "Month-to-month or Free Beta tier",

    "comparison.row5.name": "Broken Hardware & Repair Visits",
    "comparison.row5.legacy": "€300+ technician visit / replacement fee",
    "comparison.row5.kashir": "0€ (Simply swap to any backup phone)",

    // Interactive Savings Calculator
    "calc.title": "Calculate Your Savings in Machines and Registers",
    "calc.subtitle": "Move the slider to see how much money your store saves in year one with Kashir.",
    "calc.sliderLabel": "Number of active registers in your shop:",
    "calc.terminals": "Registers",
    "calc.legacyCost": "Legacy Machine Cost (Yr 1):",
    "calc.kashirCost": "Kashir Cost (Yr 1):",
    "calc.savingsLabel": "Estimated Total Savings:",
    "calc.savingsBadge": "Money that stays in your pocket to grow your shop",

    // Lead Capture Form Section
    "form.tag": "EXCLUSIVE BETA APPLICATION",
    "form.title": "Reserve Your Early-Access Beta Spot",
    "form.subtitle": "Join our selective cohort of local store owners testing Kashir before public rollout. Get VIP onboarding and lifetime zero platform fee.",
    "form.badge": "🔥 36 Beta invitations claimed this week · 14 remaining",
    "form.labelStoreName": "Store / Business Name *",
    "form.placeholderStoreName": "e.g. Mary's Bakery, City Boutique, Corner Market",
    "form.labelEmail": "Business Email *",
    "form.placeholderEmail": "name@yourbusiness.com",
    "form.labelPhone": "Phone Number (WhatsApp for beta invite link) *",
    "form.placeholderPhone": "612 345 678",
    "form.labelStoreType": "What kind of business do you run?",
    "form.optionRetail": "Retail / Boutique / Grocery / Corner Shop",
    "form.optionHospitality": "Bakery / Cafe / Bar / Restaurant",
    "form.optionServices": "Services / Salon / Workshop",
    "form.optionOther": "Other Local Store",
    "form.labelDevices": "How many devices / checkout points do you plan to use?",
    "form.optionDev1": "1 - 2 Devices (Countertop)",
    "form.optionDev2": "3 - 5 Devices (Staff on the shop floor)",
    "form.optionDev3": "6+ Devices (Multiple checkout lanes / stores)",
    "form.submitBtn": "Apply for Free Beta Access →",
    "form.submitting": "Submitting Your Reservation...",
    "form.security": "🔒 100% spam-free. We will only contact you to activate your private Beta access.",
    "form.successTitle": "🎉 You're On the VIP Beta List!",
    "form.successDesc": "Thank you for applying. We've reserved your spot and sent a confirmation to your email. Our founding team will contact you on WhatsApp with your private setup link.",

    // FAQ Section
    "faq.tag": "FREQUENTLY ASKED QUESTIONS",
    "faq.title": "Everything you need to know about Kashir",
    "faq.q1": "Do I really need zero hardware to use Kashir?",
    "faq.a1": "Yes! Kashir works directly on your existing iPhone, Android phone, iPad, Android tablet, or laptop. No expensive proprietary POS screens or locked cash register hardware required.",
    "faq.q2": "How does product barcode scanning work?",
    "faq.a2": "Kashir uses the high-resolution camera already in your smartphone or tablet. Simply point the camera at any barcode or QR code to look up the product and add it to the bill with automatic tax calculation.",
    "faq.q3": "How does inventory lookup save time?",
    "faq.a3": "You have full instant access to your product catalog with clear photos, search, and categories. You never have to punch in item numbers or calculate change and totals by hand.",
    "faq.q4": "What happens after the Beta?",
    "faq.a4": "As a Beta founder member, you receive lifetime grandfathered access with 0% software platform fees and dedicated VIP priority support.",

    // Footer
    "footer.rights": "© 2026 Kashir TPV. All rights reserved. Zero-Hardware Digital Cash Register & Invoicing.",
    "footer.disclaimer": "Smoke test prototype for market validation and beta cohort onboarding."
  },

  es: {
    // Navigation
    "nav.tagline": "Caja Registradora Digital y Facturación Sin Máquinas",
    "nav.scarcityBadge": "⚡ Beta Limitada: Quedan 14/50 Plazas",
    "nav.cta": "Entrar a la Beta",

    // Hero / Showcase Section
    "hero.badge": "🔥 0€ EN MÁQUINAS · BETA PARA FUNDADORES",
    "hero.title": "Convierte tu Móvil o Tablet en una Caja Registradora.",
    "hero.titleHighlight": "0€ en Aparatos. Facturas y Cuentas al Instante.",
    "hero.subtitle": "Escanea productos con la cámara de tu móvil, calcula la cuenta sin hacer operaciones de cabeza y emite facturas y tickets digitales legales en un segundo.",
    "hero.ctaPrimary": "Probar Gratis la Beta (Acceso 0€ de por Vida)",
    "hero.ctaSubtext": "✓ Sin tarjeta de crédito &nbsp;•&nbsp; ✓ 0€ Coste de instalación &nbsp;•&nbsp; ✓ 0% Comisiones de plataforma",

    // Video Section
    "video.unmute": "Activar Sonido",
    "video.mute": "Silenciar",
    "video.liveDemo": "<strong>Demostración en Vivo:</strong> Escanea el producto y genera la factura al instante sin comprar ningún aparato.",

    // Live Urgency / Scarcity Banner
    "urgency.title": "El Acceso a la Beta de Fundadores es Estrictamente Limitado",
    "urgency.desc": "Estamos seleccionando únicamente a 50 comerciantes de proximidad para validar la caja registradora más sencilla y económica.",
    "urgency.spotsLeft": "Solo Quedan <strong>14 Plazas de Beta</strong>",
    "urgency.timerText": "El registro se cerrará pronto:",

    // Interactive Showcase: Camera Scanning & Auto Math
    "showcase.tag": "GESTIÓN FÁCIL PARA TU COMERCIO",
    "showcase.title": "Escanea, Calcula y Emite la Factura al Instante",
    "showcase.subtitle": "Pensado especialmente para dueños de tiendas y pequeños negocios. Botones claros y tan fácil de usar que no requiere ningún conocimiento técnico.",
    "showcase.step1.title": "1. Usa el Móvil que ya Tienes",
    "showcase.step1.desc": "Funciona a la perfección en cualquier móvil Android, iPhone, tablet iPad o portátil. Olvídate de pantallas táctiles propietarias que cuestan miles de euros.",
    "showcase.step2.title": "2. Escanea Códigos de Barra o QR y Factura al Instante",
    "showcase.step2.desc": "Escanea productos con códigos de barra o código QR con la cámara del móvil y genera la factura al instante sin tener que hacer ninguna cuenta ni cálculo de cabeza.",
    "showcase.step3.title": "3. Acceso al Inventario sin Registrar a Mano",
    "showcase.step3.desc": "Acceso directo a todo tu catálogo de productos. Evita registrar todos los productos a mano cada vez y encuentra cualquier artículo con su precio y tipo de IVA en un solo clic.",

    // Visual Pricing Comparison Matrix
    "comparison.tag": "LA REALIDAD FINANCIERA",
    "comparison.title": "Caja Registradora Tradicional vs. Kashir Digital",
    "comparison.subtitle": "Descubre cuánto dinero ahorra tu negocio desde el primer día.",
    "comparison.header.feature": "Desglose de Costes y Funciones",
    "comparison.header.legacy": "Caja Registradora Clásica / TPV Banco",
    "comparison.header.kashir": "Kashir Cloud Register",
    
    "comparison.row1.name": "Coste de Compra del Aparato o Máquina",
    "comparison.row1.legacy": "1.200€ – 3.500€ de pago inicial",
    "comparison.row1.kashir": "0€ (Usa móviles y tablets que ya tienes)",

    "comparison.row2.name": "Añadir Otra Caja o Móvil de Empleado",
    "comparison.row2.legacy": "+45€ – 80€ / mes por cada caja extra",
    "comparison.row2.kashir": "GRATIS (Dispositivos infinitos incluidos)",

    "comparison.row3.name": "Lector de Códigos de Barra",
    "comparison.row3.legacy": "Pistola lectora externa (+150€)",
    "comparison.row3.kashir": "Cámara de tu smartphone integrada",

    "comparison.row4.name": "Permanencias y Contratos Abusivos",
    "comparison.row4.legacy": "Contratos de permanencia de 24–36 meses",
    "comparison.row4.kashir": "Sin permanencia o Nivel Beta Gratuito",

    "comparison.row5.name": "Averías y Visitas de Técnicos",
    "comparison.row5.legacy": "+300€ por visita de técnico o recambio",
    "comparison.row5.kashir": "0€ (Cambia a cualquier móvil de respaldo)",

    // Interactive Savings Calculator
    "calc.title": "Calcula Tu Ahorro Real en Máquinas y Cajas",
    "calc.subtitle": "Mueve la barra para ver cuánto dinero ahorrará tu tienda durante el primer año con Kashir.",
    "calc.sliderLabel": "Número de cajas registradoras en tu tienda:",
    "calc.terminals": "Cajas de Cobro",
    "calc.legacyCost": "Coste Registradora Tradicional (Año 1):",
    "calc.kashirCost": "Coste con Kashir (Año 1):",
    "calc.savingsLabel": "Ahorro Total Estimado:",
    "calc.savingsBadge": "Dinero que se queda en tu caja para hacer crecer tu negocio",

    // Spain / VeriFactu Legal Leverage
    "legal.tag": "NORMATIVA LEGAL Y LEY ANTIFRAUDE",
    "legal.title": "100% Adaptado a la Ley VeriFactu y Factura Electrónica",
    "legal.subtitle": "No gastes más de 1.500€ en renovar tus máquinas registradoras por la nueva legislación española. Kashir nace en la nube y cumple automáticamente con todos los requisitos de la Agencia Tributaria (AEAT) sin comprar ningún aparato nuevo.",
    "legal.bullet1": "<strong>Facturación VeriFactu Automática:</strong> Generación instantánea de códigos QR en cada ticket y factura según los estándares oficiales de la AEAT.",
    "legal.bullet2": "<strong>Cero Gastos en Renovación de Maquinaria:</strong> Actualizaciones automáticas en la nube sin necesidad de comprar nuevos terminales homologados.",
    "legal.bullet3": "<strong>Trazabilidad y Cuentas Claras:</strong> Registro inalterable de ventas para proteger a tu negocio de posibles sanciones e inspecciones tributarias.",

    // Lead Capture Form Section
    "form.tag": "SOLICITUD DE ACCESO A LA BETA",
    "form.title": "Reserva Tu Plaza en la Beta de Acceso Anticipado",
    "form.subtitle": "Únete al grupo exclusivo de comerciantes que probarán Kashir antes del lanzamiento público. Disfruta de soporte directo con los fundadores y 0% de comisiones para siempre.",
    "form.badge": "🔥 36 solicitudes reservadas esta semana · Quedan 14 plazas",
    "form.labelStoreName": "Nombre de tu Tienda / Negocio *",
    "form.placeholderStoreName": "Ej. Panadería San Juan, Moda Carmen, Frutas Paco",
    "form.labelEmail": "Correo Electrónico de Contacto *",
    "form.placeholderEmail": "tuemail@tunegocio.com",
    "form.labelPhone": "Teléfono Móvil (WhatsApp para enviarte el enlace) *",
    "form.placeholderPhone": "612 345 678",
    "form.labelStoreType": "¿Qué tipo de negocio gestionas?",
    "form.optionRetail": "Tienda de Barrio / Frutería / Panadería / Moda",
    "form.optionHospitality": "Cafetería / Bar / Restauración",
    "form.optionServices": "Peluquería / Taller / Servicios",
    "form.optionOther": "Otro tipo de comercio",
    "form.labelDevices": "¿Cuántos dispositivos o cajas necesitas usar?",
    "form.optionDev1": "1 - 2 Dispositivos (Mostrador principal)",
    "form.optionDev2": "3 - 5 Dispositivos (Dependientes en tienda)",
    "form.optionDev3": "6+ Dispositivos (Varios locales o cajas simultáneas)",
    "form.submitBtn": "Solicitar Acceso Gratuito a la Beta →",
    "form.submitting": "Enviando tu reserva...",
    "form.security": "🔒 100% libre de spam. Solo te contactaremos para enviarte el acceso a la Beta privada.",
    "form.successTitle": "🎉 ¡Tu Plaza en la Beta VIP está Reservada!",
    "form.successDesc": "Gracias por registrarte. Hemos guardado tu plaza y te hemos enviado una confirmación. Nuestro equipo fundador te contactará por WhatsApp con el enlace privado para probar Kashir.",

    // FAQ Section
    "faq.tag": "PREGUNTAS FRECUENTES",
    "faq.title": "Todo lo que necesitas saber sobre Kashir",
    "faq.q1": "¿Realmente no necesito comprar ningún aparato?",
    "faq.a1": "¡Exacto! Kashir funciona en cualquier móvil iPhone, Android, tablet iPad o portátil que ya tengas. No requieres máquinas registradoras pesadas ni pantallas caras.",
    "faq.q2": "¿Cómo se escanean los productos con el móvil?",
    "faq.a2": "Kashir utiliza la cámara que ya tiene tu teléfono o tablet. Solo tienes que apuntar al código de barras o QR de cualquier producto para añadirlo a la cuenta al instante con su IVA y precio calculado.",
    "faq.q3": "¿Cómo me ayuda el acceso al inventario?",
    "faq.a3": "Tendrás todo tu catálogo en pantalla con fotos, precios y buscador rápido. Te ahorra tener que memorizar precios o apuntar productos a mano en una libreta.",
    "faq.q4": "¿Qué ventajas tengo al entrar en la Beta?",
    "faq.a4": "Los miembros de la Beta tienen acceso vitalicio sin cuotas de software de plataforma, soporte prioritario directo con el equipo técnico y línea directa para solicitar funciones a medida.",

    // Footer
    "footer.rights": "© 2026 Kashir TPV. Todos los derechos reservados. Caja Registradora Digital y Facturación Zero-Hardware.",
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

  // Sync Flag Select Dropdown
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = lang;
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

// Initialize on DOM load with auto-detection & flag dropdown
document.addEventListener('DOMContentLoaded', () => {
  const initialLang = detectUserLanguage();
  setLanguage(initialLang);

  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});

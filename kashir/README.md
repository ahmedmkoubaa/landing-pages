# Kashir - Zero-Hardware POS Landing Page (Smoke Test)

High-converting, mobile-first bilingual (EN/ES) "Smoke Test" landing page for **Kashir**—a zero-hardware POS system designed to validate market demand, capture qualified Beta leads, and demonstrate financial superiority over legacy competitors.

---

## 🚀 Quick Start & Running Locally

### Option A: Vercel Deployment (Instant Global Hosting)
- **Root Directory in Vercel Settings**: `kashir` (or leave at root `/`—both work automatically with the provided `vercel.json` configurations).
- **Framework Preset**: `Other` (Static).
- Instant global edge deployment with zero configuration.

---

### Option B: Docker Compose (Local Testing)
From the workspace root or inside `kashir/`:
```bash
docker compose up --build -d
```
Then open: **[http://localhost:3000](http://localhost:3000)**

To stop the container:
```bash
docker compose down
```

---

### Option C: Node.js / npm
```bash
cd kashir
npm install
npm start
```
Then open: **[http://localhost:3000](http://localhost:3000)**

---

## ✉️ Direct Frontend Email Delivery (No Backend Required)

The lead capture form sends data directly from the frontend to your personal Gmail inbox (`ahmedmou2000@gmail.com`) using FormSubmit:

- **Configured Destination**: `ahmedmou2000@gmail.com` in [`js/app.js`](file:///Users/ahmed.koubaa/Desktop/playground/landing-pages/kashir/js/app.js#L7-L8).
- **First Submission Activation**: When you (or a visitor) submit the form for the first time, FormSubmit sends **one activation email** to `ahmedmou2000@gmail.com` with a button: *"Activate Form"*.
- **Subsequent Submissions**: Once confirmed, every submission arrives instantly in your inbox formatted as a clean table with:
  - Store / Business Name
  - Business Email
  - WhatsApp Phone Number (+ country prefix)
  - Business Type
  - Active Device Count
  - Browser Language (ES / EN)
  - Submission Timestamp

---

## 📸 Replacing Screenshots, Images & Videos

All visual assets reside in [`assets/images/`](file:///Users/ahmed.koubaa/Desktop/playground/landing-pages/kashir/assets/images/):
- **`hero-phone-pos.jpg`**: Main hero countertop POS device.
- **`phone-scan-pair.jpg`**: Phone scanning QR code demonstration.
- **`tap-to-pay-checkout.jpg`**: Tap-to-pay contactless customer payment.

### Adding Video:
If you want to replace the demonstration images with video loops (`.mp4` / `.webm`), you can swap the `<img>` tags in [`index.html`](file:///Users/ahmed.koubaa/Desktop/playground/landing-pages/kashir/index.html) with:
```html
<video autoplay loop muted playsinline width="100%" height="auto">
  <source src="assets/videos/demo.mp4" type="video/mp4">
</video>
```

---

## 🌐 Features Included

- **Bilingual Switcher (EN / ES)**: Instant toggling with state persistence (`localStorage` and `?lang=en|es`).
- **VeriFactu / Ley Antifraude Compliance**: Dedicated Spanish regulatory section proving 0€ hardware adaptation.
- **Visual Pricing Comparison Matrix**: Side-by-side breakdown vs Legacy POS terminals.
- **Interactive Hardware Savings Calculator**: Live slider calculating exact 1st-year savings.
- **Anchored CTAs**: Auto-scroll and glow focus directly on the lead form.
- **Dynamic Scarcity & Urgency**: Live remaining beta spots ticker and countdown timer.
- **High-Contrast, Store-Lighting UI**: Optimized for mobile phones under harsh store lights.

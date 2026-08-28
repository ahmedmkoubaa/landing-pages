# Kashir - Zero-Hardware POS Landing Page (Smoke Test)

High-converting, mobile-first bilingual (EN/ES) "Smoke Test" landing page for **Kashir**—a zero-hardware POS system designed to validate market demand, capture qualified Beta leads, and demonstrate financial superiority over legacy competitors.

---

## 🚀 Quick Start & Running Locally

### Option A: Docker Compose (Recommended)
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

### Option B: Node.js / npm
```bash
cd kashir
npm install
npm start
```
Then open: **[http://localhost:3000](http://localhost:3000)**

---

## ✉️ Connecting Form to Your Personal Inbox (Formspree)

1. Create a free account at [formspree.io](https://formspree.io)
2. Click **+ New Form**, name it `Kashir Beta Leads`, and set your personal email as the destination.
3. Copy your Form ID / Endpoint (e.g. `https://formspree.io/f/mqkrvbze`).
4. Open [`js/app.js`](file:///Users/ahmed.koubaa/Desktop/playground/landing-pages/kashir/js/app.js) and paste your endpoint into `FORMSPREE_ENDPOINT`:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
5. Every store signup with Store Name, Email, WhatsApp Phone (+ country prefix), and Device count will arrive directly in your inbox in real time!

*(Note: When `FORMSPREE_ENDPOINT` is blank, it runs in local demo simulation mode with instantaneous feedback).*

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

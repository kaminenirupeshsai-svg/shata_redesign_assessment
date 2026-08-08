# theshata.com — Website Redesign & Engineering Assessment

> **Website Development Assessment** submission for **theshata.com** (SHATA EVENTS PVT LTD).

---

## 🎯 Target Website Selected for Redesign: [theshata.com](https://theshata.com)

This project is a complete architectural and UI/UX redesign of **theshata.com** — transforming it from a static web page into an enterprise-grade, high-performance web application built using the mandatory technology stack:
* **Next.js 14 (App Router)**
* **TypeScript (Strict Mode)**
* **Tailwind CSS (Luxury Indian Event Design System)**

---

## 🌟 Key Improvements Over the Original `theshata.com`

| Original `theshata.com` | Redesigned `theshata.com` (This Project) |
| :--- | :--- |
| **Static Content** | Fully dynamic web app with interactive state and live routing |
| **No Pricing Tools** | Real-time **Interactive Budget Studio (`/estimator`)** with live sliders |
| **No Planning Assistant** | Built-in **Shata AI Event Concierge (`/concierge`)** for instant itineraries |
| **Basic Vendor Cards** | **Filterable Vendor Directory (`/vendors`)** with portfolio galleries and quotes |
| **No Customer Portal** | **Live Event Hub (`/my-events`)** with countdown timer & downloadable invoices |
| **Fixed Theme** | Seamless **Dark / Light mode** with persistent `localStorage` synchronization |
| **Basic SEO/a11y** | **JSON-LD Schema.org**, OpenGraph tags, semantic HTML5, and WCAG AA compliance |

---

## 🚀 Key Features

1. **Consumer Marketplace & Discovery (`/`)**:
   * Multi-criteria search bar (City, Event type, Date, Service).
   * 8-Service Matrix (Photography, Catering, Décor, Venues, Planning, Music, Makeup, Henna).
   * 3D animated phone app mockup showing live schedule and assigned vendor badges.
   * Pan-India footprint across 76+ cities (Hyderabad, Bengaluru, Vizag, Mumbai, Delhi, etc.).

2. **Interactive Budget Studio & Quotation Simulator (`/estimator`)**:
   * Dynamic sliders for guest count (50 to 2,000+).
   * Quality tier switcher (**Silver**, **Gold**, **Royal Platinum**).
   * Automatic calculation of subtotal, integrated GST (18%), and 20% escrow advance.
   * Downloadable quotation generator with celebratory confetti.

3. **Shata AI Event Concierge (`/concierge`)**:
   * Intelligent conversational planner that curates custom multi-day itineraries and exact budget allocations.

4. **Verified Vendor Directory (`/vendors`)**:
   * Multi-faceted filtering by city, category, and badge with portfolio lightbox preview.

5. **Customer Booking Hub (`/my-events`)**:
   * Live 14-day event countdown, milestone checklist (50% planning completed), and formal tax invoice generator.

---

## 🛠️ Tech Stack & Setup Instructions

### Prerequisites
* Node.js `>= 18.17.0` (Tested on Node.js v22)
* npm `>= 9.0.0`

### 1. Clone & Install
```bash
git clone https://github.com/kaminenirupeshsai-svg/shata_redesign_assessment.git
cd shata_redesign_assessment
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Live Deployment & Links
* **Live Website**: [https://shata-redesign-assessment.vercel.app](https://shata-redesign-assessment.vercel.app)
* **GitHub Repository**: [https://github.com/kaminenirupeshsai-svg/shata_redesign_assessment](https://github.com/kaminenirupeshsai-svg/shata_redesign_assessment)
* **Target Website**: [https://theshata.com](https://theshata.com)

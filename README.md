# Shata 2.0 — Next-Generation Event Booking & Partner Platform

> Redesign & Engineering Assessment Submission for **Shata Events Pvt Ltd** (`theshata.com`, `shata.in`, `shatapartner.com`).

---

## 🌟 Executive Summary & Engineering Mindset

**Shata 2.0** unifies the entire event lifecycle into a single, high-performance web platform built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Rather than merely replicating the static visual layers of the existing websites, this project re-architects the Shata ecosystem from first principles:

1. **Consumer Marketplace & Discovery** (`theshata.com` & `shata.in`):
   * **Multi-Criteria Filter Engine**: Real-time city, category, date, and budget filtering across 76+ Indian cities.
   * **Interactive 8-Service Matrix**: Photography, Gourmet Catering, Floral Architecture, Venues, Full Planning, Live Bands & DJs, Bridal Makeup, and Organic Henna.
   * **Live Event Budget Studio (`/estimator`)**: Dynamic slider-driven cost simulator calculating itemized quotes based on guest count, duration, and luxury tiers with GST & escrow calculations.
   * **Shata AI Event Concierge (`/concierge`)**: Conversational celebration curator that generates multi-day itineraries, exact budget allocation percentages, and matched verified partners.
   * **Customer Booking Hub (`/my-events`)**: Live event countdown, 4-step milestone tracker (Planning -> Matched -> Escrow Secured -> Execution), and downloadable tax invoices.

2. **Shata Partner Operating System (`shatapartner.com` Modernization)**:
   * **Vendor CRM Dashboard (`/partner/dashboard`)**: Live metrics (Gross Revenue, Active Leads, Conversion Rate, Upcoming Gigs).
   * **Interactive Kanban Lead Pipeline**: Live drag-and-drop / status progression (New Inquiry -> Proposal Sent -> Confirmed -> Completed).
   * **Dynamic Proposal & Quotation Builder**: In-browser client proposal generation with instant WhatsApp quotation links and 20% advance lock.
   * **Partner Onboarding Flow (`/partner`)**: Streamlined vendor application wizard with verification simulation.

3. **Design Aesthetics & UX Excellence**:
   * **Bespoke Indian Luxury Palette**: Warm amber (`#FF6B2C`), royal gold (`#C8922A`), deep obsidian ink (`#0D0906`), and pearl white (`#FAF8F5`).
   * **Seamless Dark / Light Mode**: Real-time theme provider with persistent `localStorage` synchronization.
   * **WCAG AA Compliant**: Accessible focus indicators, keyboard-trapped dialogs, and semantic HTML landmarks.
   * **SEO & Core Web Vitals**: JSON-LD Organization schema, OpenGraph tags, sitemap metadata, and fluid layout structure.

---

## 🛠️ Mandatory Tech Stack

* **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
* **Language**: [TypeScript (Strict Mode)](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) with bespoke tokens, typography variables, and glassmorphism
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animations & Micro-interactions**: Tailwind keyframes, CSS transforms, and `canvas-confetti`

---

## 🚀 Quick Start & Setup Instructions

### Prerequisites
* Node.js `>= 18.17.0` (Tested on Node.js v22)
* npm `>= 9.0.0`

### 1. Clone & Install
```bash
# Navigate to the project directory
cd shata-redesign

# Install dependencies
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
shata-redesign/
├── app/
│   ├── layout.tsx                # Root layout with fonts, SEO JSON-LD schema & theme providers
│   ├── page.tsx                  # Consumer marketplace homepage
│   ├── vendors/
│   │   └── page.tsx              # Filterable vendor directory with instant quote modal
│   ├── estimator/
│   │   └── page.tsx              # Interactive budget studio & quotation simulator
│   ├── concierge/
│   │   └── page.tsx              # Shata AI event curator & itinerary planner
│   ├── partner/
│   │   ├── page.tsx              # Shata Partner landing & onboarding wizard
│   │   └── dashboard/
│   │       └── page.tsx          # Partner CRM & Kanban lead pipeline
│   ├── my-events/
│   │   └── page.tsx              # Live event milestone tracker & invoice generator
│   └── globals.css               # Design system tokens, glassmorphism, fluid fonts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky glassmorphic navbar with active indicators & city picker
│   │   └── Footer.tsx            # Comprehensive sitemap, partner CTA, and legal disclosures
│   ├── home/
│   │   ├── HeroSection.tsx       # Luxury hero with search bar & 3D animated phone app mockup
│   │   ├── ServiceGrid.tsx       # 8-service category matrix with detail modal & estimate addition
│   │   ├── FeaturedVendors.tsx   # Verified vendor showcase with direct inquiry modal
│   │   ├── HowItWorks.tsx        # 4-step visual customer journey
│   │   ├── CitySelector.tsx      # Pan-India coverage explorer (76+ cities)
│   │   ├── Testimonials.tsx      # Verified customer reviews and social proof
│   │   └── MyEventsView.tsx      # Customer booking hub & milestone timeline
│   ├── estimator/
│   │   └── BudgetCalculator.tsx  # Dynamic slider-driven multi-service cost calculator
│   ├── concierge/
│   │   └── AIPlannerModal.tsx    # Intelligent conversational celebration planner
│   ├── partner/
│   │   └── PartnerPortal.tsx     # Partner CRM, Kanban lead tracker & proposal generator
│   └── ui/
│       ├── Badge.tsx             # Semantic badge variants
│       ├── RatingStars.tsx       # Interactive star rating component
│       └── ThemeToggle.tsx       # Dark/Light mode switcher
├── context/
│   ├── ThemeContext.tsx          # Theme provider with localStorage sync
│   └── BookingContext.tsx        # Global state for services, guest counts, and quotes
├── data/
│   ├── cities.ts                 # Covered Indian cities dataset
│   ├── services.ts               # 8 event pillars and tier definitions
│   ├── vendors.ts                # Verified vendor profiles with portfolio galleries
│   ├── testimonials.ts           # Customer stories and reviews
│   └── partnerMetrics.ts         # CRM lead pipeline and financial analytics
├── ARCHITECTURE.md               # Detailed architecture, state management & engineering overview
└── README.md                     # Setup instructions & feature overview
```

---

## 🌐 Live Vercel Deployment

This Next.js application is zero-config ready for Vercel deployment:
1. Push this repository to GitHub.
2. Import repository in [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset will auto-detect **Next.js**. Click **Deploy**!

---

## 🏆 Key Improvements Over Original Websites

| Area | Original Sites (`theshata.com`, `shata.in`, `shatapartner.com`) | Shata 2.0 Redesign |
| :--- | :--- | :--- |
| **Platform Fragmentation** | 3 disconnected URLs with fragmented user accounts | Unified ecosystem with Consumer Marketplace + Partner OS |
| **Pricing Transparency** | Static price tags with contact-us friction | Real-time Budget Studio with sliders for guest counts & tiers |
| **AI Integration** | None | Shata AI Event Concierge for instant itineraries & budget advice |
| **Vendor Tools** | Basic registration form | Full Vendor CRM with Kanban lead management & proposal engine |
| **State Management** | Page-level state | Global `BookingContext` persisting quotes, wishlist & event status |
| **Theme & Aesthetics** | Fixed layout palette | Polished Dark & Light luxury Indian wedding design tokens |
| **Accessibility & SEO** | Missing JSON-LD & ARIA focus states | WCAG AA standards, Schema.org metadata, keyboard navigation |

---

## 📄 License & Attribution
Designed and built for the **Shata Website Development Assessment**.
Developed with ❤️ for Indian celebrations.

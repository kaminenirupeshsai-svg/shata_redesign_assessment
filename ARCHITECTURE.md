# Architecture Overview: theshata.com Redesign

## 1. System Architecture & High-Level Design

This document details the architectural decisions, component hierarchy, state management, and performance strategies for the redesign of **theshata.com**.

```mermaid
graph TD
    A[User Browser] -->|Routes| B[Next.js 14 App Router]
    B --> C[Homepage & Marketplace - /]
    B --> D[Budget Studio - /estimator]
    B --> E[AI Concierge - /concierge]
    B --> F[Vendor Directory - /vendors]
    B --> G[My Events Hub - /my-events]

    C & D & E & F & G --> H[BookingContext State Engine]
    C & D & E & F & G --> I[ThemeContext - Dark / Light]
    H --> J[Persistent LocalStorage Sync]
```

---

## 2. State Management Architecture

* **`BookingContext.tsx`**: Single source of truth for the event city, guest counts, selected service packages, live quotation calculations, and booking status.
  $$\text{Total Estimate} = \sum (\text{Service Cost}) + \text{GST (18\%)}$$
  $$\text{Escrow Advance} = 20\% \times \text{Total Contract Value}$$
* **`ThemeContext.tsx`**: Manages theme persistence (Light/Dark mode) with zero hydration mismatch.

---

## 3. Component Hierarchy

* **Atomic UI (`/components/ui`)**:
  * `Badge.tsx`, `RatingStars.tsx`, `ThemeToggle.tsx`.
* **Layout (`/components/layout`)**:
  * `Navbar.tsx` (sticky glassmorphism with city dropdown, cart counter, mobile drawer), `Footer.tsx`.
* **Feature Modules (`/components/home`, `/components/estimator`, `/components/concierge`)**:
  * `HeroSection.tsx`, `ServiceGrid.tsx`, `FeaturedVendors.tsx`, `HowItWorks.tsx`, `CitySelector.tsx`, `Testimonials.tsx`.
  * `BudgetCalculator.tsx`, `AIPlannerModal.tsx`, `MyEventsView.tsx`.

---

## 4. Accessibility (WCAG AA) & SEO Performance

* **SEO**: JSON-LD `Organization` schema embedded in `layout.tsx`, descriptive OpenGraph tags, and semantic HTML5 landmarks.
* **a11y**: Focus rings, keyboard accessible modal dialogs, and high-contrast color ratios across both light and dark themes.
* **Performance**: 100% pre-rendered static routes with zero layout shift (CLS = 0).

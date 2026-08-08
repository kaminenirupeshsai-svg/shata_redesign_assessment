'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  FileCheck,
  CreditCard,
  Building,
  Smartphone
} from 'lucide-react';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';

export default function PartnerLandingPage() {
  const [partnerRegistered, setPartnerRegistered] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [category, setCategory] = useState('photography');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerRegistered(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge variant="gold">
              <Sparkles size={12} /> Official Shata Partner Ecosystem
            </Badge>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-ink dark:text-white leading-tight">
            Grow Your Event Business with{' '}
            <span className="italic font-normal gold-gradient-text">
              Shata Partner OS
            </span>
          </h1>
          <p className="text-sm sm:text-base text-ink-mid dark:text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Join 4,800+ elite photographers, caterers, floral decorators, and venues across India. Get high-intent client inquiries with zero upfront listing fees and guaranteed milestone payouts.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a
              href="#onboard"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-accent to-gold text-white font-mono text-xs uppercase font-bold tracking-wider shadow-glow-accent hover:scale-105 transition-all"
            >
              Apply as Verified Partner
            </a>
            <Link
              href="/partner/dashboard"
              className="px-6 py-3.5 rounded-2xl glass-panel border border-black/10 dark:border-white/15 text-ink dark:text-white font-mono text-xs uppercase font-bold tracking-wider hover:border-accent transition-all"
            >
              Launch Partner CRM Demo →
            </Link>
          </div>
        </div>

        {/* 4 Pillars of Partner Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-3 interactive-card">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
              <TrendingUp size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
              Zero Unqualified Leads
            </h3>
            <p className="text-xs text-ink-soft dark:text-neutral-400 font-light leading-relaxed">
              Every client inquiry contains verified event dates, guest counts, and pre-allocated budget numbers.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-3 interactive-card">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
              100% Escrow Protection
            </h3>
            <p className="text-xs text-ink-soft dark:text-neutral-400 font-light leading-relaxed">
              No chasing clients for payments. 20% advance locked at booking and milestone releases paid on time.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-3 interactive-card">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
              <FileCheck size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
              Instant Quote Builder
            </h3>
            <p className="text-xs text-ink-soft dark:text-neutral-400 font-light leading-relaxed">
              Generate bespoke client proposals and shareable invoice links directly on WhatsApp in under 60 seconds.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-3 interactive-card">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 flex items-center justify-center text-purple-500">
              <Building size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
              Pan-India Expansion
            </h3>
            <p className="text-xs text-ink-soft dark:text-neutral-400 font-light leading-relaxed">
              Get booked for destination weddings in Goa, Jaipur, Udaipur, and Vizag without opening branch offices.
            </p>
          </div>
        </div>

        {/* Onboarding Wizard Form */}
        <section id="onboard" className="max-w-3xl mx-auto p-8 rounded-3xl glass-panel border border-black/10 dark:border-white/15 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <Badge variant="accent">Partner Application</Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              Join the Verified Partner Network
            </h2>
            <p className="text-xs text-ink-soft dark:text-neutral-400 font-light">
              Submit your studio or company profile. Our vendor curation team verifies portfolios within 24 hours.
            </p>
          </div>

          {partnerRegistered ? (
            <div className="p-8 rounded-2xl bg-emerald-600 text-white text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <h3 className="font-heading text-2xl font-bold">
                Application Received for {businessName || 'Your Business'}!
              </h3>
              <p className="text-xs text-white/80 font-mono">
                Your verification token: SHATA-PARTNER-REQ-2026. You can now access the Partner CRM dashboard.
              </p>
              <Link
                href="/partner/dashboard"
                className="inline-block px-6 py-3 rounded-xl bg-white text-neutral-900 font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-md"
              >
                Access Shata Partner OS Dashboard →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                    Business / Studio Name
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Luminary Cinematic Films"
                    className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                    Primary Service Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id} className="dark:bg-neutral-900">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                    Operating City Hub
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                  >
                    {CITIES.map((c) => (
                      <option key={c.id} value={c.name} className="dark:bg-neutral-900">
                        {c.name} ({c.state})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                    WhatsApp Business Contact
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98490 00000"
                    className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                  Portfolio / Instagram Link / Website
                </label>
                <input
                  type="url"
                  placeholder="https://instagram.com/your_studio_handle"
                  className="w-full p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-accent to-gold text-white font-mono text-xs uppercase font-bold rounded-2xl shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Submit Partner Verification Request
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

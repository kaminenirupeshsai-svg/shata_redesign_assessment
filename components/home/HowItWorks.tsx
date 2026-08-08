'use client';

import React from 'react';
import { 
  Search, 
  Sliders, 
  Users2, 
  PartyPopper, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Browse & Select Services',
      desc: 'Explore transparent pricing for photography, gourmet catering, floral décor, and luxury venues across 76+ Indian cities.',
      icon: <Search size={22} className="text-accent" />,
      tag: 'Zero Markup',
    },
    {
      step: '02',
      title: 'Customize Your Budget',
      desc: 'Adjust guest counts, service tiers (Silver, Gold, Royal Platinum), and pick exact dates using our live Budget Studio.',
      icon: <Sliders size={22} className="text-gold" />,
      tag: 'Instant Estimate',
    },
    {
      step: '03',
      title: 'Partner Match & Lock',
      desc: 'Review verified portfolios and lock your booking with a nominal 20% advance held safely in Shata Escrow.',
      icon: <Users2 size={22} className="text-emerald-500" />,
      tag: '100% Escrow',
    },
    {
      step: '04',
      title: 'Relax & Celebrate',
      desc: 'Your dedicated Shata event manager monitors timelines and on-ground execution so you cherish every magical moment.',
      icon: <PartyPopper size={22} className="text-purple-500" />,
      tag: 'Picture Perfect',
    },
  ];

  return (
    <section id="how" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="font-mono text-xs uppercase font-bold text-accent tracking-[2px]">
              How It Works
            </span>
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
            Your seamless journey{' '}
            <span className="italic font-normal gold-gradient-text">
              with Shata
            </span>
          </h2>
          <p className="text-sm sm:text-base text-ink-mid dark:text-neutral-400 font-light">
            We replaced months of stressful vendor calls, hidden fees, and erratic delivery with a standardized, delightful 4-step digital experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, index) => (
            <div
              key={s.step}
              className="group rounded-3xl p-6 glass-panel border border-black/5 dark:border-white/10 flex flex-col justify-between interactive-card relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-ink-soft/40 dark:text-neutral-600">
                    {s.step}
                  </span>
                </div>

                <div className="inline-block mb-2">
                  <span className="text-[9px] font-mono uppercase font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-ink dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs text-ink-soft dark:text-neutral-400 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-ink-mid dark:text-neutral-400">
                <span>Phase {index + 1} of 4</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-accent/15 via-gold/10 to-transparent border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-accent text-white flex items-center justify-center flex-shrink-0 shadow-glow-accent">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-ink dark:text-white">
                100% On-Time Service Delivery Guarantee
              </div>
              <div className="text-[11px] text-ink-soft dark:text-neutral-400">
                If a vendor faces an emergency, Shata auto-deploys a backup verified partner at no extra cost.
              </div>
            </div>
          </div>

          <Link
            href="/estimator"
            className="inline-flex items-center gap-2 bg-ink dark:bg-white text-white dark:text-ink px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-sm flex-shrink-0"
          >
            <span>Try Estimator</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

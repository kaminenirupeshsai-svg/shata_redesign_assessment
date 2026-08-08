'use client';

import React from 'react';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Sparkles, 
  ArrowUpRight,
  Download
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-surface-elevated/80 dark:bg-surface-darkElevated/90 border-t border-black/5 dark:border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout Banner for Partners */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1E140C] via-[#2A1A0F] to-[#120B06] text-white border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-mono text-[10px] uppercase font-bold tracking-wider">
              <Sparkles size={12} />
              Are you an Event Vendor or Venue Owner?
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Grow Your Business with Shata Partner OS
            </h3>
            <p className="text-sm text-neutral-300 font-light">
              Join over 4,800+ verified photographers, caterers, decorators, and planners across 76+ Indian cities. Receive instant high-value client inquiries with guaranteed payments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-hover text-white px-6 py-3.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider shadow-glow-accent hover:scale-105 transition-all"
            >
              <span>Join as Verified Partner</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/partner/dashboard"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-2xl font-mono text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>Open Partner Demo CRM</span>
            </Link>
          </div>
        </div>

        {/* Multi-Column Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-black/10 dark:border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center font-mono text-xs font-bold text-white shadow-glow-accent">
                SH
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-ink dark:text-white">
                Shata
              </span>
            </Link>
            <p className="text-xs text-ink-soft dark:text-neutral-400 leading-relaxed font-light max-w-sm">
              India&apos;s premier event booking ecosystem connecting discerning hosts with verified photographers, caterers, floral architects, and planners across 76+ cities.
            </p>
            <div className="space-y-1.5 pt-2 text-xs font-mono text-ink-mid dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent flex-shrink-0" />
                <span>SHATA EVENTS PVT LTD, Banjara Hills, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-accent flex-shrink-0" />
                <span>support@theshata.com | partner@theshata.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent flex-shrink-0" />
                <span>+91 (040) 6820 4400 (Mon–Sat 9AM–8PM)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-white">
              Event Services
            </h4>
            <ul className="space-y-2 text-xs text-ink-mid dark:text-neutral-400">
              {SERVICES.slice(0, 6).map((svc) => (
                <li key={svc.id}>
                  <Link href={`/#services`} className="hover:text-accent transition-colors">
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Indian Cities */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-white">
              Major Cities
            </h4>
            <ul className="space-y-2 text-xs text-ink-mid dark:text-neutral-400">
              {CITIES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link href="/vendors" className="hover:text-accent transition-colors flex items-center justify-between">
                    <span>{c.name}</span>
                    <span className="text-[10px] opacity-60 font-mono">{c.venueCount}+</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Apps & Trust */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-white">
              Download Apps
            </h4>
            <div className="space-y-2">
              <a
                href="https://apps.apple.com/in/app/shata/id6743954767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black dark:bg-neutral-800 text-white hover:bg-neutral-900 transition-all border border-white/10"
              >
                <Download size={16} className="text-accent" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-400">App Store</div>
                  <div className="text-xs font-bold">iOS Download</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.shata.user"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black dark:bg-neutral-800 text-white hover:bg-neutral-900 transition-all border border-white/10"
              >
                <Download size={16} className="text-emerald-400" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-400">Google Play</div>
                  <div className="text-xs font-bold">Android Download</div>
                </div>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck size={14} />
              <span>100% Escrow Payment Guarantee</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-soft dark:text-neutral-500">
          <div>
            © {new Date().getFullYear()} SHATA EVENTS PVT LTD. All rights reserved. Redesigned with Next.js &amp; TypeScript.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/estimator" className="hover:text-accent">Budget Studio</Link>
            <Link href="/concierge" className="hover:text-accent">AI Concierge</Link>
            <Link href="/partner" className="hover:text-accent">Partner Network</Link>
            <span className="inline-flex items-center gap-1 text-accent">
              Made with <Heart size={12} className="fill-accent" /> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

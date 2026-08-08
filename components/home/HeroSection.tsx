'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { 
  Sparkles, 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Camera,
  Utensils,
  Music,
  Sliders
} from 'lucide-react';

export function HeroSection() {
  const router = useRouter();
  const { state, setCity, setEventType, setEventDate, setGuestCount } = useBooking();

  const [selectedService, setSelectedService] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/vendors');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Radial Glow & Decorative Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(var(--text-mid) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)',
        }}
      />

      {/* Floating ambient luxury lighting pills */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-accent/15 via-gold/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tagline Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel shadow-sm border border-accent/20 dark:border-accent/40 text-ink dark:text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-[11px] font-mono font-bold tracking-[2px] uppercase text-accent">
              India&apos;s #1 Event Booking Ecosystem
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink dark:text-white leading-[1.08]">
            Where Every{' '}
            <span className="italic font-normal gold-gradient-text">
              Celebration
            </span>
            <br />
            Becomes Legend
          </h1>
          <p className="text-base sm:text-lg text-ink-mid dark:text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Directly book verified photographers, gourmet caterers, floral decorators &amp; planners across{' '}
            <span className="font-semibold text-accent">Hyderabad, Bengaluru, Vizag &amp; 76+ cities</span> with transparent pricing and escrow protection.
          </p>
        </div>

        {/* Interactive Multi-Criteria Search & Filter Bar */}
        <form 
          onSubmit={handleSearch}
          className="mt-10 max-w-5xl mx-auto p-3 sm:p-4 rounded-3xl glass-panel shadow-2xl border border-black/10 dark:border-white/15 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* City Selection */}
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-accent/40 transition-colors">
              <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin size={12} className="text-accent" /> City
              </label>
              <select
                value={state.city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-ink dark:text-white focus:outline-none cursor-pointer"
              >
                {CITIES.map((c) => (
                  <option key={c.id} value={c.name} className="dark:bg-neutral-900 text-ink dark:text-white">
                    {c.name} ({c.vendorCount}+ vendors)
                  </option>
                ))}
              </select>
            </div>

            {/* Event Type */}
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-accent/40 transition-colors">
              <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles size={12} className="text-accent" /> Event Type
              </label>
              <select
                value={state.eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-ink dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="Wedding & Sangeet Gala" className="dark:bg-neutral-900">Wedding &amp; Sangeet Gala</option>
                <option value="Reception & Engagement" className="dark:bg-neutral-900">Reception &amp; Engagement</option>
                <option value="Pre-Wedding Shoot & Mehendi" className="dark:bg-neutral-900">Pre-Wedding Shoot &amp; Mehendi</option>
                <option value="Corporate Summit & Gala" className="dark:bg-neutral-900">Corporate Summit &amp; Gala</option>
                <option value="Birthday & Milestone Party" className="dark:bg-neutral-900">Birthday &amp; Milestone Party</option>
              </select>
            </div>

            {/* Service Category */}
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-accent/40 transition-colors">
              <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1 flex items-center gap-1.5">
                <Sliders size={12} className="text-accent" /> Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-ink dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="all" className="dark:bg-neutral-900">All 8 Categories</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="dark:bg-neutral-900">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Action */}
            <div className="flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[52px] bg-gradient-to-r from-accent via-accent-hover to-gold text-white font-mono text-xs uppercase font-bold tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Search size={16} />
                <span>Search Verified</span>
              </button>
            </div>
          </div>
        </form>

        {/* Live Platform Proof Numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-2xl glass-panel">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              76+
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-ink-soft dark:text-neutral-400 mt-1">
              Indian Cities
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              10,000+
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-ink-soft dark:text-neutral-400 mt-1">
              Events Booked
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-accent flex items-center justify-center gap-1">
              4.98 <Star size={18} className="fill-accent" />
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-ink-soft dark:text-neutral-400 mt-1">
              App Store Rating
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              100%
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-ink-soft dark:text-neutral-400 mt-1">
              Escrow Guaranteed
            </div>
          </div>
        </div>

        {/* Cinematic Live App Experience Showcase */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#1C130B] to-[#0A0704] text-white border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Context */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-mono text-[10px] uppercase font-bold">
                <ShieldCheck size={14} /> Complete Event Accountability
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
                Your entire celebration in the palm of your hand.
              </h2>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Track photographers, catering live counters, floral deliveries, and payment milestones in real-time. Direct instant chat with verified vendor leads with zero middleman markups.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/estimator"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl font-mono text-xs uppercase font-bold tracking-wider shadow-glow-accent transition-all"
                >
                  <span>Build Event Package</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/my-events"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>View Live Tracker</span>
                </Link>
              </div>
            </div>

            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[260px] h-[520px] rounded-[2.8rem] bg-[#0E0E0E] p-3 border-4 border-neutral-700 shadow-2xl relative">
                {/* Speaker pill */}
                <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Simulated Screen */}
                <div className="bg-[#18110B] rounded-[2.2rem] h-[450px] p-4 text-white flex flex-col justify-between border border-white/5 overflow-hidden">
                  <div>
                    <div className="flex justify-between items-center text-xs mb-3">
                      <div>
                        <span className="text-[9px] font-mono text-accent uppercase tracking-wider block">
                          Current Event
                        </span>
                        <span className="font-bold text-sm">Wedding Gala</span>
                      </div>
                      <span className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-[10px] font-mono text-accent font-bold">
                        HYD
                      </span>
                    </div>

                    {/* Circular Countdown Progress */}
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center mb-3">
                      <div className="font-heading text-3xl font-bold text-accent">14</div>
                      <div className="text-[9px] font-mono uppercase text-neutral-400">Days to Grand Day</div>
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-accent h-full w-3/4 rounded-full" />
                      </div>
                    </div>

                    {/* Assigned Vendors List */}
                    <div className="space-y-2">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <Camera size={16} className="text-accent" />
                        <div className="flex-1 text-[11px]">
                          <div className="font-bold">Pixels by Arjun</div>
                          <div className="text-[9px] text-neutral-400">Candid Shoot Confirmed</div>
                        </div>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                      </div>

                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                        <Utensils size={16} className="text-gold" />
                        <div className="flex-1 text-[11px]">
                          <div className="font-bold">Royal Feast Co.</div>
                          <div className="text-[9px] text-neutral-400">500 Plate Tasting Done</div>
                        </div>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <Link
                    href="/my-events"
                    className="w-full py-2 bg-gradient-to-r from-accent to-gold text-white font-mono text-[10px] uppercase font-bold text-center rounded-xl"
                  >
                    Manage Timeline →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

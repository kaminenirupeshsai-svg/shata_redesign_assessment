'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VENDORS, Vendor } from '@/data/vendors';
import { RatingStars } from '@/components/ui/RatingStars';
import { Badge } from '@/components/ui/Badge';
import { useBooking } from '@/context/BookingContext';
import { 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Heart, 
  MessageSquare,
  Award,
  Calendar,
  X
} from 'lucide-react';

export function FeaturedVendors() {
  const { state, toggleVendorSave } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVendorModal, setActiveVendorModal] = useState<Vendor | null>(null);
  const [quoteSuccessMsg, setQuoteSuccessMsg] = useState(false);

  const categories = [
    { id: 'all', label: 'All Verified' },
    { id: 'photography', label: 'Photography' },
    { id: 'catering', label: 'Catering' },
    { id: 'decor', label: 'Décor & Floral' },
    { id: 'venues', label: 'Venues' },
    { id: 'entertainment', label: 'Live Bands & DJs' },
    { id: 'makeup', label: 'Bridal Makeup' },
    { id: 'mehendi', label: 'Henna Artistry' },
  ];

  const filteredVendors = selectedCategory === 'all'
    ? VENDORS
    : VENDORS.filter((v) => v.category === selectedCategory);

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccessMsg(true);
    setTimeout(() => {
      setQuoteSuccessMsg(false);
      setActiveVendorModal(null);
    }, 2000);
  };

  return (
    <section id="vendors" className="py-24 bg-surface/50 dark:bg-surface-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent" />
              <span className="font-mono text-xs uppercase font-bold text-accent tracking-[2px]">
                Curated Marketplace
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
              Featured Verified{' '}
              <span className="italic font-normal gold-gradient-text">
                Partners
              </span>
            </h2>
            <p className="text-sm text-ink-mid dark:text-neutral-400 font-light max-w-xl">
              Every vendor passes strict quality audits, FSSAI hygiene verifications, portfolio reviews, and identity checks before being listed on Shata.
            </p>
          </div>

          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
          >
            <span>Explore All 12,000+ Partners</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase font-bold tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-ink dark:bg-white text-white dark:text-ink shadow-sm'
                  : 'bg-black/5 dark:bg-white/5 text-ink-mid dark:text-neutral-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVendors.map((vendor) => {
            const isSaved = state.savedVendors.includes(vendor.id);
            return (
              <div
                key={vendor.id}
                className="group rounded-3xl glass-panel overflow-hidden border border-black/5 dark:border-white/10 interactive-card flex flex-col justify-between"
              >
                {/* Image Cover */}
                <div className="relative h-52 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={vendor.coverImage}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Badge variant={vendor.badge === 'Shata Elite' ? 'gold' : 'verified'}>
                      {vendor.badge}
                    </Badge>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVendorSave(vendor.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isSaved ? 'bg-red-500 text-white' : 'bg-black/40 text-white hover:bg-red-500'
                      }`}
                      aria-label="Save Vendor"
                    >
                      <Heart size={14} className={isSaved ? 'fill-white' : ''} />
                    </button>
                  </div>

                  {/* Bottom City & Category info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-accent" />
                      <span>{vendor.city}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                      {vendor.eventsCompleted}+ Gigs
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink dark:text-white leading-snug mb-1 group-hover:text-accent transition-colors">
                      {vendor.name}
                    </h3>
                    <p className="text-xs text-ink-soft dark:text-neutral-400 font-light line-clamp-2">
                      {vendor.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <RatingStars rating={vendor.rating} reviewsCount={vendor.reviewsCount} />
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      100% Verified
                    </span>
                  </div>

                  {/* Price & Modal Trigger */}
                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase text-ink-soft dark:text-neutral-400 block">
                        Packages from
                      </span>
                      <span className="font-mono text-xs font-bold text-ink dark:text-white">
                        {vendor.startingPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveVendorModal(vendor)}
                      className="px-3.5 py-2 rounded-xl bg-accent text-white font-mono text-[10px] uppercase font-bold shadow-glow-accent hover:bg-accent-hover transition-all"
                    >
                      View &amp; Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vendor Profile & Quick Quote Dialog */}
      {activeVendorModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveVendorModal(null)}
        >
          <div 
            className="max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl border border-black/10 dark:border-white/15 animate-in zoom-in-95 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVendorModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 text-ink dark:text-white hover:bg-black/10 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={activeVendorModal.avatar}
                alt={activeVendorModal.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-accent shadow-lg"
              />
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <Badge variant="gold">{activeVendorModal.badge}</Badge>
                  <span className="text-xs font-mono text-ink-soft dark:text-neutral-400">
                    {activeVendorModal.experienceYears}+ Years in Industry
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-ink dark:text-white">
                  {activeVendorModal.name}
                </h3>
                <p className="text-xs text-ink-mid dark:text-neutral-300 font-light">
                  {activeVendorModal.about}
                </p>
                <div className="pt-2">
                  <RatingStars rating={activeVendorModal.rating} reviewsCount={activeVendorModal.reviewsCount} />
                </div>
              </div>
            </div>

            {/* Gallery Lightbox Preview */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-white">
                Recent Portfolio Captures
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {activeVendorModal.gallery.map((img, i) => (
                  <div key={i} className="h-28 rounded-2xl overflow-hidden bg-neutral-800">
                    <img src={img} alt="Portfolio item" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-white">
                Available Signature Packages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeVendorModal.packages.map((pkg, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-ink dark:text-white">{pkg.name}</span>
                      <span className="font-mono text-xs font-bold text-accent">{pkg.price}</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-ink-soft dark:text-neutral-400">
                      {pkg.deliverables.map((del, d) => (
                        <li key={d} className="flex items-center gap-1.5">
                          <Check size={12} className="text-emerald-500 flex-shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <form onSubmit={handleRequestQuote} className="p-5 rounded-2xl bg-accent/10 border border-accent/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                  <MessageSquare size={14} /> Send Direct Quote Inquiry (Zero Middleman)
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                  ⚡ Guaranteed reply within 2 hours
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  defaultValue="Dr. Aarav Sen"
                  className="p-3 rounded-xl bg-white dark:bg-neutral-800 text-xs text-ink dark:text-white border border-black/10 dark:border-white/10 focus:outline-accent"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Mobile Number"
                  required
                  defaultValue="+91 98490 23145"
                  className="p-3 rounded-xl bg-white dark:bg-neutral-800 text-xs text-ink dark:text-white border border-black/10 dark:border-white/10 focus:outline-accent"
                />
              </div>

              {quoteSuccessMsg ? (
                <div className="p-3 rounded-xl bg-emerald-600 text-white font-mono text-xs text-center font-bold animate-in fade-in">
                  🎉 Inquiry Transmitted to {activeVendorModal.name}! Partner will WhatsApp you shortly.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-accent to-gold text-white font-mono text-xs uppercase font-bold rounded-xl shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Confirm Instant Inquiry Request
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

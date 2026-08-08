'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { VENDORS, Vendor } from '@/data/vendors';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { RatingStars } from '@/components/ui/RatingStars';
import { Badge } from '@/components/ui/Badge';
import { useBooking } from '@/context/BookingContext';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  Filter, 
  Heart, 
  Check, 
  Sliders, 
  ArrowRight,
  ShieldCheck,
  Eye,
  X,
  MessageSquare
} from 'lucide-react';

export default function VendorsDirectoryPage() {
  const { state, toggleVendorSave } = useBooking();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBadge, setSelectedBadge] = useState('all');
  const [activeModal, setActiveModal] = useState<Vendor | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const filteredVendors = useMemo(() => {
    return VENDORS.filter((v) => {
      const matchSearch =
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCity = selectedCity === 'all' || v.city === selectedCity;
      const matchCategory = selectedCategory === 'all' || v.category === selectedCategory;
      const matchBadge = selectedBadge === 'all' || v.badge === selectedBadge;

      return matchSearch && matchCity && matchCategory && matchBadge;
    });
  }, [searchTerm, selectedCity, selectedCategory, selectedBadge]);

  return (
    <main className="min-h-screen pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2">
          <Badge variant="accent">Shata Verified Directory</Badge>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
          Explore Verified{' '}
          <span className="italic font-normal gold-gradient-text">
            Event Partners
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-ink-mid dark:text-neutral-400 font-light">
          Compare portfolios, reviews, and verified package prices across India. No hidden markups.
        </p>
      </div>

      {/* Multi-Faceted Filter Bar */}
      <div className="p-4 sm:p-6 rounded-3xl glass-panel border border-black/10 dark:border-white/15 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Keyword Search */}
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-3.5 text-ink-soft dark:text-neutral-400" />
            <input
              type="text"
              placeholder="Search vendor by name, style..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
            />
          </div>

          {/* City Filter */}
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
          >
            <option value="all" className="dark:bg-neutral-900">All Cities</option>
            {CITIES.map((c) => (
              <option key={c.id} value={c.name} className="dark:bg-neutral-900">
                {c.name}
              </option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
          >
            <option value="all" className="dark:bg-neutral-900">All 8 Service Categories</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id} className="dark:bg-neutral-900">
                {s.title}
              </option>
            ))}
          </select>

          {/* Tier/Badge Filter */}
          <select
            value={selectedBadge}
            onChange={(e) => setSelectedBadge(e.target.value)}
            className="w-full p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
          >
            <option value="all" className="dark:bg-neutral-900">All Partner Tiers</option>
            <option value="Shata Elite" className="dark:bg-neutral-900">Shata Elite Only</option>
            <option value="Super Host" className="dark:bg-neutral-900">Super Host</option>
            <option value="Verified Partner" className="dark:bg-neutral-900">Verified Partner</option>
          </select>
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-ink-soft dark:text-neutral-400 pt-2 border-t border-black/5 dark:border-white/10">
          <span>Showing {filteredVendors.length} Verified Partners</span>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCity('all');
              setSelectedCategory('all');
              setSelectedBadge('all');
            }}
            className="text-accent hover:underline"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.map((vendor) => {
          const isSaved = state.savedVendors.includes(vendor.id);
          return (
            <div
              key={vendor.id}
              className="group rounded-3xl glass-panel overflow-hidden border border-black/5 dark:border-white/10 interactive-card flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                <img
                  src={vendor.coverImage}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <Badge variant={vendor.badge === 'Shata Elite' ? 'gold' : 'verified'}>
                    {vendor.badge}
                  </Badge>

                  <button
                    onClick={() => toggleVendorSave(vendor.id)}
                    className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                      isSaved ? 'bg-red-500 text-white' : 'bg-black/40 text-white hover:bg-red-500'
                    }`}
                  >
                    <Heart size={14} className={isSaved ? 'fill-white' : ''} />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-accent" />
                    <span>{vendor.city}</span>
                  </div>
                  <span>{vendor.eventsCompleted}+ Completed</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-ink dark:text-white group-hover:text-accent transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-xs text-ink-soft dark:text-neutral-400 font-light line-clamp-2 mt-1">
                    {vendor.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <RatingStars rating={vendor.rating} reviewsCount={vendor.reviewsCount} />
                  <span className="font-mono text-xs font-bold text-ink dark:text-white">
                    {vendor.startingPrice}
                  </span>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModal(vendor)}
                    className="flex-1 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-mono text-xs font-bold uppercase shadow-glow-accent transition-all text-center"
                  >
                    View Packages &amp; Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal View */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="max-w-2xl w-full p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl border border-black/10 dark:border-white/15 animate-in zoom-in-95 space-y-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 text-ink dark:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex gap-4 items-center">
              <img
                src={activeModal.avatar}
                alt={activeModal.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-accent"
              />
              <div>
                <Badge variant="gold">{activeModal.badge}</Badge>
                <h3 className="font-heading text-2xl font-bold text-ink dark:text-white">
                  {activeModal.name}
                </h3>
                <div className="text-xs font-mono text-accent flex items-center gap-1">
                  <MapPin size={12} /> {activeModal.city} • {activeModal.experienceYears}+ Yrs Exp
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink-mid dark:text-neutral-300 font-light leading-relaxed">
              {activeModal.about}
            </p>

            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase font-bold text-ink dark:text-white">
                Available Signature Packages
              </h4>
              <div className="space-y-2">
                {activeModal.packages.map((pkg, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 space-y-1">
                    <div className="flex justify-between font-bold text-xs">
                      <span>{pkg.name}</span>
                      <span className="font-mono text-accent">{pkg.price}</span>
                    </div>
                    <ul className="text-[11px] text-ink-soft dark:text-neutral-400 space-y-0.5">
                      {pkg.deliverables.map((del, d) => (
                        <li key={d}>✓ {del}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {quoteSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-600 text-white font-mono text-xs text-center font-bold">
                🎉 Direct quote request sent! Vendor will reply within 2 hours.
              </div>
            ) : (
              <button
                onClick={() => {
                  setQuoteSuccess(true);
                  setTimeout(() => {
                    setQuoteSuccess(false);
                    setActiveModal(null);
                  }, 2000);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-accent to-gold text-white font-mono text-xs uppercase font-bold rounded-xl shadow-glow-accent hover:scale-105 transition-all"
              >
                Send Direct Quote Inquiry
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { useBooking } from '@/context/BookingContext';
import { CITIES } from '@/data/cities';
import { Badge } from '@/components/ui/Badge';
import { 
  Calculator, 
  Users, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Check, 
  Trash2, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Percent
} from 'lucide-react';

export function BudgetCalculator() {
  const { state, setCity, setEventType, setEventDate, setGuestCount, addService, removeService } = useBooking();
  const [activeTier, setActiveTier] = useState<'Silver' | 'Gold' | 'Royal Platinum'>('Gold');
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Available selectable modules
  const availableModules = [
    {
      id: 'photography',
      title: 'Photography & Cine Film',
      icon: '📸',
      silver: 45000,
      gold: 65000,
      platinum: 125000,
      unit: 'event',
    },
    {
      id: 'catering',
      title: 'Gourmet Catering & Live Counters',
      icon: '🍽️',
      silver: 650,
      gold: 850,
      platinum: 1400,
      unit: 'plate',
    },
    {
      id: 'decor',
      title: 'Floral Décor & Architecture',
      icon: '🌸',
      silver: 50000,
      gold: 95000,
      platinum: 250000,
      unit: 'event',
    },
    {
      id: 'venues',
      title: 'Venue Rental & Banquet Lawn',
      icon: '🏛️',
      silver: 90000,
      gold: 150000,
      platinum: 350000,
      unit: 'day',
    },
    {
      id: 'entertainment',
      title: 'Live Band, DJ & Dance Stage',
      icon: '🎸',
      silver: 30000,
      gold: 55000,
      platinum: 120000,
      unit: 'event',
    },
    {
      id: 'makeup',
      title: 'Bridal Makeup & Groom Styling',
      icon: '💄',
      silver: 18000,
      gold: 28000,
      platinum: 45000,
      unit: 'event',
    },
    {
      id: 'mehendi',
      title: 'Henna & Guest Mehendi Squad',
      icon: '🎨',
      silver: 10000,
      gold: 18000,
      platinum: 32000,
      unit: 'event',
    },
    {
      id: 'planning',
      title: 'Full Event Management & Directors',
      icon: '📋',
      silver: 80000,
      gold: 140000,
      platinum: 250000,
      unit: 'event',
    },
  ];

  const handleToggleModule = (mod: typeof availableModules[0]) => {
    const isPresent = state.services.some((s) => s.category === mod.id);
    if (isPresent) {
      const match = state.services.find((s) => s.category === mod.id);
      if (match) removeService(match.id);
    } else {
      const baseCost = activeTier === 'Silver' ? mod.silver : activeTier === 'Gold' ? mod.gold : mod.platinum;
      const totalCost = mod.unit === 'plate' ? baseCost * state.guestCount : baseCost;
      
      addService({
        id: `${mod.id}-${activeTier.toLowerCase()}`,
        name: `${mod.title} (${activeTier} Tier)`,
        category: mod.id,
        tier: activeTier,
        estimatedCost: totalCost,
      });
    }
  };

  const handleTierChange = (tier: 'Silver' | 'Gold' | 'Royal Platinum') => {
    setActiveTier(tier);
    // Recalculate existing items with new tier
    state.services.forEach((s) => {
      const mod = availableModules.find((m) => m.id === s.category);
      if (mod) {
        const baseCost = tier === 'Silver' ? mod.silver : tier === 'Gold' ? mod.gold : mod.platinum;
        const totalCost = mod.unit === 'plate' ? baseCost * state.guestCount : baseCost;
        addService({
          ...s,
          id: `${mod.id}-${tier.toLowerCase()}`,
          name: `${mod.title} (${tier} Tier)`,
          tier: tier,
          estimatedCost: totalCost,
        });
      }
    });
  };

  const grandTotal = state.services.reduce((acc, curr) => acc + curr.estimatedCost, 0);
  const taxEst = grandTotal * 0.18; // 18% GST estimate
  const escrowAdvance = (grandTotal + taxEst) * 0.20; // 20% Advance

  const handleLockBundle = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
    setShowSummaryModal(true);
  };

  const handleDownloadQuotation = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2">
          <Badge variant="accent">Shata Interactive Budget Studio</Badge>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
          Design Your Dream Event{' '}
          <span className="italic font-normal gold-gradient-text">
            Budget
          </span>
        </h1>
        <p className="text-sm sm:text-base text-ink-mid dark:text-neutral-400 font-light">
          Real-time itemized cost simulation with zero hidden surprises. Slide guest counts, switch luxury tiers, and lock guaranteed vendor packages instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Parameter & Modules Studio */}
        <div className="lg:col-span-7 space-y-6">
          {/* Controls Bar: City, Event, Guests */}
          <div className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-6">
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white flex items-center gap-2">
              <Calculator size={18} className="text-accent" />
              1. Event Parameters &amp; Guest Size
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                  Event Destination
                </label>
                <select
                  value={state.city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
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
                  Event Date
                </label>
                <input
                  type="date"
                  value={state.eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                />
              </div>
            </div>

            {/* Guest Count Slider */}
            <div className="space-y-2 pt-2 border-t border-black/5 dark:border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold text-ink dark:text-neutral-300 flex items-center gap-1.5">
                  <Users size={14} className="text-accent" /> Estimated Guest Count:
                </span>
                <span className="font-heading text-xl font-bold text-accent">
                  {state.guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={state.guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[10px] font-mono text-ink-soft dark:text-neutral-500">
                <span>50 (Intimate)</span>
                <span>500 (Grand)</span>
                <span>1,200 (Royal)</span>
                <span>2,000+ (Epic)</span>
              </div>
            </div>

            {/* Luxury Tier Selector */}
            <div className="space-y-2 pt-2 border-t border-black/5 dark:border-white/10">
              <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider">
                Select Quality &amp; Luxury Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Silver', 'Gold', 'Royal Platinum'] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => handleTierChange(tier)}
                    className={`py-2.5 px-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTier === tier
                        ? 'bg-gradient-to-r from-accent to-gold text-white shadow-glow-accent scale-[1.02]'
                        : 'bg-black/5 dark:bg-white/5 text-ink-mid dark:text-neutral-300 hover:bg-black/10'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Module Selector Grid */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
              2. Toggle Services for this Calculation
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableModules.map((mod) => {
                const isSelected = state.services.some((s) => s.category === mod.id);
                const cost = activeTier === 'Silver' ? mod.silver : activeTier === 'Gold' ? mod.gold : mod.platinum;
                const totalItemCost = mod.unit === 'plate' ? cost * state.guestCount : cost;

                return (
                  <div
                    key={mod.id}
                    onClick={() => handleToggleModule(mod)}
                    className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-accent bg-accent/10 dark:bg-accent/15 shadow-sm'
                        : 'border-black/5 dark:border-white/10 hover:border-accent/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-xl">
                        {mod.icon}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-ink dark:text-white">
                          {mod.title}
                        </div>
                        <div className="text-[11px] font-mono text-ink-soft dark:text-neutral-400">
                          {mod.unit === 'plate'
                            ? `₹${cost}/plate (${state.guestCount} guests)`
                            : `₹${cost.toLocaleString('en-IN')}`}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isSelected ? 'bg-accent text-white' : 'border border-black/20 dark:border-white/20 text-transparent'
                      }`}
                    >
                      ✓
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Sticky Invoice & Quotation Preview */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-black/10 dark:border-white/15 shadow-2xl space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start pb-4 border-b border-black/5 dark:border-white/10">
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-accent tracking-wider">
                  Live Quotation Draft
                </span>
                <h3 className="font-heading text-xl font-bold text-ink dark:text-white">
                  {state.eventType}
                </h3>
                <div className="text-xs font-mono text-ink-soft dark:text-neutral-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin size={12} className="text-accent" /> {state.city} • {state.guestCount} Guests
                </div>
              </div>

              <Badge variant="verified">Draft #SHT-892</Badge>
            </div>

            {/* Selected Items Breakdown */}
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {state.services.length === 0 ? (
                <div className="text-center py-8 text-xs text-ink-soft dark:text-neutral-500 font-mono">
                  No services selected. Toggle categories on the left to compute instant pricing.
                </div>
              ) : (
                state.services.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-between text-xs"
                  >
                    <div className="space-y-0.5 max-w-[70%]">
                      <div className="font-bold text-ink dark:text-white truncate">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-mono text-accent">
                        Tier: {item.tier}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-ink dark:text-neutral-200">
                        ₹{item.estimatedCost.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => removeService(item.id)}
                        className="text-ink-soft hover:text-red-500 transition-colors p-1"
                        title="Remove service"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Math & Totals Summary */}
            <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-ink-soft dark:text-neutral-400">
                <span>Subtotal ({state.services.length} Services)</span>
                <span>₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-ink-soft dark:text-neutral-400">
                <span>Estimated GST (18%)</span>
                <span>₹{Math.round(taxEst).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>Shata Escrow Protection</span>
                <span>FREE</span>
              </div>

              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex justify-between items-baseline">
                <span className="font-heading text-base font-bold text-ink dark:text-white">
                  Estimated Total
                </span>
                <span className="font-mono text-2xl font-bold text-accent">
                  ₹{Math.round(grandTotal + taxEst).toLocaleString('en-IN')}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-between text-[11px] text-ink dark:text-white">
                <span>20% Lock-in Advance</span>
                <span className="font-bold font-mono text-accent">
                  ₹{Math.round(escrowAdvance).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                disabled={state.services.length === 0}
                onClick={handleLockBundle}
                className="w-full py-3.5 bg-gradient-to-r from-accent via-accent-hover to-gold text-white font-mono text-xs uppercase font-bold rounded-2xl shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>Lock Custom Package &amp; Get Matches</span>
              </button>

              <button
                onClick={handleDownloadQuotation}
                className="w-full py-2.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 text-ink dark:text-white font-mono text-xs font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2"
              >
                <Download size={14} />
                <span>{downloadSuccess ? '✓ PDF Draft Saved!' : 'Download Quotation PDF'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation & Matching Modal */}
      {showSummaryModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setShowSummaryModal(false)}
        >
          <div 
            className="max-w-xl w-full p-8 rounded-3xl glass-panel shadow-2xl border border-black/10 dark:border-white/15 animate-in zoom-in-95 space-y-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto text-3xl">
              🎉
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-bold text-ink dark:text-white">
                Your Custom Event Bundle is Created!
              </h3>
              <p className="text-xs text-ink-soft dark:text-neutral-300 leading-relaxed font-light">
                Reference ID: <strong className="font-mono text-accent">{state.activeEventId}</strong>. We are matching you with verified {state.city} partners specializing in your {activeTier} Tier package.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 text-left text-xs font-mono space-y-1.5">
              <div className="flex justify-between">
                <span className="text-ink-soft dark:text-neutral-400">Total Services:</span>
                <span className="font-bold">{state.services.length} Packages</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft dark:text-neutral-400">Total Estimated Cost:</span>
                <span className="font-bold text-accent">₹{Math.round(grandTotal + taxEst).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft dark:text-neutral-400">Escrow Security:</span>
                <span className="text-emerald-500 font-bold">100% Protected</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/my-events"
                className="px-6 py-3 rounded-xl bg-accent text-white font-mono text-xs uppercase font-bold shadow-glow-accent hover:bg-accent-hover transition-all"
              >
                Go to My Event Dashboard →
              </Link>
              <button
                onClick={() => setShowSummaryModal(false)}
                className="px-6 py-3 rounded-xl bg-black/5 dark:bg-white/10 text-ink dark:text-white font-mono text-xs font-semibold"
              >
                Close &amp; Keep Editing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

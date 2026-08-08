'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES, ServiceCategory } from '@/data/services';
import { useBooking } from '@/context/BookingContext';
import { Badge } from '@/components/ui/Badge';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  CheckCircle2, 
  Eye, 
  X,
  Calendar
} from 'lucide-react';

export function ServiceGrid() {
  const { state, addService, removeService } = useBooking();
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceCategory | null>(null);

  const isServiceAdded = (category: string) => {
    return state.services.some((s) => s.category === category);
  };

  const handleToggleService = (svc: ServiceCategory) => {
    if (isServiceAdded(svc.id)) {
      const match = state.services.find((s) => s.category === svc.id);
      if (match) removeService(match.id);
    } else {
      addService({
        id: `${svc.id}-std`,
        name: `${svc.title} (Standard Package)`,
        category: svc.id,
        tier: 'Gold',
        estimatedCost: svc.unitType === 'plate' ? svc.basePriceNum * state.guestCount : svc.basePriceNum,
      });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent" />
              <span className="font-mono text-xs uppercase font-bold text-accent tracking-[2px]">
                Our 8 Service Pillars
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
              Everything your{' '}
              <span className="italic font-normal gold-gradient-text">
                celebration
              </span>{' '}
              needs
            </h2>
            <p className="text-sm sm:text-base text-ink-mid dark:text-neutral-400 font-light max-w-xl">
              From intimate haldi ceremonies to 5,000-guest destination weddings — every vendor, every contract, guaranteed under one unified platform.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/estimator"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all shadow-sm"
            >
              <Sparkles size={14} />
              <span>Customize in Budget Studio</span>
            </Link>
          </div>
        </div>

        {/* 8-Service Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const added = isServiceAdded(service.id);
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-6 glass-panel interactive-card border border-black/5 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 dark:bg-accent/20 border border-accent/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <Badge variant={index % 2 === 0 ? 'accent' : 'gold'}>
                      {service.badge}
                    </Badge>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-ink dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-ink-mid dark:text-neutral-300 font-light leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-1.5 mb-6 text-[11px] text-ink-soft dark:text-neutral-400">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check size={12} className="text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Pricing & Actions */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono uppercase text-ink-soft dark:text-neutral-400 block">
                      Starting From
                    </span>
                    <span className="font-mono text-sm font-bold text-ink dark:text-white">
                      {service.startingPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="p-2 rounded-xl bg-black/5 dark:bg-white/10 text-ink-mid dark:text-neutral-300 hover:text-accent transition-colors"
                      title="View Details"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={() => handleToggleService(service)}
                      className={`px-3 py-2 rounded-xl font-mono text-[10px] uppercase font-bold flex items-center gap-1 transition-all ${
                        added
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-accent/15 text-accent hover:bg-accent hover:text-white'
                      }`}
                    >
                      {added ? (
                        <>
                          <CheckCircle2 size={12} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={12} /> Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedServiceModal(null)}
        >
          <div 
            className="max-w-2xl w-full p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl border border-black/10 dark:border-white/15 animate-in zoom-in-95 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 dark:bg-white/10 text-ink dark:text-white hover:bg-black/10 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center text-3xl">
                {selectedServiceModal.icon}
              </div>
              <div>
                <Badge variant="accent">{selectedServiceModal.badge}</Badge>
                <h3 className="font-heading text-2xl font-bold text-ink dark:text-white mt-1">
                  {selectedServiceModal.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-ink-mid dark:text-neutral-300 font-light leading-relaxed">
              {selectedServiceModal.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-white">
                What&apos;s Included in Shata Guarantee
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedServiceModal.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-xs text-ink dark:text-neutral-200">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-white">
                Popular Upgrades &amp; Add-ons
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedServiceModal.popularAddons.map((addon, i) => (
                  <span key={i} className="text-[11px] font-mono px-3 py-1 rounded-full bg-gold/15 text-gold-dark dark:text-gold border border-gold/30">
                    + {addon}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-ink-soft dark:text-neutral-400 block">
                  Starting Price Tier
                </span>
                <span className="font-mono text-lg font-bold text-ink dark:text-white">
                  {selectedServiceModal.startingPrice}
                </span>
              </div>

              <button
                onClick={() => {
                  handleToggleService(selectedServiceModal);
                  setSelectedServiceModal(null);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-gold text-white font-mono text-xs uppercase font-bold shadow-glow-accent hover:scale-105 transition-all"
              >
                {isServiceAdded(selectedServiceModal.id) ? 'Remove Service' : 'Add to My Event Estimate'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

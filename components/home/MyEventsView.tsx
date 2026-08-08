'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';
import { Badge } from '@/components/ui/Badge';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Download, 
  FileText, 
  Sparkles, 
  Camera, 
  Utensils, 
  Phone, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export function MyEventsPageContent() {
  const { state } = useBooking();
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const grandTotal = state.services.reduce((acc, curr) => acc + curr.estimatedCost, 0);
  const taxEst = grandTotal * 0.18;
  const totalAmount = grandTotal + taxEst;
  const advancePaid = totalAmount * 0.20;

  const milestones = [
    { title: 'Event Scope & Date Lock', status: 'Completed', date: '01 Aug 2026' },
    { title: 'Verified Partner Assignment', status: 'Active (2/3 Confirmed)', date: 'In Progress' },
    { title: '20% Escrow Advance Lock', status: 'Secured', date: '₹' + Math.round(advancePaid).toLocaleString('en-IN') },
    { title: 'Run-of-Show & Final Timeline', status: 'Pending', date: 'T-3 Days' },
  ];

  const handleDownloadInvoice = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Top Banner with Event Status */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1F140C] via-[#2A1B10] to-[#120B06] text-white border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="accent">Event Reference #{state.activeEventId}</Badge>
            <span className="text-xs font-mono text-emerald-400">● Live Planning Mode</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold">
            {state.eventType}
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-300">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-accent" /> {state.city}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-accent" /> {state.eventDate}
            </span>
            <span>{state.guestCount} Guests</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center min-w-[180px]">
          <div className="font-heading text-4xl font-bold text-accent">14</div>
          <div className="text-[10px] font-mono uppercase text-neutral-400">Days to Grand Day</div>
          <div className="text-[9px] font-mono text-emerald-400 mt-1">Timeline on track</div>
        </div>
      </div>

      {/* Progress Bar & Milestones */}
      <div className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="font-heading text-xl font-bold text-ink dark:text-white">
            Planning &amp; Execution Milestones
          </h3>
          <span className="text-xs font-mono font-bold text-accent">
            50% Completed
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-black/10 dark:bg-white/10 h-3 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-accent to-gold h-full w-1/2 rounded-full" />
        </div>

        {/* Milestone Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((ms, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl border text-xs space-y-1 ${
                index < 2
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-ink dark:text-white'
                  : 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-ink-soft dark:text-neutral-400'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] font-bold text-accent">Step 0{index + 1}</span>
                {index === 0 && <CheckCircle2 size={14} className="text-emerald-500" />}
              </div>
              <div className="font-bold">{ms.title}</div>
              <div className="text-[11px] opacity-80">{ms.status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Booked Services & Formal Invoice */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Services List */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-heading text-xl font-bold text-ink dark:text-white">
            Selected Services &amp; Verified Assignments
          </h3>

          <div className="space-y-3">
            {state.services.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-3xl glass-panel border border-black/5 dark:border-white/10 flex items-center justify-between interactive-card"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-ink dark:text-white">
                      {item.name}
                    </span>
                    <Badge variant="gold">{item.tier}</Badge>
                  </div>
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Assigned Partner: Shata Elite Verified
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="font-bold text-sm text-ink dark:text-white">
                    ₹{item.estimatedCost.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-ink-soft dark:text-neutral-400">
                    Escrow Guaranteed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Formal Invoice Box */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-black/10 dark:border-white/15 shadow-2xl space-y-6">
          <div className="flex justify-between items-start pb-4 border-b border-black/5 dark:border-white/10">
            <div>
              <span className="font-mono text-[9px] uppercase font-bold text-accent tracking-wider">
                Official Shata Invoice
              </span>
              <h3 className="font-heading text-xl font-bold text-ink dark:text-white">
                Payment Summary
              </h3>
              <div className="text-[11px] font-mono text-ink-soft dark:text-neutral-400">
                Billing Entity: SHATA EVENTS PVT LTD
              </div>
            </div>

            <Badge variant="verified">GST Verified</Badge>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-ink-soft dark:text-neutral-400">Services Subtotal:</span>
              <span className="font-bold">₹{grandTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-soft dark:text-neutral-400">Integrated GST (18%):</span>
              <span className="font-bold">₹{Math.round(taxEst).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-accent font-bold pt-2 border-t border-black/5 dark:border-white/10 text-sm">
              <span>Total Contract Value:</span>
              <span>₹{Math.round(totalAmount).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold pt-1">
              <span>Advance Locked in Escrow:</span>
              <span>₹{Math.round(advancePaid).toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={handleDownloadInvoice}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-accent to-gold text-white font-mono text-xs uppercase font-bold shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Download size={14} />
              <span>{downloadSuccess ? '✓ Tax Invoice Downloaded!' : 'Download Tax Invoice PDF'}</span>
            </button>

            <Link
              href="/concierge"
              className="w-full py-2.5 rounded-2xl bg-black/5 dark:bg-white/10 text-ink dark:text-white font-mono text-xs font-semibold text-center block hover:bg-black/10 transition-colors"
            >
              Ask AI Concierge for Timeline Advice →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

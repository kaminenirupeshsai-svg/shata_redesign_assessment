'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { INITIAL_LEADS, PARTNER_ANALYTICS, PartnerLead } from '@/data/partnerMetrics';
import { Badge } from '@/components/ui/Badge';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Calendar, 
  Plus, 
  Send, 
  DollarSign, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  FileText,
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';

export function PartnerDashboardView() {
  const [leads, setLeads] = useState<PartnerLead[]>(INITIAL_LEADS);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'quoteBuilder' | 'payouts'>('pipeline');
  const [filterCity, setFilterCity] = useState<string>('all');

  // Proposal Builder State
  const [quoteClient, setQuoteClient] = useState('Dr. Aarav & Meera Sen');
  const [quoteAmount, setQuoteAmount] = useState('480000');
  const [quoteItems, setQuoteItems] = useState([
    'Sony FX3 4K Cinematic Highlight Teaser (5-min)',
    'Full Traditional Video (60-min Master)',
    '2 Candid + 2 Traditional Shooters across 3 Days',
    'Handcrafted Italian Leather Bound Velvet Album (40 Pages)',
  ]);
  const [newItemText, setNewItemText] = useState('');
  const [proposalGenerated, setProposalGenerated] = useState(false);

  const updateLeadStatus = (leadId: string, newStatus: PartnerLead['status']) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };

  const handleAddQuoteItem = () => {
    if (!newItemText.trim()) return;
    setQuoteItems([...quoteItems, newItemText]);
    setNewItemText('');
  };

  const handleRemoveQuoteItem = (index: number) => {
    setQuoteItems(quoteItems.filter((_, i) => i !== index));
  };

  const handleGenerateProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalGenerated(true);
    setTimeout(() => setProposalGenerated(false), 4000);
  };

  const columns: PartnerLead['status'][] = [
    'New Inquiry',
    'Proposal Sent',
    'Confirmed Booking',
    'Completed',
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Banner with Partner Identity */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1A120B] via-[#24170E] to-[#120B06] text-white border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center font-mono text-xl font-bold text-white shadow-glow-accent">
            PA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="gold">Shata Elite Partner</Badge>
              <span className="text-xs font-mono text-emerald-400">● Live on Marketplace</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              Pixels by Arjun Studio (Hyderabad Hub)
            </h1>
            <p className="text-xs text-neutral-300 font-light font-mono">
              Partner ID: SHATA-HYD-8041 • Active in Hyderabad, Vizag &amp; Bengaluru
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/partner"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase transition-all"
          >
            Public Listing
          </Link>
          <button
            onClick={() => setActiveTab('quoteBuilder')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-gold text-white font-mono text-xs font-bold uppercase tracking-wider shadow-glow-accent hover:scale-105 transition-all"
          >
            + Create Client Quote
          </button>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-1">
          <div className="text-[10px] font-mono uppercase text-ink-soft dark:text-neutral-400 font-bold flex items-center justify-between">
            <span>Total Gross Revenue</span>
            <DollarSign size={14} className="text-accent" />
          </div>
          <div className="font-heading text-2xl sm:text-3xl font-bold text-ink dark:text-white">
            {PARTNER_ANALYTICS.totalRevenue}
          </div>
          <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
            {PARTNER_ANALYTICS.revenueGrowth}
          </div>
        </div>

        <div className="p-5 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-1">
          <div className="text-[10px] font-mono uppercase text-ink-soft dark:text-neutral-400 font-bold flex items-center justify-between">
            <span>Active Client Inquiries</span>
            <Users size={14} className="text-gold" />
          </div>
          <div className="font-heading text-2xl sm:text-3xl font-bold text-ink dark:text-white">
            {PARTNER_ANALYTICS.activeInquiries} Leads
          </div>
          <div className="text-[11px] font-mono text-ink-soft dark:text-neutral-400">
            Avg. reply time: 14 mins
          </div>
        </div>

        <div className="p-5 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-1">
          <div className="text-[10px] font-mono uppercase text-ink-soft dark:text-neutral-400 font-bold flex items-center justify-between">
            <span>Conversion Rate</span>
            <TrendingUp size={14} className="text-emerald-500" />
          </div>
          <div className="font-heading text-2xl sm:text-3xl font-bold text-accent">
            {PARTNER_ANALYTICS.conversionRate}
          </div>
          <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
            +8.2% above city average
          </div>
        </div>

        <div className="p-5 rounded-3xl glass-panel border border-black/5 dark:border-white/10 space-y-1">
          <div className="text-[10px] font-mono uppercase text-ink-soft dark:text-neutral-400 font-bold flex items-center justify-between">
            <span>Next Escrow Payout</span>
            <Clock size={14} className="text-purple-500" />
          </div>
          <div className="font-heading text-2xl sm:text-3xl font-bold text-ink dark:text-white">
            {PARTNER_ANALYTICS.payoutPending}
          </div>
          <div className="text-[11px] font-mono text-purple-600 dark:text-purple-400">
            Direct NEFT on Friday
          </div>
        </div>
      </div>

      {/* Tabs Switcher: Pipeline vs Proposal Builder */}
      <div className="flex items-center gap-3 border-b border-black/10 dark:border-white/10 pb-4">
        <button
          onClick={() => setActiveTab('pipeline')}
          className={`px-5 py-2.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === 'pipeline'
              ? 'bg-ink dark:bg-white text-white dark:text-ink shadow-sm'
              : 'bg-black/5 dark:bg-white/5 text-ink-mid dark:text-neutral-300'
          }`}
        >
          Kanban Lead Pipeline ({leads.length})
        </button>

        <button
          onClick={() => setActiveTab('quoteBuilder')}
          className={`px-5 py-2.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === 'quoteBuilder'
              ? 'bg-ink dark:bg-white text-white dark:text-ink shadow-sm'
              : 'bg-black/5 dark:bg-white/5 text-ink-mid dark:text-neutral-300'
          }`}
        >
          Dynamic Quote Generator
        </button>
      </div>

      {/* TAB 1: KANBAN LEAD PIPELINE */}
      {activeTab === 'pipeline' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="font-heading text-xl font-bold text-ink dark:text-white">
              Lead Stage Management
            </h2>
            <div className="text-xs font-mono text-ink-soft dark:text-neutral-400">
              💡 Click status badges on cards to advance clients through your pipeline.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {columns.map((col) => {
              const colLeads = leads.filter((l) => l.status === col);
              return (
                <div
                  key={col}
                  className="rounded-3xl p-4 glass-panel border border-black/10 dark:border-white/10 space-y-4 min-h-[450px]"
                >
                  <div className="flex justify-between items-center pb-2 border-b border-black/5 dark:border-white/10">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-white">
                      {col}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent font-mono text-xs font-bold flex items-center justify-center">
                      {colLeads.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {colLeads.length === 0 ? (
                      <div className="text-center py-8 text-xs font-mono text-ink-soft dark:text-neutral-500">
                        No clients in this stage.
                      </div>
                    ) : (
                      colLeads.map((lead) => (
                        <div
                          key={lead.id}
                          className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-3 shadow-sm hover:border-accent transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold text-xs text-ink dark:text-white">
                                {lead.clientName}
                              </div>
                              <div className="text-[10px] font-mono text-ink-soft dark:text-neutral-400">
                                {lead.eventType} • {lead.guestCount} Guests
                              </div>
                            </div>
                            <span className="font-mono text-xs font-bold text-accent">
                              {lead.budgetEstimate}
                            </span>
                          </div>

                          <div className="space-y-1 text-[11px] text-ink-mid dark:text-neutral-300 font-light">
                            <div className="flex items-center gap-1.5">
                              <MapPin size={11} className="text-accent" />
                              <span>{lead.city} ({lead.eventDate})</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Phone size={11} className="text-emerald-500" />
                              <span>{lead.phone}</span>
                            </div>
                          </div>

                          {/* Quick Advance Status Dropdown */}
                          <div className="pt-2 border-t border-black/5 dark:border-white/10 flex justify-between items-center">
                            <span className="text-[9px] font-mono uppercase text-ink-soft dark:text-neutral-400">
                              Move Stage:
                            </span>
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                updateLeadStatus(lead.id, e.target.value as PartnerLead['status'])
                              }
                              className="text-[10px] font-mono font-bold bg-white dark:bg-neutral-800 text-ink dark:text-white p-1 rounded-lg border border-black/10 dark:border-white/10 focus:outline-accent cursor-pointer"
                            >
                              {columns.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: DYNAMIC PROPOSAL BUILDER */}
      {activeTab === 'quoteBuilder' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Builder Form */}
          <form
            onSubmit={handleGenerateProposal}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl glass-panel border border-black/10 dark:border-white/15 space-y-6"
          >
            <div className="space-y-1">
              <Badge variant="accent">Shata Quotation Engine</Badge>
              <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">
                Build Client Proposal
              </h2>
              <p className="text-xs text-ink-soft dark:text-neutral-400 font-light">
                Generate a branded proposal link that clients can approve and pay directly with 20% advance held in escrow.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                  Client Name / Event Title
                </label>
                <input
                  type="text"
                  value={quoteClient}
                  onChange={(e) => setQuoteClient(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider mb-1">
                  Total Package Price (₹)
                </label>
                <input
                  type="number"
                  value={quoteAmount}
                  onChange={(e) => setQuoteAmount(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-ink dark:text-white focus:outline-accent"
                />
              </div>

              {/* Inclusions List */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase font-bold text-ink-soft dark:text-neutral-400 tracking-wider">
                  Deliverables &amp; Inclusions
                </label>
                <div className="space-y-1.5">
                  {quoteItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-xs text-ink dark:text-neutral-200"
                    >
                      <span>✓ {item}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveQuoteItem(idx)}
                        className="text-red-500 hover:text-red-600 text-xs px-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Add deliverable (e.g. Drone Aerial Shoot)..."
                    className="flex-1 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs text-ink dark:text-white focus:outline-accent"
                  />
                  <button
                    type="button"
                    onClick={handleAddQuoteItem}
                    className="px-4 py-2.5 rounded-xl bg-black/10 dark:bg-white/10 font-mono text-xs font-bold text-ink dark:text-white hover:bg-accent hover:text-white transition-all"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>

            {proposalGenerated ? (
              <div className="p-4 rounded-2xl bg-emerald-600 text-white font-mono text-xs text-center font-bold animate-in fade-in">
                🚀 Proposal Generated! Link sent to client WhatsApp: https://theshata.com/proposal/SHATA-8041
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-accent to-gold text-white font-mono text-xs uppercase font-bold rounded-2xl shadow-glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Publish Branded Proposal &amp; Send WhatsApp Alert
              </button>
            )}
          </form>

          {/* Live Preview Paper */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/15 shadow-2xl text-ink dark:text-white space-y-6">
            <div className="flex justify-between items-start pb-4 border-b border-black/10 dark:border-white/10">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-accent tracking-wider">
                  Official Shata Partner Quotation
                </span>
                <h3 className="font-heading text-xl font-bold">
                  {quoteClient}
                </h3>
                <div className="text-[11px] font-mono text-ink-soft dark:text-neutral-400">
                  Issued by: Pixels by Arjun • Verified ID: SH-8041
                </div>
              </div>

              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-mono font-bold text-xs shadow-glow-accent">
                SH
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase font-bold tracking-wider text-ink dark:text-neutral-300">
                Itemized Services &amp; Milestones
              </h4>
              <ul className="space-y-2 text-xs">
                {quoteItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-ink-mid dark:text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span>Quoted Amount:</span>
                <span className="font-bold">₹{Number(quoteAmount).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-accent font-bold">
                <span>20% Advance to Lock:</span>
                <span>₹{(Number(quoteAmount) * 0.2).toLocaleString('en-IN')}</span>
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 pt-1">
                ✓ 100% Escrow Protected by Shata Guarantee
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

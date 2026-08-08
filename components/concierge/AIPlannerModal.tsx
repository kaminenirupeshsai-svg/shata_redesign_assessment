'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';
import { Badge } from '@/components/ui/Badge';
import { 
  Bot, 
  Sparkles, 
  Send, 
  User, 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Lightbulb,
  Clock,
  PieChart
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  itinerary?: {
    day: string;
    events: string[];
  }[];
  budgetSplit?: {
    category: string;
    percentage: number;
    amount: string;
  }[];
  recommendedVendors?: string[];
}

export function AIPlannerModal() {
  const { state, setCity, setGuestCount, addService } = useBooking();
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: `Namaste! I am your Shata AI Event Concierge. Tell me your celebration vision (e.g. "We want a 3-Day royal wedding in Hyderabad for 600 guests with ₹20 Lakh budget" or "Corporate tech summit in Bengaluru"), and I will craft your customized itinerary, budget allocation, and verified vendor pairings.`,
    },
  ]);

  const presetQueries = [
    '3-Day Royal Wedding in Hyderabad for 600 Guests @ ₹20L',
    'Scenic Beach Sangeet in Vizag for 400 Guests @ ₹12L',
    'Tech Leadership Summit in Bengaluru for 1,000 Attendees',
    'Intimate Destination Vows in Goa with Sunset Photography',
  ];

  const handleSend = (queryToSend?: string) => {
    const query = queryToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    setTimeout(() => {
      let aiResponse: ChatMessage;

      if (query.toLowerCase().includes('vizag') || query.toLowerCase().includes('beach')) {
        aiResponse = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: `Here is your tailor-made Beach Celebration Blueprint in Visakhapatnam overlooking the Bay of Bengal!`,
          itinerary: [
            {
              day: 'Day 1: Ocean Sunset Mehendi & Henna Lounge',
              events: ['4:00 PM: Coastal Breeze Mehendi Setup by Fatima Henna Squad', '6:30 PM: Fresh Coconut Water & Live Seafood / Chaat Stations', '8:00 PM: Acoustic Beachside Sufi Performance'],
            },
            {
              day: 'Day 2: Grand Sangeet & Cocktail Beats',
              events: ['7:00 PM: 3D Projection Mapping on Sand Dunes by Bloom Luxe', '8:30 PM: DJ Dance Floor Open till Midnight with Pyro Cold Sparks'],
            },
            {
              day: 'Day 3: Sacred Muhurtham & Feast',
              events: ['9:30 AM: Traditional Nadaswaram & Coastal Mandap Vows', '12:30 PM: Royal Andhra Mahabhoj on Banana Leaf with 32 delicacies'],
            },
          ],
          budgetSplit: [
            { category: 'Catering (3 Days)', percentage: 38, amount: '₹4,56,000' },
            { category: 'Décor & Coastal Mandap', percentage: 28, amount: '₹3,36,000' },
            { category: 'Cinematography & Drone', percentage: 16, amount: '₹1,92,000' },
            { category: 'Sound, DJ & Emcee', percentage: 10, amount: '₹1,20,000' },
            { category: 'Full Logistics Planning', percentage: 8, amount: '₹96,000' },
          ],
          recommendedVendors: ['The Grand Oceanfront Lawns (Vizag)', 'Pixels by Arjun (Hyderabad / Vizag)', 'Royal Feast Catering'],
        };
      } else {
        aiResponse = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: `I have architected a regal celebration plan tailored for ${state.city} for ${state.guestCount} guests with maximum budget efficiency.`,
          itinerary: [
            {
              day: 'Pre-Event: Haldi & Mehendi Vibrancy',
              events: ['Yellow Marigold Floral Canopy by Bloom Luxe', 'Live Dhol & Rajasthani Folk Singers', 'Organic Henna application for 100+ guests'],
            },
            {
              day: 'Main Celebration: Muhurtham & Royal Reception',
              events: ['4K Multi-cam drone coverage by Pixels by Arjun', 'Live Awadhi & South Indian gourmet live counters by Royal Feast Co.', 'Grand entry tunnel with 10,000 fairy lights'],
            },
          ],
          budgetSplit: [
            { category: 'Gourmet Catering & Live Counters', percentage: 40, amount: '₹8,00,000' },
            { category: 'Luxe Floral Décor & Stage Design', percentage: 25, amount: '₹5,00,000' },
            { category: 'Candid Photography & 4K Teaser', percentage: 15, amount: '₹3,00,000' },
            { category: 'Live Band, Sound & Emcee', percentage: 10, amount: '₹2,00,000' },
            { category: 'Full Event Direction & Contingency', percentage: 10, amount: '₹2,00,000' },
          ],
          recommendedVendors: ['Pixels by Arjun', 'Royal Feast Hospitality', 'Bloom Luxe Floral Architecture', 'Sufi & Bollywood Beats Live'],
        };
      }

      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2">
          <Badge variant="accent">
            <Sparkles size={12} /> Powered by Shata Intelligence
          </Badge>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
          AI Event{' '}
          <span className="italic font-normal gold-gradient-text">
            Concierge
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-ink-mid dark:text-neutral-400 font-light">
          Get tailor-made itineraries, exact percentage budget breakdowns, and verified vendor pairings in seconds.
        </p>
      </div>

      {/* Preset Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {presetQueries.map((pq, i) => (
          <button
            key={i}
            onClick={() => handleSend(pq)}
            className="px-3.5 py-1.5 rounded-full glass-panel border border-black/5 dark:border-white/10 text-xs font-mono text-ink-mid dark:text-neutral-300 hover:border-accent hover:text-accent whitespace-nowrap transition-all flex items-center gap-1.5"
          >
            <Lightbulb size={12} className="text-accent" />
            <span>{pq}</span>
          </button>
        ))}
      </div>

      {/* Main Chat Container */}
      <div className="rounded-3xl glass-panel border border-black/10 dark:border-white/15 shadow-2xl p-4 sm:p-6 flex flex-col h-[650px] justify-between">
        {/* Messages List */}
        <div className="overflow-y-auto space-y-6 pr-2">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-accent to-gold text-white flex items-center justify-center flex-shrink-0 shadow-glow-accent">
                  <Bot size={18} />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 space-y-4 ${
                  m.sender === 'user'
                    ? 'bg-ink text-white dark:bg-accent font-medium text-xs sm:text-sm rounded-tr-none'
                    : 'bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-ink dark:text-neutral-200 text-xs sm:text-sm rounded-tl-none font-light leading-relaxed'
                }`}
              >
                <p>{m.text}</p>

                {/* Day-by-Day Itinerary Block */}
                {m.itinerary && (
                  <div className="space-y-3 pt-2 border-t border-black/10 dark:border-white/10">
                    <h4 className="font-mono text-xs uppercase font-bold text-accent tracking-wider flex items-center gap-1.5">
                      <Clock size={14} /> Curated Multi-Day Itinerary
                    </h4>
                    <div className="space-y-2">
                      {m.itinerary.map((d, di) => (
                        <div key={di} className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-1">
                          <div className="font-bold text-xs text-ink dark:text-white">
                            {d.day}
                          </div>
                          <ul className="space-y-1 text-[11px] text-ink-soft dark:text-neutral-400">
                            {d.events.map((ev, ei) => (
                              <li key={ei} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span>{ev}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Budget Percentage Allocation Table */}
                {m.budgetSplit && (
                  <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                    <h4 className="font-mono text-xs uppercase font-bold text-gold tracking-wider flex items-center gap-1.5">
                      <PieChart size={14} /> Recommended Budget Optimization
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      {m.budgetSplit.map((b, bi) => (
                        <div key={bi} className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 flex justify-between items-center">
                          <span className="truncate pr-2">{b.category}</span>
                          <span className="font-bold text-accent whitespace-nowrap">{b.amount} ({b.percentage}%)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommended Verified Vendors */}
                {m.recommendedVendors && (
                  <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                    <h4 className="font-mono text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 size={14} /> Matched Shata Elite Partners
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {m.recommendedVendors.map((rv, rvi) => (
                        <Link
                          key={rvi}
                          href="/vendors"
                          className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold hover:scale-105 transition-transform"
                        >
                          ✓ {rv} →
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {m.sender === 'user' && (
                <div className="w-9 h-9 rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-ink dark:text-white">
                  <User size={16} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-xs font-mono text-ink-soft dark:text-neutral-400 animate-pulse">
              <div className="w-9 h-9 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                <Bot size={18} />
              </div>
              <span>Shata AI is calculating vendor rates &amp; itinerary schedules...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Type your celebration vision (e.g. 500 guests in Hyderabad with 4K photo & biryani catering)..."
            className="flex-1 p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs sm:text-sm text-ink dark:text-white focus:outline-accent"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || loading}
            className="p-3.5 rounded-2xl bg-accent text-white hover:bg-accent-hover disabled:opacity-40 transition-all shadow-glow-accent flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

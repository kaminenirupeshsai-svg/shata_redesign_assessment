'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { RatingStars } from '@/components/ui/RatingStars';
import { Quote, Sparkles, MapPin } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="font-mono text-xs uppercase font-bold text-accent tracking-[2px]">
              Customer Stories
            </span>
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
            Loved by couples, families &amp;{' '}
            <span className="italic font-normal gold-gradient-text">
              corporates
            </span>
          </h2>
          <p className="text-sm sm:text-base text-ink-mid dark:text-neutral-400 font-light">
            Real stories from people who orchestrated their dream occasions with zero stress on Shata.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-6 sm:p-8 glass-panel border border-black/5 dark:border-white/10 flex flex-col justify-between interactive-card space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <RatingStars rating={t.rating} />
                  <Quote size={24} className="text-accent/30" />
                </div>

                <p className="text-xs sm:text-sm text-ink dark:text-neutral-200 font-light italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-accent"
                />
                <div className="space-y-0.5 text-left">
                  <div className="font-bold text-xs text-ink dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-[10px] text-ink-soft dark:text-neutral-400 font-mono">
                    {t.role}
                  </div>
                  <div className="text-[9px] text-accent font-mono flex items-center gap-1">
                    <MapPin size={10} /> {t.city} • {t.eventType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

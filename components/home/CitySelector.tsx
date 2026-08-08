'use client';

import React from 'react';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { useBooking } from '@/context/BookingContext';
import { MapPin, ArrowRight } from 'lucide-react';

export function CitySelector() {
  const { setCity } = useBooking();

  return (
    <section className="py-24 bg-surface/50 dark:bg-surface-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent" />
              <span className="font-mono text-xs uppercase font-bold text-accent tracking-[2px]">
                Pan-India Footprint
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
              Celebrations in{' '}
              <span className="italic font-normal gold-gradient-text">
                76+ Cities
              </span>
            </h2>
            <p className="text-sm text-ink-mid dark:text-neutral-400 font-light max-w-xl">
              Whether you are planning a beach wedding in Vizag, a royal palace gala in Hyderabad, or a tech summit in Bengaluru — Shata delivers local mastery.
            </p>
          </div>

          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
          >
            <span>View All Regional Hubs</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CITIES.map((city) => (
            <div
              key={city.id}
              onClick={() => setCity(city.name)}
              className="group rounded-3xl overflow-hidden glass-panel border border-black/5 dark:border-white/10 relative h-72 cursor-pointer interactive-card"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute top-4 left-4">
                {city.isPopular && (
                  <span className="px-2.5 py-1 rounded-full bg-accent text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-sm">
                    Trending City
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-accent font-mono font-bold">
                  <MapPin size={12} />
                  <span>{city.state}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {city.name}
                </h3>
                <p className="text-[11px] text-neutral-300 font-light line-clamp-1">
                  {city.tagline}
                </p>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>{city.vendorCount}+ Partners</span>
                  <span>{city.venueCount}+ Venues</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

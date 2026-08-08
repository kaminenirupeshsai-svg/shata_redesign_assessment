'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useBooking } from '@/context/BookingContext';
import { 
  Sparkles, 
  Search, 
  Menu, 
  X, 
  Briefcase, 
  Calendar, 
  Calculator, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { CITIES } from '@/data/cities';

export function Navbar() {
  const pathname = usePathname();
  const { state, setCity } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Vendors', href: '/vendors' },
    { name: 'Budget Studio', href: '/estimator', highlight: true },
    { name: 'AI Concierge', href: '/concierge' },
    { name: 'Partner Portal', href: '/partner' },
    { name: 'My Events', href: '/my-events', count: state.services.length },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 glass-nav shadow-luxury dark:shadow-luxury-dark'
            : 'py-4 bg-surface/70 dark:bg-surface-dark/70 backdrop-blur-md border-b border-black/5 dark:border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & City Selector */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center gap-2.5 group no-underline">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center font-mono text-sm font-bold text-white shadow-glow-accent group-hover:scale-105 transition-transform">
                SH
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-ink dark:text-white flex items-center gap-1.5">
                  Shata
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-accent/15 text-accent font-semibold tracking-wider">
                    2.0
                  </span>
                </span>
                <span className="hidden sm:block text-[9px] font-mono tracking-wider uppercase text-ink-soft dark:text-neutral-400">
                  India&apos;s #1 Event Ecosystem
                </span>
              </div>
            </Link>

            {/* Quick City Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-mono text-ink-mid dark:text-neutral-300 hover:text-accent bg-black/5 dark:bg-white/10 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 transition-colors"
                aria-expanded={cityDropdownOpen}
              >
                <MapPin size={12} className="text-accent" />
                <span>{state.city}</span>
                <ChevronDown size={12} className={`transition-transform ${cityDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {cityDropdownOpen && (
                <div 
                  className="absolute top-full mt-2 left-0 w-64 p-2 rounded-2xl glass-panel shadow-2xl z-50 border border-black/10 dark:border-white/15 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setCityDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-ink-soft dark:text-neutral-400 font-bold tracking-wider">
                    Select Your Event City
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-1 mt-1 pr-1">
                    {CITIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setCity(c.name);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all text-left ${
                          state.city === c.name
                            ? 'bg-accent text-white font-bold'
                            : 'hover:bg-black/5 dark:hover:bg-white/10 text-ink dark:text-neutral-200'
                        }`}
                      >
                        <div>
                          <div className="font-medium">{c.name}</div>
                          <div className={`text-[10px] ${state.city === c.name ? 'text-white/80' : 'text-ink-soft dark:text-neutral-400'}`}>
                            {c.vendorCount} verified partners
                          </div>
                        </div>
                        {c.isPopular && state.city !== c.name && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 font-mono">
                            Hot
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs font-mono tracking-wider uppercase transition-all rounded-lg ${
                    isActive
                      ? 'text-accent font-bold bg-accent/10 dark:bg-accent/20'
                      : 'text-ink-mid dark:text-neutral-300 hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 font-medium'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    )}
                    {link.count !== undefined && link.count > 0 && (
                      <span className="w-4 h-4 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                        {link.count}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <Link
              href="/partner"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-mid dark:text-neutral-200 border border-black/10 dark:border-white/15 hover:border-accent hover:text-accent px-3.5 py-2 rounded-xl transition-all"
            >
              <Briefcase size={14} className="text-accent" />
              <span>For Vendors</span>
            </Link>

            <Link
              href="/estimator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-hover text-white text-xs font-mono font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-xl shadow-glow-accent hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <Sparkles size={14} />
              <span className="hidden sm:inline">Get Instant</span> Quote
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-ink dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden animate-in fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="absolute top-20 right-4 left-4 p-6 rounded-3xl glass-panel shadow-2xl border border-black/10 dark:border-white/15 space-y-4 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span className="text-xs font-mono font-bold text-ink dark:text-white">
                  Active City: {state.city}
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                100% Verified
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 text-ink dark:text-white font-mono text-sm font-semibold hover:bg-accent hover:text-white transition-all"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/partner/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-gold/15 text-gold-dark dark:text-gold font-mono text-xs font-bold uppercase tracking-wider"
              >
                <Briefcase size={16} />
                Launch Shata Partner OS
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'gold' | 'verified' | 'neutral' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'accent',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold rounded-full border';
  
  const sizeClasses = {
    sm: 'text-[9px] px-2.5 py-0.5',
    md: 'text-[11px] px-3.5 py-1',
  }[size];

  const variantClasses = {
    accent: 'bg-accent/10 border-accent/30 text-accent dark:bg-accent/20 dark:border-accent/40',
    gold: 'bg-gold/10 border-gold/30 text-gold-dark dark:text-gold dark:bg-gold/20 dark:border-gold/40',
    verified: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/20',
    neutral: 'bg-black/5 border-black/10 text-ink-mid dark:bg-white/10 dark:border-white/15 dark:text-neutral-300',
    success: 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400',
  }[variant];

  return (
    <span className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
}

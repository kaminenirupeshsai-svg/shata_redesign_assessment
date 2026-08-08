'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-neutral-800/80 backdrop-blur-md text-ink dark:text-neutral-200 hover:border-accent/40 hover:scale-105 active:scale-95 transition-all shadow-sm ${className}`}
    >
      {theme === 'light' ? (
        <Moon size={16} className="text-neutral-700 hover:text-accent transition-colors" />
      ) : (
        <Sun size={16} className="text-amber-400 hover:text-amber-300 transition-colors" />
      )}
    </button>
  );
}

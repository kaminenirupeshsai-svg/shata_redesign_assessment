/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#FF6B2C',
          hover: '#E5581E',
          light: '#FFF0EA',
          glow: 'rgba(255, 107, 44, 0.25)',
        },
        gold: {
          DEFAULT: '#C8922A',
          light: '#F8EED8',
          dark: '#96691A',
          glow: 'rgba(200, 146, 42, 0.25)',
        },
        ink: {
          DEFAULT: '#140E0A',
          mid: '#5A4638',
          soft: '#8A7568',
          dim: '#B6A69C',
        },
        surface: {
          DEFAULT: '#FAF8F5',
          card: '#FFFFFF',
          cardDark: '#17110C',
          dark: '#0D0906',
          darkElevated: '#1D1611',
          borderLight: 'rgba(60, 35, 10, 0.08)',
          borderDark: 'rgba(255, 230, 205, 0.10)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 14, 10, 0.07), 0 0 1px 1px rgba(60, 35, 10, 0.05)',
        'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 230, 205, 0.08)',
        'glow-accent': '0 0 30px rgba(255, 107, 44, 0.35)',
        'glow-gold': '0 0 30px rgba(200, 146, 42, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

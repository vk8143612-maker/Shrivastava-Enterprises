import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08080a',
        coal: '#0d0d10',
        charcoal: '#141418',
        panel: '#17171c',
        line: '#26262d',
        steel: {
          DEFAULT: '#8b9099',
          light: '#b6bbc4',
          dark: '#565a63',
        },
        gold: {
          DEFAULT: '#c9a24b',
          soft: '#e2c583',
          deep: '#a07d2c',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        widest2: '0.28em',
      },
      boxShadow: {
        premium: '0 30px 80px -20px rgba(0,0,0,0.65)',
        gold: '0 20px 60px -20px rgba(201,162,75,0.45)',
        inset: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
      },
      backgroundImage: {
        'grid-line':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at center, rgba(201,162,75,0.12), transparent 60%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;

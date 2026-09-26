import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Forest green — "SafariStay" in the logo, hills and acacia canopy
        forest: {
          50: '#f2f6f1',
          100: '#e0eadd',
          200: '#c2d5bc',
          300: '#98b78f',
          400: '#6b9462',
          500: '#4b7643',
          600: '#3f6331',
          700: '#2f4d27',
          800: '#284421',
          900: '#1f3a22',
          950: '#122214',
        },
        // Gold — "Kenya" in the logo, sun, lodge roof, tagline rules
        gold: {
          50: '#fdf9ef',
          100: '#f9f0d6',
          200: '#f3dfa9',
          300: '#e9c77a',
          400: '#d9b25a',
          500: '#c99a3c',
          600: '#b8892f',
          700: '#8f6720',
          800: '#6e4f1d',
          900: '#5a3e18',
        },
        sand: '#faf7f0',
        ink: '#1c1f1a',
        muted: '#62675e',
        line: '#e7e2d6',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '18px',
      },
      boxShadow: {
        card: '0 16px 40px -26px rgba(31,58,34,0.35), 0 2px 6px rgba(31,58,34,0.06)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Zevrian brand tokens
        charcoal: {
          DEFAULT: '#0F0F0F',
          50: '#1A1A1A',
          100: '#0F0F0F',
        },
        gold: {
          DEFAULT: '#C6A43F',
          muted: 'rgba(198,164,63,0.20)',
          hover: '#D4B54D',
        },
        surface: {
          light: '#F5F5F5',
          white: '#FFFFFF',
        },
        // shadcn/ui CSS variable tokens (keep for component compatibility)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        'body': ['1rem', { lineHeight: '1.75' }],
        'sm-heading': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'md-heading': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
        'lg-heading': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
        'xl-heading': ['2.25rem', { lineHeight: '1.25', fontWeight: '700' }],
        '2xl-heading': ['3rem', { lineHeight: '1.15', fontWeight: '800' }],
        '3xl-heading': ['3.75rem', { lineHeight: '1.1', fontWeight: '800' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config

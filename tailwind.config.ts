import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
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
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' },
        },
        slideUpAndFade: {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        first: {
          '0%, 100%': { transform: 'translate(-30px, 20px) scale(1)' },
          '25%': { transform: 'translate(40px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 40px) scale(0.95)' },
          '75%': { transform: 'translate(30px, -20px) scale(1.05)' },
        },
        second: {
          '0%, 100%': { transform: 'translate(20px, -30px) scale(0.9)' },
          '33%': { transform: 'translate(-40px, 30px) scale(1.15)' },
          '66%': { transform: 'translate(35px, -25px) scale(0.95)' },
        },
        third: {
          '0%, 100%': { transform: 'translate(-20px, -20px) scale(1)' },
          '20%': { transform: 'translate(30px, 40px) scale(0.9)' },
          '40%': { transform: 'translate(-35px, -30px) scale(1.1)' },
          '60%': { transform: 'translate(25px, 35px) scale(0.95)' },
          '80%': { transform: 'translate(-30px, -25px) scale(1.05)' },
        },
        fourth: {
          '0%, 100%': { transform: 'translate(25px, 25px) scale(1.1)' },
          '25%': { transform: 'translate(-35px, -35px) scale(0.9)' },
          '50%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '75%': { transform: 'translate(-25px, 35px) scale(0.95)' },
        },
        fifth: {
          '0%, 100%': { transform: 'translate(15px, -15px) scale(0.9)' },
          '25%': { transform: 'translate(-25px, 25px) scale(1.1)' },
          '50%': { transform: 'translate(20px, 30px) scale(0.95)' },
          '75%': { transform: 'translate(-30px, -20px) scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.3s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
        slideUpAndFade: 'slideUpAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        first: 'first 20s infinite ease-in-out',
        second: 'second 25s infinite ease-in-out',
        third: 'third 30s infinite ease-in-out',
        fourth: 'fourth 35s infinite ease-in-out',
        fifth: 'fifth 40s infinite ease-in-out',
        float: 'float 6s infinite ease-in-out',
        floatReverse: 'floatReverse 6s infinite ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
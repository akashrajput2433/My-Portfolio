/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#050816',
        ink: '#0b1120',
        slateGlass: 'rgba(15, 23, 42, 0.72)',
        cardBorder: 'rgba(148, 163, 184, 0.18)',
        brand: {
          50: '#eef9ff',
          100: '#d8f1ff',
          200: '#b3e8ff',
          300: '#73d8ff',
          400: '#2ec4ff',
          500: '#08a9f0',
          600: '#0086c6',
          700: '#036b9f',
          800: '#0a597f',
          900: '#104968',
        },
        accent: {
          300: '#f6c667',
          400: '#efb441',
          500: '#de961d',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(8, 169, 240, 0.18)',
        card: '0 12px 40px rgba(2, 6, 23, 0.24)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

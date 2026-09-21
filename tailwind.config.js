/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBg: '#F7F7F5',
        brandPrimary: '#0A0A0A',
        brandSecondary: '#6B6B6B',
        brandBorder: '#E5E5E5',
        brandAccent: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
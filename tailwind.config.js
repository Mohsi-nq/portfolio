/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBg: '#F7F7F5',
        brandPrimary: '#0A0A0A',
        brandSecondary: '#6B6B6B',
        brandBorder: '#E5E5E5',
        brandAccent: '#4F46E5',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
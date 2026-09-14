/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050B1E',
        surface: '#0F1E42',
        cyanNeon: '#00D2FF',
        techBlue: '#0066FF',
        goldMeta: '#E5B63E',
        warmBronze: '#B38628',
        darkSlate: '#1E293B',
        pureWhite: '#FFFFFF',
        coolGray: '#CBD5E1',
        footerDark: '#030712',
        mutedText: '#64748B',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(0, 210, 255, 0.4)',
        'blue-glow': '0 0 35px -5px rgba(0, 102, 255, 0.35)',
        'gold-glow': '0 0 20px -5px rgba(229, 182, 62, 0.3)',
      },
    },
  },
  plugins: [],
};

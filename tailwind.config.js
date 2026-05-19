/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F2EDE5',
        violet: '#78427F',
        'violet-fonce': '#5A2F61',
        'violet-clair': '#9D6FA3',
        'violet-pale': '#EDE7F6',
        or: '#CDA540',
        'or-fonce': '#B89437',
        'or-clair': '#E0C670',
        'or-pale': '#FFF9E6',
        'gris-fonce': '#333333',
        'gris-moyen': '#666666',
        'gris-clair': '#E5E5E5',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

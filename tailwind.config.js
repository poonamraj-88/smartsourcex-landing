
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sx-dark': '#0D0D0D',
        'sx-darker': '#050505',
        'sx-light': '#E5E7EB',
        'sx-accent': '#2563EB',
        'sx-accent-dark': '#1E40AF',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};

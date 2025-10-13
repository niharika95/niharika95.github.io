/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'sans': ['Mulish', 'sans-serif'],
      },
    },
  },
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
        'sans': ['Mulish', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        gray: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          150: '#d9d9d9',
          200: '#cccccc',
          250: '#bfbfbf',
          300: '#b3b3b3',
          350: '#a6a6a6',
          400: '#999999',
          450: '#8c8c8c',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
        blue: {
          500: '#2662d9',
        },
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */

// Brand palette taken from the logo (rose #CB4B6C). The existing pages were built
// with `sky-*`, `blue-*` and `terracotta-*` classes, so those names are remapped to the
// brand scales here: every page picks up the new identity without rewriting each one.
const rose = {
  50: '#FBF3F5',
  100: '#F6E3E8',
  200: '#EDC6D0',
  300: '#E09DB0',
  400: '#D2708D',
  500: '#C2456A',
  600: '#A93A5B',
  700: '#8E2F4B',
  800: '#6E2539',
  900: '#4A1A27',
  950: '#2E1018',
};

const plum = {
  50: '#F7F2F6',
  100: '#ECE1EA',
  200: '#D8C2D4',
  300: '#BB97B5',
  400: '#9A6D94',
  500: '#7B4F77',
  600: '#643D61',
  700: '#4F2F4D',
  800: '#3B2339',
  900: '#281826',
  950: '#1A0F19',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose,
        plum,
        sky: rose,
        blue: plum,
        terracotta: rose,
        beige: { 50: '#FBF7F5', 100: '#F5EDE8' },
        ink: '#23202A',
        mist: '#FBF6F7',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        'safe-b': 'env(safe-area-inset-bottom)',
        'safe-t': 'env(safe-area-inset-top)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};

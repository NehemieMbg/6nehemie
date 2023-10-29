import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        sixcaps: ['"Six Caps"', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
        khand: ['Khand', 'sans-serif'],
      },
      colors: {
        creme: '#F4F3F1',
        'light-gray': '#858585',
        'dark-gray': '#171717',
      },
      screens: {
        wide: '1440px',
        tight: '1224px',
      },
    },
  },
  plugins: [],
};
export default config;

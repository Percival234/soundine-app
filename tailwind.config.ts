import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: 'rgb(255, 80, 80)',
        'gray-opacity': 'rgb(160, 160, 160, 0.15)',
      },
      animation: {
        bounceIn: 'bounceIn 0.6s ease forwards',
      },
      keyframes: {
        bounceIn: {
          '100%': { transform: 'translate(0%, 0%)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
export default config;

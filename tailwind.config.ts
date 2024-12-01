import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        '3xl': '1920px'
      },
      keyframes: {
        fadeInForwards: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeInForwards: 'fadeInForwards 3s ease forwards'
      }
    }
  },

  plugins: [typography]
} satisfies Config;

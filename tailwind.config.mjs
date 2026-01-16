import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Georgia', 'Garamond', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        accent: {
          blue: '#1e40af',
          yellow: '#eab308',
          gradient: 'linear-gradient(to bottom, #1e40af, #eab308)',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [typography],
};

const defaultTheme = require('tailwindcss/defaultTheme');
const serif = ['kazimirtext', ...defaultTheme.fontFamily.serif];
const sans = ['Inter var', ...defaultTheme.fontFamily.sans];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: 20,
      fontFamily: {
        sans,
        serif
      }
    }
  },
  plugins: []
};
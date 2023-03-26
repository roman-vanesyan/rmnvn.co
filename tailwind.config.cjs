// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

const sans = ['Inter var', ...defaultTheme.fontFamily.sans];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{mdx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: 20,
      fontFamily: {
        sans
      }
    }
  },
  plugins: []
};

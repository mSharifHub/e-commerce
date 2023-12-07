/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: [`Roboto`, `sans-serif`],
      },
    },
  },
  plugins: [require(`tailwind-scrollbar-hide`)],
};

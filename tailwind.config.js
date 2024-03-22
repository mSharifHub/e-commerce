/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: [`Roboto`, `sans-serif`],
      },
      keyframes: {
        expandModalRightToLeft: {
          "0%": { width: "0", opacity: "0", right: 0, top: "1.25rem" },
          "50%": { width: "100%", opacity: "1", right: 0, top: "1.25rem" },
          "100%": { width: "100%", opacity: "1", right: 0, top: "0" },
        },
      },
      animation: {
        expandModalRightToLeft: "expandModalRightToLeft 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require(`tailwind-scrollbar-hide`), require(`@tailwindcss/forms`)],
};

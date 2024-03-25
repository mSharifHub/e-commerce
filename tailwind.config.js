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
          "0%": {
            width: "0",
            right: "0",
            top: "1.25rem",
            opacity: "0",
          },
          "50%": {
            width: "100%",
            right: "0",
            top: "1.25rem",
            opacity: "50%",
          },
          "100%": {
            width: " 100%",
            right: "0",
            top: "0",
            opacity: "100%",
          },
        },
        contractModalLeftToRight: {
          "0%": {
            width: "100%",
            right: "0",
            top: "0",
            opacity: "100%",
          },
          "50%": {
            width: "100%",
            right: "0",
            top: "1.25rem",
            opacity: "50%",
          },
          "100%": {
            width: "0",
            right: "0",
            top: "1.25rem",
            opacity: "0",
          },
        },
        blur_screen: {
          "0%": { filter: "blur(0)", backgroundColor: "rgba(0, 0, 0, 0)" },
          "100%": {
            filter: "blur(2px)",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          },
        },
      },
      animation: {
        expandModalRightToLeft: "expandModalRightToLeft 0.4s ease-out forwards",
        contractModalLeftToRight:
          "contractModalLeftToRight 0.3s ease-out forwards",
        blur_screen: " blur_screen 0.2s ease-out forwards",
      },
    },
  },
  plugins: [require(`tailwind-scrollbar-hide`), require(`@tailwindcss/forms`)],
};

// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42b8cd', // Change the primary color here
        foreground: '#ffff'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};


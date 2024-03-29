/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'",
  ],
  theme: {
    screens: {
      sm: "280px",
      // => @media (min-width: 280px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("tw-elements/dist/plugin"), require("daisyui")],
};

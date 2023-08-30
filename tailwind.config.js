/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      lg: "800px",
    },
    extend: {
      colors: {
        primary: {
          50: "hsl(221,84%,95%)",
          100: "hsl(221,84%,90%)",
          200: "hsl(221,84%,80%)",
          300: "hsl(221,84%,70%)",
          400: "hsl(221,84%,60%)",
          500: "hsl(221,84%,50%)",
          600: "hsl(221,84%,45%)",
          700: "hsl(221,84%,35%)",
        },
        accent: {
          100: "hsl(41,84%,90%)",
          200: "hsl(41,84%,80%)",
          300: "hsl(41,84%,70%)",
          400: "hsl(41,84%,60%)",
          500: "hsl(41,84%,50%)",
          600: "hsl(41,84%,45%)",
          700: "hsl(41,84%,35%)",
        },
        s_green: {
          100: "hsl(133,72%,90%)",
          200: "hsl(133,72%,80%)",
          300: "hsl(133,72%,70%)",
          400: "hsl(133,72%,60%)",
          500: "hsl(133,72%,50%)",
          600: "hsl(133,72%,45%)",
          700: "hsl(133,72%,35%)",
        },
        s_red: {
          100: "hsl(0,72%,90%)",
          200: "hsl(0,72%,80%)",
          300: "hsl(0,72%,70%)",
          400: "hsl(0,72%,60%)",
          500: "hsl(0,72%,50%)",
          600: "hsl(0,72%,45%)",
          700: "hsl(0,72%,35%)",
        },
        s_grey: {
          100: "hsl(0,0%,90%)",
          200: "hsl(0,0%,80%)",
          300: "hsl(0,0%,70%)",
          400: "hsl(0,0%,60%)",
          500: "hsl(0,0%,50%)",
          600: "hsl(0,0%,45%)",
          700: "hsl(0,0%,35%)",
        },
      },
      fontFamily: {
        sans: ["Montserrat"],
        source_sans: ["Source Sans Pro"],
      },
    },
  },
  plugins: [require("daisyui")],
};

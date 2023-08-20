/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce_x: {
          "0%, 100%": {
            transform: "translateX(-5%)",
          },
          "50%": {
            transform: "none",
          },
        },
      },
      animation: {
        bounce_x: "bounce_x 1s infinite",
      },
      boxShadow: {
        "3xl": "0 0 30px 10px rgba(255,255,255,0.3)",
        "black-xl": "0 0 30px 10px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        burtons: "burtons",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

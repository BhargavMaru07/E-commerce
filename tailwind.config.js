/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        underline: {
          "0%": { left: "0", width: "0" },
          "50%": { left: "0", width: "100%" },
          "75%": { left: "100%", width: "0" },
          "100%": { left: "0", width: "100%" },
        },
      },
      animation: {
        underline: "underline 0.5s linear forwards",
      },
    },
  },

  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        BioSan: ["biosan", "sans-serif"],
        HemiHead: ["hemihead", "sans-serif"],
      },
      screens: {
        pv: "280px",
        pvmax: "360px",
        ph: "480px",
        dv: "1440px",
        dvmax: "1700px",
        dh: "5000px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
        fadeIn: "fadeIn 1.5 ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

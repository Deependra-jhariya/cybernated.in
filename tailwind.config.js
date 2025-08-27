/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        zoom: "zoom 12s ease-in-out infinite", // 12s = speed, आप बदल सकते हैं
      },
    },
  },
  plugins: [],
};

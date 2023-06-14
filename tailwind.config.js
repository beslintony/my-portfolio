/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" },
        },
      },
      animation: {
        typing: "typing 2s steps(14) infinite alternate",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

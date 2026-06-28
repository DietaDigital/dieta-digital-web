import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07100d",
        moss: "#1f6b4c",
        fern: "#54d391",
        mint: "#b7f7d2",
        cream: "#f2f5ee"
      },
      boxShadow: {
        glow: "0 0 80px rgba(84, 211, 145, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;

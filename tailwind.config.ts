import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#8B70F5",
          deep: "#39208C",
          electric: "#5B6CFF",
          lavender: "#F0EAFE",
          pink: "#F8D7F4",
          cyan: "#55D9EA",
          ink: "#20202A",
          muted: "#777785",
          amber: "#F58206",
          gold: "#FFB52E",
          obsidian: "#0B0A12",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "'Poppins'", "system-ui", "sans-serif"],
        sans: ["'Manrope'", "'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -15px rgba(57, 32, 140, 0.14)",
        glass: "0 18px 42px -12px rgba(139, 112, 245, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;

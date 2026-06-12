import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zevrian luxury palette
        charcoal: {
          DEFAULT: "#0F0F0F",
          50: "#f5f5f5",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#999999",
          400: "#666666",
          500: "#3d3d3d",
          600: "#2b2b2b",
          700: "#1f1f1f",
          800: "#171717",
          900: "#0F0F0F",
          950: "#0a0a0a",
        },
        gold: {
          DEFAULT: "#C6A43F",
          light: "#D9BC63",
          dark: "#A8862C",
          50: "#faf6ea",
          100: "#f2e8c9",
          200: "#e6d294",
          300: "#d9bc63",
          400: "#C6A43F",
          500: "#a8862c",
          600: "#876a23",
          700: "#684f1c",
          800: "#473615",
          900: "#2a200c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        luxe: "0.2em",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

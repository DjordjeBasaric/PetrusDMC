import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      translate: {
        "0.3": "0.1rem",
        "0.4": "0.1rem",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        burgundy: {
          DEFAULT: "#6B1E2B",
          dark: "#5A1925",
          light: "#7D2433",
        },
        beige: {
          DEFAULT: "#F5F0E8",
          dark: "#EAE4DC",
          muted: "#C4BDB4",
        },
        petrus: {
          bg: "#F5F0E8",
          accent: "#6B1E2B",
        },
      },
    },
  },
  plugins: [],
};
export default config;

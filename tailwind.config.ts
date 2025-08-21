import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;

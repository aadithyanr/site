import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-akkurat)", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Keep the interface monochrome and let typography, spacing, and
        // imagery provide the visual hierarchy.
        neutral: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#d9d9d9",
          300: "#b5b5b5",
          400: "#737373",
          500: "#5d5d5d",
          600: "#4a4a4a",
          700: "#333333",
          800: "#1f1f1f",
          900: "#0d0d0d",
          950: "#000000",
        },
        background: "#ffffff",
        foreground: "#0d0d0d",
        border: "#d9d9d9",
        input: "#d9d9d9",
        ring: "#737373",
        primary: {
          DEFAULT: "#0d0d0d",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#e8e8e8",
          foreground: "#171717",
        },
        muted: {
          DEFAULT: "#e8e8e8",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#e8e8e8",
          foreground: "#171717",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0d0d0d",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "purple-primary": "#7F56D9",
        "purple-secondary": "#D6BBFB",
        "text-primary": "#101828",
        "text-secondary": "#344054",
        "text-tertiary": "#475467",
        "text-purple": "#6941C6",
        "border-primary": "#D0D5DD",
        "border-secondary": "#EAECF0",
        "border-purple": "#9747FF",
        "background-secondary": "#F9FAFB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

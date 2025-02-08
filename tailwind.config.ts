import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000D51",
        secondary: "#2460FD",
        textcolor: "#666E96",
        background: "#F3F3F3",
        
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#2E2E2E",
        special: "#F97316",
      },
      backgroundColor: {
        background: "#f0f1f1",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

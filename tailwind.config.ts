import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2E4FD9", cyan: "#00B8E6" },
        accent: { DEFAULT: "#F7941D", gold: "#FFC107" },
        navy: "#101E38",
        slate: "#485873",
        surface: "#F4F7FB",
        line: "#DDE5F0",
        white: "#FFFFFF",
      },
    },
  },
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B00",
          hover: "#E65A00",
          light: "#FF8A3D",
        },
        navy: {
          DEFAULT: "#0F1B3D",
          light: "#182A59",
          dark: "#080F24",
        },
        orange: {
          DEFAULT: "#FF6B00",
          hover: "#E65A00",
          light: "#FF8A3D",
          accent: "#FFA048",
        },
        accent: {
          DEFAULT: "#FF6B00",
          orange: "#FF6B00",
        },
        surface: "#0F1B3D",
        line: "rgb(255 255 255 / 15%)",
        slate: "#485873",
        white: "#FFFFFF",
      },
    },
  },
} satisfies Config;

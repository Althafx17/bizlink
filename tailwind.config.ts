import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D35400",
          hover: "#B84300",
          light: "#FFA048",
        },
        navy: {
          DEFAULT: "#0F1B3D",
          light: "#182A59",
          dark: "#080F24",
        },
        orange: {
          DEFAULT: "#D35400",
          hover: "#B84300",
          light: "#FFA048",
          accent: "#FF9436",
        },
        accent: {
          DEFAULT: "#D35400",
          orange: "#D35400",
        },
        surface: "#0F1B3D",
        line: "rgb(255 255 255 / 15%)",
        slate: "#485873",
        white: "#FFFFFF",
      },
    },
  },
} satisfies Config;

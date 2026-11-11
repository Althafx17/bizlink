import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0056B3",
          hover: "#004088",
          light: "#0095D9",
        },
        navy: {
          DEFAULT: "#0B2C5F",
          light: "#123D7D",
          dark: "#071E42",
        },
        sky: {
          soft: "#F2F7FD",
          muted: "#E8F1FC",
          cyan: "#0088CE",
          bright: "#00A2E8",
        },
        accent: {
          DEFAULT: "#0056B3",
          cyan: "#0088CE",
        },
        surface: "#FFFFFF",
        line: "rgb(11 44 95 / 12%)",
        slate: "#475D7A",
        white: "#FFFFFF",
      },
    },
  },
} satisfies Config;

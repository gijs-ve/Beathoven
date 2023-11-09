import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        outfit: ["outfit-font", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#F5F5F5",
        black: "#020020",
        "blueish-100": "#B1C5D9",
        "blueish-200": "#A1D1FF",
        "blueish-300": "#89B2D9",
        "blueish-400": "#609FD9",
        "blueish-500": "#42A4FF",
        "blueish-600": "#398BD9",
        "blueish-700": "#44596C",
        "blueish-800": "#57626B",
        "blueish-900": "#2C3136",
      },
    },
  },
  plugins: [],
};
export default config;

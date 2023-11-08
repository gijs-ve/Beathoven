import type { Config } from "tailwindcss";

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
      colors: {
        white: "#F5F5F5",
        black: "#020020",
        "blueish-100": "#77c0ff",
        "blueish-200": "#69b4ff",
        "blueish-300": "#5493e0",
        "blueish-400": "#4480c2",
        "blueish-500": "#3a8bd9",
        "blueish-600": "#3178C6",
        "blueish-700": "#2c67a8",
        "blueish-800": "#2560a1",
        "blueish-900": "#1f4b7a",
      },
    },
  },
  plugins: [],
};
export default config;

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
      screens: {
        xs: { max: "475px" }, // Extra small devices
        sm: { max: "640px" }, // Small devices
        md: { max: "768px" }, // Medium devices
        lg: { max: "1024px" }, // Large devices
        xl: { max: "1280px" }, // Extra large devices
        "2xl": { max: "1536px" }, // 2X large devices
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        first: "#4267B2", //blue
        second: "#898F9C", //grey
      },
    },
    screens: {
      sm: { max: "800px" },
      xs: { max: "400px" },
    },
  },
  plugins: [],
};
export default config;

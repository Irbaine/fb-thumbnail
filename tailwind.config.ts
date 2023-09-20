import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 5px 60px -20px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        dark: "#000000",
        first: "#4267B2", //blue
        second: "#898F9C", //grey
        error: "#ff3333",
        success: "#4BB543",
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

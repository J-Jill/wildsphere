import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: { fontFamily: { vietnam: "var(--font-vietnam)" } },
  },
  plugins: [],
};

export default config;

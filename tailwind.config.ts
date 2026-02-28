import type { Config } from "tailwindcss";

const config: Config = {
  // ... your existing content and plugins paths
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 1. Define the animation name and duration
      animation: {
        "bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-in",
      },
      // 2. Define the actual movement
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
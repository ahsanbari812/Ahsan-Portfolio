import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          bg: "#EDE9E2",
          surface: "#F7F5F1",
          card: "#F7F5F1",
          border: "#E2DDD5",
          muted: "#DDD7CE",
        },
        accent: {
          DEFAULT: "#D97F3D",
          hover: "#C36F30",
          light: "#FDF4EC",
          border: "#F3D2BA",
        },
        dark: {
          DEFAULT: "#1A1A1A",
          muted: "#6B6760",
          subtle: "#9E988F",
          border: "rgba(26, 26, 26, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Fraunces", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "36px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(26, 26, 26, 0.04), 0 2px 6px -1px rgba(26, 26, 26, 0.02)",
        "soft-lg": "0 12px 36px -4px rgba(26, 26, 26, 0.06), 0 4px 12px -2px rgba(26, 26, 26, 0.03)",
        "soft-xl": "0 20px 48px -6px rgba(26, 26, 26, 0.08), 0 8px 16px -4px rgba(26, 26, 26, 0.04)",
        nav: "0 8px 30px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

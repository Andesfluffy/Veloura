import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FDF8F1",
          100: "#F9ECD9",
          200: "#F1E6D1",
          300: "#E6D5B8",
          400: "#D4BC91",
          500: "#C4A67A", // Primary gold
          600: "#AB8B5F",
          700: "#8E7048",
          800: "#6E5636",
          900: "#4A3A24",
        },
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981", // Primary emerald
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
        black: {
          50: "#999999",
          100: "#8A8A8A",
          200: "#666666",
          300: "#444444",
          400: "#333333",
          500: "#222222",
          600: "#1A1A1A",
          700: "#141414",
          800: "#0A0A0A",
          900: "#080808",
          950: "#050505",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.015em' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        '8xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.045em' }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(to right, #C4A67A, #E6D5B8, #C4A67A)",
        "gradient-gold-diagonal": "linear-gradient(45deg, #C4A67A, #E6D5B8)",
        "gradient-emerald": "linear-gradient(to right, #10B981, #059669)",
        "gradient-emerald-diagonal": "linear-gradient(45deg, #047857, #10B981)",
        "gradient-black": "linear-gradient(to bottom, #141414, #080808)",
        "gradient-premium": "linear-gradient(45deg, #022C22, #C4A67A)",
        noise: "url('/textures/noise.png')",
      },
    },
  },
  plugins: [],
};

export default config;

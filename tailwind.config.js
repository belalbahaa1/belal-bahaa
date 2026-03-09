/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        espresso: {
          400: "#5C3D2E",
          500: "#4B2E1E",
          800: "#2B1A10",
          900: "#1A0F09",
        },
        crema: {
          400: "#F0D5A3",
          500: "#E6C280",
          600: "#D4A373",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

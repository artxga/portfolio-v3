/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        hover: 'var(--hover)',
        details: 'var(--details)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'], // importante para tu setup
};

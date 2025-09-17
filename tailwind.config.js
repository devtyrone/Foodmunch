/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",  // Scans your JS files for Tailwind classes
  ],
  darkMode: 'class',  // Enables 'dark' class on <html> for toggling
  theme: {
    extend: {},  // Add custom colors here if needed (e.g., food-themed)
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'docs': {
          'bg': '#001e29',          // Main background
          'bg-alt': '#001a24',      // Secondary background
          'title': '#ffd6a7',       // Titles/Headers
          'text': '#ccb18e',        // Regular text
          'accent': '#002a3a',      // Accent background
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["abyss"],
    darkTheme: "abyss",
  }
}
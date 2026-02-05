/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "grey-teal": {
          "primary": "#5eead4", // Pastel Teal (Teal-300)
          "secondary": "#94a3b8", // Pastel Slate (Slate-400)
          "accent": "#99f6e4", // Teal-200 (Lighter/Softer)
          "neutral": "#525252", // Neutral-600
          "base-100": "#2d2d2d", // Slightly lighter black
          "base-200": "#1f1f1f",
          "base-300": "#141414",
          "info": "#7dd3fc", // Pastel Sky
          "success": "#6ee7b7", // Pastel Emerald
          "warning": "#fcd34d", // Pastel Amber
          "error": "#fca5a5", // Pastel Red
        },
      },
      "dracula",
      "dark",
      "dim"
    ],
  },
}

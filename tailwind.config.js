/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #a200ff 0%, #00ffff 100%)',
      },
      colors: {
        violetGlow: '#a200ff',
        neonBlue: '#00ffff',
        darkBg: '#050505',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cyberviolet: {
          "primary": "#a200ff",
          "secondary": "#00ffff",
          "accent": "#ff00ff",
          "neutral": "#1a1a1a",
          "base-100": "#050505",
          "info": "#7f00ff",
          "success": "#00ffaa",
          "warning": "#ff8800",
          "error": "#ff0066",
        },
      },
    ],
  },
};

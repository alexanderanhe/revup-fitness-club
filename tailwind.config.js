/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', ...defaultTheme.fontFamily.sans],
        "jersey10": ['"Jersey 10"', ...defaultTheme.fontFamily.sans],
        "synemono": ['"Syne Mono"', ...defaultTheme.fontFamily.mono],
      },
      gridTemplateColumns: {
        'autofit': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'pastel', 'cmyk'],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
}


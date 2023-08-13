/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "petronas-primary": '#00908C',
        "petronas-dark": "#00817e",
        "petronas-background": "F0F2F5",
        "petronas-light-blue": "#C9D5E3"
      },
    },
    plugins: [],
  }
}

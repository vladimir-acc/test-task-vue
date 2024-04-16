/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './components/*.{vue,js}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // ... other Tailwind CSS configurations
  darkMode: 'class'
}
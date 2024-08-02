/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in src
    './components/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in components
    './index.html', // Include the HTML file at the root level
  ],
  theme: {
    extend: {
      width: {
        '3/10': '30%',
        '7/10': '70%',
      },
    },
  },  
  plugins: [],
}
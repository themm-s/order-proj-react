/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0d6efdbf',
        'secondary': '#f2f2f2',
      },
    },
    plugins: [],
  }
};

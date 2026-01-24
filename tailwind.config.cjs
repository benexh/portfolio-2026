/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'], // default sans-serif font
        },
      },
    },
    plugins: [],
  };
  
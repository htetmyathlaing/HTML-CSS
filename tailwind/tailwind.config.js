/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'my-custom-color': "#6267F1"
      },
      backgroundColor:{
        'my-custom-color': "#6267F1"
      },
    },
  },
  plugins: [],
}

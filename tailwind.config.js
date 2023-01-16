/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './public/index.html',
      './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
      "./components/*/.{js,vue,ts}",
      "./layouts/*/.vue",
      "./pages/*/.vue",
      "./plugins/*/.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
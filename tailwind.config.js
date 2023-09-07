/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    fontFamily: {
      sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
      "sans-alt": ["Lato", "ui-sans-serif", "system-ui"],
    },

    extend: {},
  },
  plugins: [],
};

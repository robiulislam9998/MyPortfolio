/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1100px",
      },
      colors: {
        primary_button: "var(--primary_button)",
        text_color: "var(--text_color)",
        main_color: "var(--main_color)",
        normal_color: "var(--normal_color)",
        subtext_color: "var(--subtext_color)",
      },
      container: {
        center: true,
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.lightBlue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

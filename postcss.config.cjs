module.exports = {
  plugins: {
    // Tailwind CSS postcss plugin moved to the separate package '@tailwindcss/postcss'
    // See error message when using tailwindcss directly as a PostCSS plugin.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

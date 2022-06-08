module.exports = {
  important: true,
  content: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  theme: {
    fontFamily:{
      "roboto":['Roboto'],
      "mulish":['Mulish']
    },
    screens: {
      movil: '640px',
      table: '768px',
      desktop: '1024px',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

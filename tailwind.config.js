/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
// const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}"
//   ],
//   theme: {
//     fontFamily: {
//       'inter' : ['Inter', 'sans-serif']
//     },
//     extend: {},
//   },
//   plugins: [
//     // require('@tailwindcss/aspect-ratio'),
//   ],
// })

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter' : ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

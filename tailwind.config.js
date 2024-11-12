/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        '400px': '400px', // Custom breakpoint 400px ke liye add kiya gaya
      },
    },
  },
  darkMode: 'class', // Ya media rakh sakte hain agar system dark mode chahein
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    'node_modules/preline/dist/*.js',
"./pages/**/*.{js,ts,jsx,tsx,html}"  // 👈 add this line

    

  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),

  ],
}


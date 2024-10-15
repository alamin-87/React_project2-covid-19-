/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandcolor:'#17C2EC',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '35px',
        sm: '50px',
        md:'50px',
        lg: '50px',
        xl: '50px',
        '2xl': '50px',
      },
    },

    fontFamily: {
      'montserrat': ["Montserrat", 'sans-serif'],
      // 'serif': ['ui-serif', 'Georgia', ...],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      // 'body': ['"Open Sans"', ...],
    }
  },
  plugins: [],
}
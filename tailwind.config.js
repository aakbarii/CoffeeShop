/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D0",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      container:{
        center:true,
        padding:{
          Default:"1rem",
          lg:"0.625rem"
        }
      },
      backgroundImage:{
        "HomeMobile":"url(./src/assets/Images/headerBgMobile.webp)",
        "HomeDesktop":"url(./src/assets/Images/headerBgDesktop.webp)"
      }
    },
    screens: {
      "xs":"480px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("chlid", "&>*");
      addVariant("chlid-hover", "&>*:hover")
    }
  ],
}

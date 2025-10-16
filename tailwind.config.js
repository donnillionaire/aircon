/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // blue
        secondary: "#1E40AF",
      },
         keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
       animation: {
        slide: 'slide 20s linear infinite',
      }, 
    },
  },
  plugins: [],
}


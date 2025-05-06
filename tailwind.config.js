/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'blue-light': '#3B82F6',
        'blue-medium': '#2563EB',
        'blue-dark': '#1E40AF',
        'orange-accent': '#F97316',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #3B82F6, #1E40AF)',
      },
      animation: {
        'slide': 'slide 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#fafafa',
        secondary: '#e72f1d',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        markazi: ['Markazi Text', 'serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    animation: {
      fadeIn: 'fadeIn 1.5s',
      bounce: 'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
      slideUp: 'slideUp 0.5s',
      slideUpEaseInOut: 'slideUp 0.5s ease-in-out',
      slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
    },
    animationDelay: {
      0: '0s',
      2: '0.2s',
      4: '0.4s',
      6: '0.6s',
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideUp: {
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0)' },
      },
      bounce: {
        from: { transform: 'translateY(10px)' },
        to: { transform: 'translateY(0)' },
      },
    },
  },
  plugins: [],
};

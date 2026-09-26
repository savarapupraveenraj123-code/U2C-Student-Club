/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050505',
          900: '#0b0b0a',
          800: '#151411',
          700: '#28231a',
          600: '#3c3324',
        },
        gold: {
          50: '#fff9e8',
          100: '#ffefbd',
          200: '#ffdc74',
          300: '#ffc83d',
          400: '#f2ad16',
          500: '#d89008',
          600: '#b86d05',
          700: '#8e4f05',
          800: '#633605',
          900: '#3d2204',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeDown: { '0%': { opacity: '0', transform: 'translateY(-30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        glowPulse: { '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' }, '50%': { opacity: '0.7', filter: 'blur(60px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        scrollBounce: { '0%, 100%': { transform: 'translateY(0)', opacity: '1' }, '50%': { transform: 'translateY(10px)', opacity: '0.5' } },
      },
    },
  },
  plugins: [],
};

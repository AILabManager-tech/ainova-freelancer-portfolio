/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stark: {
          black: '#000000',
          cyan: '#00F0FF',
          red: '#FF003C',
          green: '#00FF00',
          'cyan-glow': 'rgba(0, 240, 255, 0.5)',
          'red-glow': 'rgba(255, 0, 60, 0.5)',
        }
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'rotate-fast': 'rotate 5s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            filter: 'brightness(1) drop-shadow(0 0 10px currentColor)',
          },
          '50%': {
            opacity: 0.7,
            filter: 'brightness(1.2) drop-shadow(0 0 20px currentColor)',
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'red-glow': '0 0 20px rgba(255, 0, 60, 0.5), 0 0 40px rgba(255, 0, 60, 0.3)',
        'green-glow': '0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

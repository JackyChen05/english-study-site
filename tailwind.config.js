/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rainbow: {
          red: '#FF6B6B',
          orange: '#FF9F43',
          yellow: '#F9CA24',
          green: '#6DD55A',
          blue: '#4D96FF',
          purple: '#9B59B6',
          pink: '#FF69B4',
        },
        module: {
          1: { bg: '#FFE5E5', accent: '#FF6B6B' },
          2: { bg: '#E5F5FF', accent: '#4D96FF' },
          3: { bg: '#F0FFE5', accent: '#6DD55A' },
          4: { bg: '#FFE5F5', accent: '#FF69B4' },
        }
      },
      borderRadius: {
        'card': '20px',
        'button': '12px',
        'large': '28px',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0,0,0,0.08)',
        'hover': '0 12px 40px rgba(0,0,0,0.12)',
        'rainbow': '0 4px 20px rgba(255,107,107,0.3)',
      },
      fontFamily: {
        'cute': ['Nunito', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'flip': 'flip 0.6s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        }
      }
    },
  },
  plugins: [],
}

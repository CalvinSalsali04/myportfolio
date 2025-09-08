/** @type {import('tailwindcss').Config} */
export default {
  content: ['./home', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        sm: '340px',
        md: '600px',
        lg: '720px',
        xl: '720px',
        '2xl': '720px',
      },
    },
    extend: {
      colors: {
        beige: '#f7f3ea',
        ink: '#111111',
        slateInk: '#444444',
        link: '#0f172a',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      boxShadow: {
        card: '0 6px 20px rgba(0,0,0,0.06)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 250ms ease-out both',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'eig-bg': '#020617',
        'eig-accent': '#1d4ed8',
      },
      borderRadius: {
        hero: '2.5rem',
      },
    },
  },
  plugins: [],
}

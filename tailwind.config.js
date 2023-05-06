/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': "#EF476F",
        'secondary': "#118AB2",
        'gold': "#FFD166",
        'success': "#06D6A0",
        'danger': '#EF476F',
        'secondarydark': "#073B4C",
        'white': "#FFFFFF",
        'black': "#000000",
        'transparent': "transparent",
      },
      container: {
        center: true,
        screens: {
          '2xl': '1364px',
        },
        padding: '1rem'
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        black: ['var(--font-poppins)'],
      },
      fontWeight: {
        sans: '400',
        black: '800'
      }
    },
  },
  plugins: [],
}

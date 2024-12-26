/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    fontSize: {
      xxs: ['0.625rem', { lineHeight: '1.5' }],
      xs: ['0.75rem', { lineHeight: '150%' }],
      sm: ['0.875rem', { lineHeight: '150%' }],
      base: ['1rem', { lineHeight: '150%' }],
      lg: ['1.125rem', { lineHeight: '150%' }],
      xl: ['1.25rem', { lineHeight: '150%' }],
      '2xl': ['1.5rem', { lineHeight: '150%' }],
      '3xl': ['1.75rem', { lineHeight: '150%' }],
      '4xl': ['2rem', { lineHeight: '150%' }],
      '5xl': ['2.5rem', { lineHeight: '150%' }],
      '6xl': ['3rem', { lineHeight: '150%' }],
      '7xl': ['3.5rem', { lineHeight: '150%' }],
      '8xl': ['4.25rem', { lineHeight: '140%' }],
    },
    colors: {
      primary: {
        900: '#121212',
        800: '#1A1A1A',
        700: '#202020',
        600: '#252525',
        500: '#292929',
        400: '#787878',
        300: '#A4A4A4',
        200: '#C7C7C7',
        100: '#E5E5E5',
        0: '#FFFFFF',
      },
      error: {
        900: '#781B32',
        800: '#AA2747',
        700: '#D02F57',
        600: '#F34A6B',
        500: '#FF3A6B',
        400: '#FF9BAB',
        300: '#FFC2CB',
        200: '#FFE3E7',
        100: '#FFF3F4',
      },
      warning: {
        900: '#6a3f01',
        800: '#975901',
        700: '#b86d02',
        600: '#d57d02',
        500: '#e28502',
        400: '#ecb793',
        300: '#f3d2be',
        200: '#f9e9e1',
        100: '#fcf6f2',
      },
      info: {
        900: '#103378',
        800: '#1748aa',
        700: '#1d58d0',
        600: '#2166f0',
        500: '#236cff',
        400: '#96acff',
        300: '#c0cbff',
        200: '#e2e7ff',
        100: '#f2f4ff',
      },
      secondary: {
        900: '#4e4e4e',
        800: '#6e6e6e',
        700: '#878787',
        600: '#9b9b9b',
        500: '#a5a5a5',
        400: '#c8c8c8',
        300: '#dcdcdc',
        200: '#eee',
        100: '#f7f7f7',
      },
    },
    backgroundImage: {
      hero: "url('/src/assets/images/hero.jpg')",
    },
    extend: {},
  },
  plugins: [],
}

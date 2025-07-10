export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4a5ca8',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

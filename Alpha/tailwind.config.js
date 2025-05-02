/** @type {import('tailwindcss').Config} */
export default {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {
          colors: {
            'basicBg': 'rgb(0 11 23)',
            'secBg': 'rgb(0 15 30)',
          },
          fontFamily: {
            'normal': 'JetBrains Mono',
            'special': 'Space Grotesk',
          },
        },
      },
      plugins: [],
    }
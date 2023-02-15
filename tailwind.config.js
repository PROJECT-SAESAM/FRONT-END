/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out 1s',
        bounce: 'bounce',
        intro: "intro 2s ease-in-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 2s",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        intro: {
          from: { transform: "rotateY(0deg) scale(.5)" },
          to: { transform: "rotateY(10deg) scale(1.0)" },
        },
        pulse: {
          '0%, 100%': { transform: 'opacity(1)' },
          '50%': { transform: 'opacity(0.5)' },
        }
      },
      plugins: [require("tailwind-scrollbar-hide")],
    }
  }
}
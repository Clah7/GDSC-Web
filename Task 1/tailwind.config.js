/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway']
      }
    },
    animation: {
      'gradient-x': 'gradient-x 15s ease infinite',
      'gradient-y': 'gradient-y 15s ease infinite',
      'gradient-xy': 'gradient-xy 15s ease infinite',
      'slide': 'slide 2.5s linear infinite',
      'bounce': 'bounce 1s infinite',
    },
    'keyframes': {
      'bounce':{
        '0%, 100%': {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        '50%':{
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
      'slide': {
        "0%": { transform: "translateY(100%)", opacity: 0.1 },
        "15%": { transform: "translateY(0)", opacity: 1 },
        "30%": { transform: "translateY(0)", opacity: 1 },
        "45%": { transform: "translateY(-100%)", opacity: 1 },
        "100%": { transform: "translateY(-100%)", opacity: 0.1 },
      },
      'gradient-y': {
        '0%, 100%': {
          'background-size': '400% 400%',
          'background-position': 'center top'
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'center center'
        }
      },
      'gradient-x': {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center'
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center'
        }
      },
      'gradient-xy': {
        '0%, 100%': {
          'background-size': '400% 400%',
          'background-position': 'left center'
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center'
        }
      }
    }
    
  },
  plugins: [],
}


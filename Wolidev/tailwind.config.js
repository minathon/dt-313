// tailwind.config.js

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./assets/components/*.js","./screens/*.js"],
    theme: {
      extend: {
        colors:{
          'darkgreen':'#199A8E',
          'darkblue':'#293477',
          'lightblue':'#BED4FF',
          'superlight':'#DAEBFF',
          "light":"#DDFFF8"
        }
      },
      
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      backgroundImage: {
        "latest-1": "url('../temp-asset/static-asset/latest-1.svg')",
        "latest-2": "url('../temp-asset/static-asset/latest-2.svg')",
        "latest-3": "url('../temp-asset/static-asset/latest-3.svg')",
      },

      fontFamily: {
        poppinsThin: ["poppinsThin"],
        poppinsSemiBold: ["poppinsSemiBold"],
        poppinsRegular: ["poppinsRegular"],
        poppinsMedium: ["poppinsMedium"],
        poppinsLight: ["poppinsLight"],
        poppinsExtraLight: ["poppinsExtraLight"],
        poppinsExtraBold: ["poppinsExtraBold"],
        poppinsBold: ["poppinsBold"],
        poppinsBlack: ["poppinsBlack"],
      },

      colors: {
        "makeblock-orange": "#FD8E4A",
        "makeblock-orange-3": "#FBA53D",
        "makeblock-orange-2": "#FF6922",
        "makeblock-gray": "#666666",
        "makeblock-gray-light": "#6C7793",
        "makeblock-green": "#42CA24",
        "makeblock-green-2": "#0DC088",
        "makeblock-blue": "#0074FF",
        "makeblock-blue-2": "#0C7BFF",
        "makeblock-blue-light": "#F3FAFF",
        "makeblock-blue-light-2": "#3FB8FF",
        "makeblock-blue-light-3": "#00BBFF",
        "makeblock-blue-link": "#3762CC",
        "makeblock-black-light": "#2A2E3A",
        "makeblock-yellow-light": "#FFFBE8",
        "makeblock-gray-form": "#FAFAFA",
        "makeblock-gray-form-text": "#5A5960",
        "makeblock-gray-text": "#6C7793",
      },
      screens: {
        xl: "1200px",
        "2xl": "1320px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};

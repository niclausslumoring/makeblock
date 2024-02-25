/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      backgroundImage: {
        "homepage-banner": "url('../temp-asset/homepage/bg-homepage-1.png')",
        "faq-banner": "url('../temp-asset/faq/banner.svg')",
        "about-us-banner": "url('../temp-asset/about-us/banner.svg')",
        "course-banner": "url('../temp-asset/course/banner.svg')",
        "partnership-banner": "url('../temp-asset/partnership/banner.svg')",
        "partnership-oval": "url('../temp-asset/partnership/oval.svg')",
        "school-partnership": "url('../temp-asset/partnership/school/banner.svg')",
        "affiliate-partnership": "url('../temp-asset/partnership/affiliate/banner.svg')",
        "program-partnership": "url('../temp-asset/partnership/program/banner.svg')",
        "latest-1": "url('../temp-asset/static-asset/latest-1.svg')",
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
        "makeblock-black-light": "#2A2E3A",
        "makeblock-yellow-light": "#FFFBE8",
        "makeblock-gray-form": "#FAFAFA",
        "makeblock-gray-form-text": "#5A5960",
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

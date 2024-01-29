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
        "bussiness-partnership": "url('../temp-asset/partnership/bussiness/banner.svg')",
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
        "cyberspace-orange": "#FF9900",
        "cyberspace-dark-orange": "#E7B200",
        "cyberspace-light-orange": "#FFB800",
        "cyberspace-super-light-orange": "#FFC604",
        "cyberspace-form": "#FFD704",
        "cyberspace-blue": "#1D77FF",
        "cyberspace-green": "#2C5F2D",
        "cyberspace-brown": "#B66D21",
        "cyberspace-light-blue": "#48B5AA",
        "cyberspace-purple": "#747FC6",
        "cyberspace-red": "#FF6D59",
        "cyberspace-gray": "#CECECE",
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

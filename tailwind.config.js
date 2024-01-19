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
        "onlineBookGreen-bg": "url('../temp-asset/homepage/Booking-1.png')",
        "onlineBookPink-bg": "url('../temp-asset/homepage/Booking-2.png')",
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
        "cyberspace-blue": "#1D77FF",
        "cyberspace-green": "#2C5F2D",
        "cyberspace-brown": "#B66D21",
        "cyberspace-light-blue": "#48B5AA",
        "cyberspace-purple": "#747FC6",
        "cyberspace-red": "#FF6D59",
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

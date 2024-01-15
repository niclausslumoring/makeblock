/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      backgroundImage: {
        "offcanvas-bg": "url('../temp-asset/statis-asset/Navbar.png')",
        "onlineBookGreen-bg": "url('../temp-asset/homepage/Booking-1.png')",
        "onlineBookPink-bg": "url('../temp-asset/homepage/Booking-2.png')",
      },

      fontFamily: {
        outfitThin: ["outfitThin"],
        outfitSemiBold: ["outfitSemiBold"],
        outfitRegular: ["outfitRegular"],
        outfitMedium: ["outfitMedium"],
        outfitLight: ["outfitLight"],
        outfitExtraLight: ["outfitExtraLight"],
        outfitExtraBold: ["outfitExtraBold"],
        outfitBold: ["outfitBold"],
        outfitBlack: ["outfitBlack"],
      },

      colors: {
        "joindo-blue-navy": "#3E5580",
        "joindo-gray": "#888888",
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

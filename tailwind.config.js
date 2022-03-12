module.exports = {
  content: ["./"],
  theme: {
    extend: {
      colors: {
        primary: {
          from: "hsl(6, 100%, 80%)",
          to: "hsl(335, 100%, 65%)",
        },
        secondary: {
          100: "hsl(243, 100%, 93%)",
          200: "hsl(229, 7%, 55%)",
          300: "hsl(228, 56%, 26%)",
          400: "hsl(229, 57%, 11%)",
        },
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

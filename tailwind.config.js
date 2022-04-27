module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#14213d",
        mustard: "#fca311",
        orangy: "#de8a00",
      },
    },
  },
  plugins: [require("daisyui")],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#14213d",
        
      },
    },
  },
  plugins: [require("daisyui")],
};

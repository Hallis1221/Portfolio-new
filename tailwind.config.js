/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'projects': "url('https://images.unsplash.com/photo-1665502252515-8380abd497fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80')",
      }
    },
  },
  daisyui: {
    themes: [
      "dark"
    ],
  },

  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Define your custom colors here
        tan: "#E1B168",
        clay: " #292E36",
        gray: "#555555",
        tuna: "#343942",
        rose_white: " #FFF8F5",
      },
      fontFamily: {
        josefin: ["var(--font-josefin)"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-sidebar": "#f7fafc",
        "custom-main-tab": "#edf2f7",
      },
      colors: {
        "custom-header": "#818fa3",
        "custom-text": "#4A5568",
        "custom-black": "#1A202C",
        "custom-purple": "#322659",
        "custom-aurora-heading": "#1B2559",
      },
      textColor: {
        "custom-light-grey": "#718096",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',    // Extra small devices like small mobile screens
      'sm': '640px',    // Small devices (default)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (desktops)
      'xl': '1280px',   // Extra large devices
      '2xl': '1440px',  // Custom extra large
      '3xl': '1600px',  // Ultra large screens
    },
    extend: {
      colors: {
        PRIMARY_BASE: "#007600",
        PRIMARY_300: "#007600CC",
        PRIMARY_200: "#00760099",
        PRIMARY_100: "#00760066",
        PRIMARY_50: "#00760033",
        SECONDARY_BASE: "#A4D438",
        SECONDARY_300: "#A4D438CC",
        SECONDARY_200: "#A4D43899",
        SECONDARY_100: "#A4D43866",
        SECONDARY_50: "#A4D43833",
        SUCCESS: "#4CAF50",
        SUCCESS_50: "#4CAF5033",
        INFO: "#2196F2",
        INFO_50: "#2196F233",
        WARNING: "#F5B000",
        WARNING_50: "#F5B00033",
        DANGER: "#F44336",
        DANGER_50: "#F4433633",
        DISABLED: "#D6D6D6",
        DARK_BASE: "#1A1A1A",
        GRAY_BG: "#F8F8F8",
        GRAY_BORDER: "#E8E8E8",
        GRAY_1: "#303030",
        GRAY_2: "#484848",
        GRAY_3: "#5F5F5F",
        GRAY_5: "#8C8C8C",
        GRAY_6: "#A8A8A8",
        GRAY_7: "#BABABA",
        GRAY_9: "#E8E8E8",
        BG_INFO: "#EAF5FF",
        BG_SUCCESS: "#EEF8EE",
        BG_WARNING: "#FFF8E6",
        BG_DANGER: "#FFEDEC",
        BG_CYAN: "#E8F6F8",
        BG_PURPLE: "#F3F1FF",
        BG_SECONDARY: "#F5F5F5",
      }
    },
  },
  darkMode: "class",
  plugins: [],
}


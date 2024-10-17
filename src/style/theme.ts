import { createTheme } from "@mui/material/styles";

const grouponFont = "'Nunito Sans', Roboto, Arial, sans-serif";

export const grouponTheme = createTheme({
  palette: {
    primary: {
      main: "#53A318", // Groupon's green
    },
    secondary: {
      main: "#FFFFFF", // White for contrast
    },
    background: {
      default: "#F4F4F4", // Light gray for background
    },
    text: {
      primary: "#333333", // Dark gray for text
    },
  },
  typography: {
    fontFamily: grouponFont,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});

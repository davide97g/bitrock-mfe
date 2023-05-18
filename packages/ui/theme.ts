import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
  },
});

export { theme, ThemeProvider };

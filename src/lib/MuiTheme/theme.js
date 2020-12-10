import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "rgba(62, 214, 218, 1)",
        },
      },
    },
  },
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(132, 241, 241, 1)",
      dark: "rgba(62, 214, 218, 1)",
      main: "rgba(63, 165, 255, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(208, 242, 228, 1)",
      dark: "rgba(132, 241, 197, 1)",
      main: "rgba(38, 162, 112, 1)",
      contrastText: "#fff",
    },
    success: {
      light: "rgba(208, 242, 228, 1)",
      dark: "rgba(132, 241, 197, 1)",
      main: "rgba(38, 162, 112, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(255, 156, 156, 1)",
      main: "rgba(255, 1, 1, 1)",
      dark: "rgba(141, 0, 0, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default theme;

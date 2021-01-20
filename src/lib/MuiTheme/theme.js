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
  typography: {
    h1: {
      fontFamily: "Assistant, Roboto",
    },
    h2: {
      fontFamily: "Assistant, Roboto",
    },
    h3: {
      fontFamily: "Assistant, Roboto",
    },
    h4: {
      fontFamily: "Assistant, Roboto",
    },
    h5: {
      fontFamily: "Assistant, Roboto",
    },
    h6: {
      fontFamily: "Assistant, Roboto",
    },
    subtitle1: {
      fontFamily: "Yura, Roboto",
    },
    subtitle2: {
      fontFamily: "Yura, Roboto",
    },
    body1: {
      fontFamily: "Rubik, Roboto",
    },
    body2: {
      fontFamily: "Rubik, Roboto",
    },
    button: {
      fontFamily: "Jura, Roboto",
      fontWeight: 600,
    },
    caption: {
      fontFamily: "Yura, Roboto",
    },
    overline: {
      fontFamily: "Yura, Roboto",
    },
  },
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa", light: "#84DCF1" },
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

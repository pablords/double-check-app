import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { Routes } from "../src/routes";
import { AuthProvider } from "../src/context/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      light: blue[400],
      main: blue[500],
      dark: blue[600],
    },
    common: {
      black: "#2c2c2c",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}


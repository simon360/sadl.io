import React from "react";
import theme from "./theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;

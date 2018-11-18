import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "@sadl/components/theme";

const Style = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

body {
  font-family: ${props => props.theme.type.family};
}
`;

export default ({children}) => (
  <ThemeProvider>
    <React.Fragment>
      <Normalize />
      <Style />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

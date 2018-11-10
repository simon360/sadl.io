import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "../../components/src/theme";

const Style = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

body {
  font-family: ${props => props.theme.type.family};
}
`;

export default storyFn => (
  <ThemeProvider>
    <React.Fragment>
      <Normalize />
      <Style />
      {storyFn()}
    </React.Fragment>
  </ThemeProvider>
);

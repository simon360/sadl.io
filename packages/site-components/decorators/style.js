import React from "react";
import { createGlobalStyle } from "styled-components";
import theme from "../../components/src/theme";

const Style = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

body {
  font-family: ${theme.type.family};
}
`;

export default storyFn => (
  <React.Fragment>
    <Style />
    {storyFn()}
  </React.Fragment>
);

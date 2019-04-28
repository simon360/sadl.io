import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import theme from "@sadl/components/theme";

const Style = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

body {
  font-family: ${theme.type.family};
}
`;

const styleDecorator = storyFn => (
  <React.Fragment>
    <Normalize />
    <Style />
    {storyFn()}
  </React.Fragment>
);

export default styleDecorator;

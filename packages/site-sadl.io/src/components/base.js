import React from "react";
import PropTypes from "prop-types";

import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "@sadl/components/theme";

const Style = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

body {
  font-family: ${props => props.theme.type.family};
}
`;

const Base = ({ children }) => (
  <ThemeProvider>
    <React.Fragment>
      <Normalize />
      <Style />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

Base.propTypes = {
  /**
   * Child element(s).
   */
  children: PropTypes.node
};

export default Base;

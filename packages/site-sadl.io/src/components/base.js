import React from "react";
import PropTypes from "prop-types";

import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import theme from "@sadl/components/theme";

const Style = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

body {
  font-family: ${theme.type.family};
}
`;

const Base = ({ children }) => (
  <React.Fragment>
    <Normalize />
    <Style />
    {children}
  </React.Fragment>
);

Base.propTypes = {
  /**
   * Child element(s).
   */
  children: PropTypes.node
};

export default Base;

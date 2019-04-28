import React from "react";
import PropTypes from "prop-types";

import { css, Global } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

import theme from "@sadl/components/theme";

const globalFontStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

  body {
    font-family: ${theme.type.family};
  }
`;
const Base = ({ children }) => (
  <React.Fragment>
    <Global styles={emotionNormalize} />
    <Global styles={globalFontStyle} />
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

import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import theme from "@sadl/components/theme";

const Spacing = ({ bottom, left, right, top, ...props }) => (
  <div
    css={css`
      margin-bottom: ${bottom ? theme.space[bottom] : 0};
      margin-left: ${left ? theme.space[left] : 0};
      margin-right: ${right ? theme.space[right] : 0};
      margin-top: ${top ? theme.space[top] : 0};
    `}
    {...props}
  />
);

Spacing.propTypes = {
  /**
   * Amount of spacing on bottom
   */
  bottom: PropTypes.oneOf(Object.keys(theme.space)),

  /**
   * Amount of spacing on left
   */
  left: PropTypes.oneOf(Object.keys(theme.space)),

  /**
   * Amount of spacing on right
   */
  right: PropTypes.oneOf(Object.keys(theme.space)),

  /**
   * Amount of spacing on top
   */
  top: PropTypes.oneOf(Object.keys(theme.space))
};

export default Spacing;

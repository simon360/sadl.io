import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import theme from "@sadl/components/theme";

const veryBigHeadingStyle = css`
  font-size: ${theme.type.size.veryBig};
  font-weight: ${theme.type.weight.bold};
  line-height: ${theme.type.lineHeights.squashed};
  margin: 0;
`;

const VeryBigHeading = ({ isOnDark, ...props }) => (
  <h2
    css={[
      veryBigHeadingStyle,
      css`
        color: ${isOnDark ? theme.color.onDark.primary : theme.color.primary};
      `
    ]}
    {...props}
  />
);

VeryBigHeading.propTypes = {
  /**
   * Is this heading being shown on a dark background?
   */
  isOnDark: PropTypes.bool
};

export default VeryBigHeading;

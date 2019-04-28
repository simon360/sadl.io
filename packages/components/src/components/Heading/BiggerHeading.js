import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import theme from "@sadl/components/theme";

const biggerHeadingStyle = css`
  font-size: ${theme.type.size.bigger};
  font-weight: ${theme.type.weight.normal};
  line-height: ${theme.type.lineHeights.normal};
  margin: 0;
`;

const BiggerHeading = ({ isOnDark, ...props }) => (
  <h2
    css={[
      biggerHeadingStyle,
      css`
        color: ${isOnDark ? theme.color.onDark.primary : theme.color.primary};
      `
    ]}
    {...props}
  />
);

BiggerHeading.propTypes = {
  /**
   * Is this heading being shown on a dark background?
   */
  isOnDark: PropTypes.bool
};

export default BiggerHeading;

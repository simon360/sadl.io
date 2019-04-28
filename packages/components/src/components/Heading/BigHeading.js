import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import theme from "@sadl/components/theme";

const bigHeadingStyle = css`
  font-size: ${theme.type.size.big};
  font-weight: ${theme.type.weight.normal};
  line-height: ${theme.type.lineHeights.normal};
  margin: 0;
`;

const BigHeading = ({ isOnDark, ...props }) => (
  <h2
    css={[
      bigHeadingStyle,
      css`
        color: ${isOnDark ? theme.color.onDark.primary : theme.color.primary};
      `
    ]}
    {...props}
  />
);

BigHeading.propTypes = {
  /**
   * Is this heading being shown on a dark background?
   */
  isOnDark: PropTypes.bool
};

export default BigHeading;

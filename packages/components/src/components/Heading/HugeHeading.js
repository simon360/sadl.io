import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import theme from "@sadl/components/theme";

const hugeHeadingStyle = css`
  font-size: ${theme.type.size.huge};
  font-weight: ${theme.type.weight.bold};
  line-height: ${theme.type.lineHeights.squashed};
  margin: 0;
`;

const HugeHeading = ({ isOnDark, ...props }) => (
  <h1
    css={[
      hugeHeadingStyle,
      css`
        color: ${isOnDark ? theme.color.onDark.primary : theme.color.primary};
      `
    ]}
    {...props}
  />
);

HugeHeading.propTypes = {
  /**
   * Is this heading being shown on a dark background?
   */
  isOnDark: PropTypes.bool
};

export default HugeHeading;

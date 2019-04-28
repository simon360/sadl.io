import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import theme from "@sadl/components/theme";

const wrapperStyle = css`
  overflow: hidden;
  width: 100%;
`;

const innerStyle = css`
  display: block;
  height: ${theme.space.threeQuarters};
  width: 100vw;

  @media (min-width: ${theme.viewportSizes.small}) {
    height: ${theme.space.oneAndHalf};
  }
`;

const Cutter = ({ bottomColor, topColor }) => (
  <div
    css={[
      wrapperStyle,
      css`
        background-color: ${bottomColor};
        color: ${topColor};
      `
    ]}
  >
    <svg
      css={innerStyle}
      preserveAspectRatio="none"
      viewBox="1 1 199 199"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" fillRule="nonzero" d="M0 200V0h200z" />
    </svg>
  </div>
);

Cutter.propTypes = {
  /**
   * The color to use on the bottom portion of this Cutter.
   */
  bottomColor: PropTypes.string.isRequired,

  /**
   * The color to use on the bottom portion of this Cutter.
   */
  topColor: PropTypes.string.isRequired
};

export default Cutter;

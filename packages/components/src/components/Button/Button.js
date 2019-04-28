import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import theme from "@sadl/components/theme";

const buttonStyle = css`
  border-radius: ${theme.flourish.rounded.standard};
  border-style: solid;
  border-width: ${theme.space.eighth};
  font-family: ${theme.type.family};
  padding: ${theme.space.half} ${theme.space.threeQuarters};
  transition-duration: ${theme.animation.timings.one};
  transition-property: background-color, border, color;

  :hover,
  :focus {
    background-color: ${theme.color.primary};
    border: ${theme.space.eighth} solid ${theme.color.primary};
    color: ${theme.color.onDark.white};
  }

  :active {
    background-color: ${theme.color.primaryDarker};
    border: ${theme.space.eighth} solid ${theme.color.primaryDarker};
  }
`;

const buttonPrimaryStyle = css`
  background-color: ${theme.color.onDark.white};
  border-color: ${theme.color.primary};
  color: ${theme.color.primary};
`;

const buttonSecondaryStyle = css`
  background-color: ${theme.color.primaryLighter};
  border-color: ${theme.color.primaryLighter};
  color: ${theme.color.onDark.white};
`;

const Button = ({ mode, ...props }) => (
  <button
    css={[
      buttonStyle,
      mode === "primary" ? buttonPrimaryStyle : buttonSecondaryStyle
    ]}
    {...props}
  />
);

Button.defaultProps = {
  mode: "primary"
};

Button.propTypes = {
  /**
   * The style of button to show.
   */
  mode: PropTypes.oneOf(["primary", "secondary"])
};

export default Button;

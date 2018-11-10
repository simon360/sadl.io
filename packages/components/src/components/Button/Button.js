import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const backgroundColor = props =>
  ({ primary: theme.color.onDark.white, secondary: theme.color.primaryLighter }[
    props.type || "primary"
  ]);

const borderColor = props =>
  ({ primary: theme.color.primary, secondary: theme.color.primaryLighter }[
    props.type || "primary"
  ]);

const textColor = props =>
  ({ primary: theme.color.primary, secondary: theme.color.onDark.white }[
    props.type || "primary"
  ]);

export default styled.button`
  background-color: ${backgroundColor};
  border: ${theme.space.eighth} solid ${borderColor};
  border-radius: ${theme.flourish.rounded.standard};
  color: ${textColor};
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

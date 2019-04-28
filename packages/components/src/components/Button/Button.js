import styled from "styled-components";

const backgroundColor = props =>
  ({
    primary: props => props.theme.color.onDark.white,
    secondary: props => props.theme.color.primaryLighter
  }[props.type || "primary"]);

const borderColor = props =>
  ({
    primary: props => props.theme.color.primary,
    secondary: props => props.theme.color.primaryLighter
  }[props.type || "primary"]);

const textColor = props =>
  ({
    primary: props => props.theme.color.primary,
    secondary: props => props.theme.color.onDark.white
  }[props.type || "primary"]);

export default styled.button`
  background-color: ${backgroundColor};
  border: ${props => props.theme.space.eighth} solid ${borderColor};
  border-radius: ${props => props.theme.flourish.rounded.standard};
  color: ${textColor};
  font-family: ${props => props.theme.type.family};
  padding: ${props => props.theme.space.half}
    ${props => props.theme.space.threeQuarters};
  transition-duration: ${props => props.theme.animation.timings.one};
  transition-property: background-color, border, color;

  :hover,
  :focus {
    background-color: ${props => props.theme.color.primary};
    border: ${props => props.theme.space.eighth} solid
      ${props => props.theme.color.primary};
    color: ${props => props.theme.color.onDark.white};
  }

  :active {
    background-color: ${props => props.theme.color.primaryDarker};
    border: ${props => props.theme.space.eighth} solid
      ${props => props.theme.color.primaryDarker};
  }
`;

import React from "react";
import styled from "styled-components";
import theme from "../../theme";

// Max width is 48 spacing units, minus one half on each side.
const maxWidth = `calc(47 * ${theme.space.one})`;

export default styled.section`
  margin-bottom: ${props => (props.bottom ? theme.space[props.bottom] : 0)};
  margin-left: ${props => (props.left ? theme.space[props.left] : 0)};
  margin-right: ${props => (props.right ? theme.space[props.right] : 0)};
  margin-top: ${props => (props.top ? theme.space[props.top] : 0)};
`;

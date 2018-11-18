import styled, { css } from "styled-components";

// Max width is 48 spacing units, minus one half on each side.
const maxWidth = css`calc(47 * ${props => props.theme.space.one})`;

export default styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding-bottom: ${props => props.theme.space.one};
  padding-left: ${props => props.theme.space.half};
  padding-right: ${props => props.theme.space.half};
  padding-top: ${props => props.theme.space.one};
`;

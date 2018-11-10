import React from "react";
import styled from "styled-components";
import theme from "../../theme";

// Max width is 48 spacing units, minus one half on each side.
const maxWidth = `calc(47 * ${theme.space.one})`;

export default styled.section`
  margin: 0 auto;
  max-width: ${maxWidth};
  padding-bottom: ${theme.space.one};
  padding-left: ${theme.space.half};
  padding-right: ${theme.space.half};
  padding-top: ${theme.space.one};
`;

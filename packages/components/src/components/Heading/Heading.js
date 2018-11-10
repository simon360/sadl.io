import styled from "styled-components";
import theme from "../../theme";

export const HugeHeading = styled.h1`
  color: ${theme.color.primary};
  font-size: ${theme.type.size.huge};
  font-weight: ${theme.type.weight.bold};
  line-height: ${theme.type.lineHeights.squashed};
  margin: 0;
`;

export const VeryBigHeading = styled.h2`
  color: ${theme.color.primary};
  font-size: ${theme.type.size.veryBig};
  font-weight: ${theme.type.weight.bold};
  line-height: ${theme.type.lineHeights.squashed};
  margin: 0;
`;

export const BiggerHeading = styled.h2`
  color: ${theme.color.primary};
  font-size: ${theme.type.size.bigger};
  font-weight: ${theme.type.weight.normal};
  line-height: ${theme.type.lineHeights.normal};
  margin: 0;
`;

export const BigHeading = styled.h2`
  color: ${theme.color.primary};
  font-size: ${theme.type.size.big};
  font-weight: ${theme.type.weight.normal};
  line-height: ${theme.type.lineHeights.normal};
  margin: 0;
`;

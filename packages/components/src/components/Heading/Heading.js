import styled from "styled-components";

export const HugeHeading = styled.h1`
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.type.size.huge};
  font-weight: ${props => props.theme.type.weight.bold};
  line-height: ${props => props.theme.type.lineHeights.squashed};
  margin: 0;
`;

export const VeryBigHeading = styled.h2`
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.type.size.veryBig};
  font-weight: ${props => props.theme.type.weight.bold};
  line-height: ${props => props.theme.type.lineHeights.squashed};
  margin: 0;
`;

export const BiggerHeading = styled.h2`
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.type.size.bigger};
  font-weight: ${props => props.theme.type.weight.normal};
  line-height: ${props => props.theme.type.lineHeights.normal};
  margin: 0;
`;

export const BigHeading = styled.h2`
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.type.size.big};
  font-weight: ${props => props.theme.type.weight.normal};
  line-height: ${props => props.theme.type.lineHeights.normal};
  margin: 0;
`;

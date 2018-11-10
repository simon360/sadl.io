import styled from "styled-components";

export default styled.p`
  color: ${props => props.theme.color.textPrimary};
  font-size: ${props => props.theme.type.size.standard};
  line-height: ${props => props.theme.type.lineHeights.normal};
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: ${props => props.theme.space.threeQuarters};
`;

export const SmallText = styled.small`
  color: ${props => props.theme.color.textPrimary};
  font-size: ${props => props.theme.type.size.small};
  font-variant: small-caps;
  line-height: ${props => props.theme.type.lineHeights.normal};
  margin: 0;
  text-transform: lowercase;
`;

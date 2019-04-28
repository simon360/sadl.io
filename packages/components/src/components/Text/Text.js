import styled from "@emotion/styled";

import theme from "@sadl/components/theme";

export default styled.p`
  color: ${theme.color.textPrimary};
  font-size: ${theme.type.size.standard};
  line-height: ${theme.type.lineHeights.normal};
  margin-bottom: ${theme.space.threeQuarters};
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
`;

export const SmallText = styled.small`
  color: ${theme.color.textPrimary};
  font-size: ${theme.type.size.small};
  font-variant: small-caps;
  line-height: ${theme.type.lineHeights.normal};
  margin: 0;
  text-transform: lowercase;
`;

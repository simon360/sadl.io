import styled from "@emotion/styled";

import theme from "@sadl/components/theme";

export default styled.a`
  color: ${theme.color.primary};

  :visited {
    color: ${theme.color.primaryLighter};
  }
`;

import styled from "styled-components";
import theme from "../../theme";

export default styled.a`
  color: ${theme.color.primary};

  :visited {
    color: ${theme.color.primaryLighter};
  }
`;

import styled from "styled-components";

export default styled.a`
  color: ${props => props.theme.color.primary};

  :visited {
    color: ${props => props.theme.color.primaryLighter};
  }
`;

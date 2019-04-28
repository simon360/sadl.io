import styled from "styled-components";

export default styled.section`
  margin-bottom: ${props =>
    props.bottom ? props.theme.space[props.bottom] : 0};
  margin-left: ${props => (props.left ? props.theme.space[props.left] : 0)};
  margin-right: ${props => (props.right ? props.theme.space[props.right] : 0)};
  margin-top: ${props => (props.top ? props.theme.space[props.top] : 0)};
`;

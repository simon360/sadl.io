import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const Inner = styled.div`
  background-color: ${theme.color.primary};
  height: ${theme.space.two};
  mask-image: url("data:image/svg+xml,%3Csvg width='200' height='224' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 212L200 12' stroke='%23000' stroke-width='12' fill='none' fill-rule='evenodd' stroke-linecap='square'/%3E%3C/svg%3E");
  mask-size: 100vw 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100vw;
`;

export default () => (
  <Wrapper>
    <Inner />
  </Wrapper>
);

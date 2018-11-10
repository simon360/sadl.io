import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const angleSvg =
  "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' fill-rule='nonzero' d='M0 200V0h200z'/%3E%3C/svg%3E";

const Wrapper = styled.div`
  background-color: ${props => props.bottomColor};
  color: ${props => props.topColor};
  overflow: hidden;
  width: 100%;
`;

const Inner = styled.svg`
  display: block;
  height: ${theme.space.two};
  width: 100vw;
`;

export default ({ bottomColor, topColor }) => (
  <Wrapper bottomColor={bottomColor} topColor={topColor}>
    <Inner
      preserveAspectRatio="none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" fill-rule="nonzero" d="M0 200V0h200z" />
    </Inner>
  </Wrapper>
);

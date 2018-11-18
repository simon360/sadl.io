import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.bottomColor};
  color: ${props => props.topColor};
  overflow: hidden;
  width: 100%;
`;

const Inner = styled.svg`
  display: block;
  height: ${props => props.theme.space.threeQuarters};
  width: 100vw;

  @media (min-width: ${props => props.theme.viewportSizes.small}) {
    height: ${props => props.theme.space.oneAndHalf};
  }
`;

export default ({ bottomColor, topColor }) => (
  <Wrapper bottomColor={bottomColor} topColor={topColor}>
    <Inner
      preserveAspectRatio="none"
      viewBox="1 1 199 199"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" fillRule="nonzero" d="M0 200V0h200z" />
    </Inner>
  </Wrapper>
);

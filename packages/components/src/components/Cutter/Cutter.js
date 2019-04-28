import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const Cutter = ({ bottomColor, topColor }) => (
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

Cutter.propTypes = {
  /**
   * The color to use on the bottom portion of this Cutter.
   */
  bottomColor: PropTypes.string.isRequired,

  /**
   * The color to use on the bottom portion of this Cutter.
   */
  topColor: PropTypes.string.isRequired
};

export default Cutter;

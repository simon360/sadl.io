import React from "react";
import styled from "styled-components";

import { VeryBigHeading } from "@sadl/components/components/Heading";
import Text from "@sadl/components/components/Text";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Inner = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: ${props => props.theme.space.three} ${props => props.theme.space.two};
  text-align: center;
`;

const InnerContent = styled.div`
  margin: 0 auto;
  max-width: calc(${props => props.theme.space.one} * 24);
`;

const Background = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default ({ heading, img, text }) => (
  <Wrapper>
    <Background>{img}</Background>
    <Inner>
      <InnerContent>
        <VeryBigHeading isOnDark>{heading}</VeryBigHeading>
        <Text>{text}</Text>
      </InnerContent>
    </Inner>
  </Wrapper>
);

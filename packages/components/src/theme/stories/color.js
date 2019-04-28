import React from "react";
import styled from "@emotion/styled";

import { storiesOf } from "@storybook/react";

import animation from "../animation";
import color from "../color";
import flourish from "../flourish";
import space from "../space";

import { HugeHeading } from "../../components/Heading";
import Section from "../../components/Section";
import Spacing from "../../components/Spacing";
import Text from "../../components/Text";

const { onDark, ...onLight } = color;

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

const Color = styled.ul`
  background-color: ${props => props.color};
  border: ${props =>
    props.inverse ? `${space.eighth} solid ${color.primary}` : "none"};
  border-radius: ${flourish.rounded.standard};
  box-sizing: border-box;
  height: ${space.four};
  margin-bottom: calc(${space.one} + ${space.two});
  margin-left: 0;
  margin-right: ${space.one};
  padding-left: 0;
  position: relative;
  width: ${space.four};

  &::after {
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    color: ${props => (props.inverse ? color.primary : props.color)};
    content: '${props => props.name}';
    display: flex;
    height: ${space.one};
    justify-content: center;
    left: 0;
    margin-top: ${space.half};
    opacity: 0;
    position: absolute;
    top: 100%;
    transition: opacity ${animation.timings.one};
    width: 100%;
  }

  &:hover::after {
    opacity: 1;
  }
`;

storiesOf("Theme|Color", module).add("Color", () => (
  <Section>
    <Spacing bottom="one">
      <HugeHeading>Color</HugeHeading>
    </Spacing>

    <Spacing bottom="oneAndHalf">
      <Text>
        The color palette is intentionally limited. The primary color should be
        used to add a bit of fourish, and for added emphasis.
      </Text>
      <Text>
        Where additional color is desired, the use of photography is encouraged.
      </Text>
    </Spacing>
    <Wrapper>
      {Object.entries(onLight).map(([key, value]) => (
        <Color color={value} name={key} key={key} />
      ))}
      {Object.entries(onDark).map(([key, value]) => (
        <Color color={value} name={`onDark.${key}`} key={key} inverse />
      ))}
    </Wrapper>
  </Section>
));

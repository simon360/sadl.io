import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
// import { linkTo } from "@storybook/addon-links";

import color from "../color";
import type from "../type";

import { HugeHeading } from "../../components/Heading";
import Text from "../../components/Text";
import Section from "../../components/Section";
import Spacing from "../../components/Spacing";

const ScrollableArea = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const TextDemo = styled.p`
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  margin: 0;
`;

const text = "The quick brown fox jumped over the lazy dog.";

storiesOf("Theme|Type", module).add("Showcase", () => (
  <Section>
    <Spacing bottom="one">
      <HugeHeading>Typography</HugeHeading>
    </Spacing>

    <Spacing bottom="oneAndHalf">
      <Text>
        Text should always be set in Source Sans Pro. The base font size is
        16px, with a type scale of 1.333. Boldness should be used for emphasis,
        and for headings at levels 1 and 2. Italics should be used sparingly in
        text, for lighter emphasis.
      </Text>
      <Text>
        The text primitives should only be used to build additional components,
        based around more concrete typographical constructs.
      </Text>
    </Spacing>

    <ScrollableArea>
      <TextDemo
        fontSize={type.size.huge}
        lineHeight={type.lineHeights.squashed}
      >
        {text}
      </TextDemo>
      <TextDemo
        fontSize={type.size.veryBig}
        lineHeight={type.lineHeights.squashed}
      >
        {text}
      </TextDemo>
      <TextDemo
        fontSize={type.size.bigger}
        lineHeight={type.lineHeights.normal}
      >
        {text}
      </TextDemo>
      <TextDemo fontSize={type.size.big} lineHeight={type.lineHeights.normal}>
        {text}
      </TextDemo>
      <TextDemo
        fontSize={type.size.standard}
        lineHeight={type.lineHeights.normal}
      >
        {text}
      </TextDemo>
      <TextDemo fontSize={type.size.small} lineHeight={type.lineHeights.normal}>
        {text}
      </TextDemo>
    </ScrollableArea>
  </Section>
));

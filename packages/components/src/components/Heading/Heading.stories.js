import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { BiggerHeading, BigHeading, HugeHeading, VeryBigHeading } from "./";
import Section from "../Section";

storiesOf("Components|Heading", module)
  .add("big", () => (
    <Section>
      <BigHeading>Now, this is a story all about how</BigHeading>
    </Section>
  ))
  .add("bigger", () => (
    <Section>
      <BiggerHeading>My life got flipped, turned upside down</BiggerHeading>
    </Section>
  ))
  .add("very big", () => (
    <Section>
      <VeryBigHeading>
        I'd like to take a minute, just sit right there
      </VeryBigHeading>
    </Section>
  ))
  .add("huge", () => (
    <Section>
      <HugeHeading>
        I'll tell you how I became the prince of a town called Bel-Air
      </HugeHeading>
    </Section>
  ));

// .add("with some emoji", () => (
//   <Button onClick={action("clicked")}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// ));

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./";
import Section from "../Section";

storiesOf("Components|Button", module)
  .add("primary", () => (
    <Section>
      <Button onClick={action("clicked")}>Hello Button</Button>
    </Section>
  ))
  .add("secondary", () => (
    <Section>
      <Button onClick={action("clicked")} mode="secondary">
        Hello Button
      </Button>
    </Section>
  ));

import React from "react";

import { storiesOf } from "@storybook/react";

import Logo from "./";
import Section from "../Section";
import theme from "../../theme";

storiesOf("Components|Logo", module).add("normal", () => (
  <Section>
    <Logo height={theme.space.two} />
  </Section>
));

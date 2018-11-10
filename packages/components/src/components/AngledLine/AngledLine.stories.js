import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import AngleLine from "./";
import Section from "../Section";

import theme from "../../theme";

storiesOf("Components|AngleLine", module).add("primary-plain", () => (
  <Section>
    <div style={{ width: "200px" }}>
      <AngleLine />
    </div>
  </Section>
));

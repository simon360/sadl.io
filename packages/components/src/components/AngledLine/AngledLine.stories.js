import React from "react";

import { storiesOf } from "@storybook/react";

import AngledLine from "./";
import Section from "../Section";

storiesOf("Components|AngleLine", module).add("primary-plain", () => (
  <Section>
    <div style={{ width: "200px" }}>
      <AngledLine />
    </div>
  </Section>
));

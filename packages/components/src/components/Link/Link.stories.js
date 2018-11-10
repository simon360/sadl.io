import React from "react";

import { storiesOf } from "@storybook/react";

import Link from "./";
import Section from "../Section";

storiesOf("Components|Link", module).add("normal", () => (
  <Section>
    <Link href="https://example.com">Visit the site</Link>
  </Section>
));

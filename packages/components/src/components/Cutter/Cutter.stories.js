import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import AngledLine from "../AngledLine";
import Cutter from "./";
import Section from "../Section";

import theme from "../../theme";

storiesOf("Components|Cutter", module)
  .add("primary-plain", () => (
    <Cutter
      bottomColor={theme.color.onDark.white}
      topColor={theme.color.primary}
    />
  ))
  .add("plain-primary", () => (
    <Cutter
      bottomColor={theme.color.primary}
      topColor={theme.color.onDark.white}
    />
  ))
  .add("with AngledLine", () => (
    <React.Fragment>
      <Cutter
        bottomColor={theme.color.onDark.white}
        topColor={theme.color.primary}
      />

      <div style={{ margin: "0 auto", width: "200px" }}>
        <AngledLine />
      </div>
    </React.Fragment>
  ));

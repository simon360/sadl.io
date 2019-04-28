import React from "react";
import { storiesOf } from "@storybook/react";

import Hero from ".";

import sampleImage from "./sampleImage.jpg";

storiesOf("Components|Hero", module).add("default", () => (
  <Hero
    heading="Sample heading"
    img={
      <img
        src={sampleImage}
        alt=""
        style={{ height: "100%", objectFit: "cover", width: "100%" }}
      />
    }
    text="Oh, hello there!"
  />
));

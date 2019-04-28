import React from "react";
import { css, Global } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

import theme from "@sadl/components/theme";

const globalFontStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

  body {
    font-family: ${theme.type.family};
  }
`;

const styleDecorator = storyFn => (
  <React.Fragment>
    <Global styles={emotionNormalize} />
    <Global styles={globalFontStyle} />
    {storyFn()}
  </React.Fragment>
);

export default styleDecorator;

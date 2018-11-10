import { withOptions } from "@storybook/addon-options";
import { addDecorator, configure } from "@storybook/react";
import styleDecorator from "../decorators/style";

addDecorator(
  withOptions({
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/
  })
);

addDecorator(styleDecorator);

// automatically import all files ending in *.stories.js
const req = require.context("../../components/src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));

  require("../../components/src/theme/stories");
}

configure(loadStories, module);

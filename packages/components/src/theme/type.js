import { mapValues } from "../utilities";

const scale = 1.333;

export const unitlessSize = {
  small: scale ** -1,
  standard: 1, // 1rem, =16px
  big: scale ** 1,
  bigger: scale ** 2,
  veryBig: scale ** 3,
  huge: scale ** 4
};

// Append "rem" to every value in "unitless"
export default {
  lineHeights: {
    normal: scale ** 1.5,
    squashed: scale
  },
  size: mapValues(unitlessSize, value => `${value}rem`),
  weight: {
    normal: 400,
    bold: 700
  },
  family: '"Source Sans Pro", sans-serif'
};

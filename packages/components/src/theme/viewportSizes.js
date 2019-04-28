import { unitless as unitlessSpace } from "./space";
import { mapValues } from "../utilities";

export const unitless = {
  tiny: 0,
  small: 34 * unitlessSpace.one,
  medium: 48 * unitlessSpace.one
};

export default mapValues(unitless, value => `${value}rem`);

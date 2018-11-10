import { mapValues } from "../utilities";

export const timingsUnitless = {
  one: 0.3
};

export default {
  timings: mapValues(timingsUnitless, value => `${value}s`)
};

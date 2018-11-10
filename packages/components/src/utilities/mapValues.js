export default (obj, map) =>
  Object.entries(obj)
    .map(([key, val]) => [key, map(val, key)])
    .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

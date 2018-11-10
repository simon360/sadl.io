module.exports = api => {
  api.cache(true);

  const presets = [require("@babel/preset-react")];
  const plugins = [require("@babel/plugin-proposal-class-properties")];

  return {
    presets,
    plugins
  };
};

module.exports = api => {
  api.cache(true);

  const presets = [
    require("@babel/preset-react"),
    require("@emotion/babel-preset-css-prop")
  ];
  const plugins = [require("@babel/plugin-proposal-class-properties")];

  return {
    presets,
    plugins
  };
};

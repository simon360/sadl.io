const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  const indexMatchesJs = defaultConfig.module.rules.findIndex(r =>
    r.test.test("main.js")
  );

  console.log(indexMatchesJs);

  defaultConfig.module.rules.splice(indexMatchesJs, 1);

  defaultConfig.module.rules.push({
    test: /\.(m?jsx?)$/,
    use: {
      loader: "babel-loader",
      options: {
        configFile: path.resolve(__dirname, "../../../babel.config.js")
      }
    }
  });

  return defaultConfig;
};

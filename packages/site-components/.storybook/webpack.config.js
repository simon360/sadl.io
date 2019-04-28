const path = require("path");

module.exports = ({ config }) => {
  const indexMatchesJs = config.module.rules.findIndex(r =>
    r.test.test("main.js")
  );

  config.module.rules.splice(indexMatchesJs, 1);

  config.module.rules.push({
    test: /\.(m?jsx?)$/,
    use: {
      loader: "babel-loader",
      options: {
        configFile: path.resolve(__dirname, "../../../babel.config.js")
      }
    }
  });

  return config;
};

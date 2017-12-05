const { RawSource } = require("webpack-sources");

module.exports = class DemoPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    const { name } = this.options;

    compiler.plugin("emit", (compilation, cb) => {
      console.log(compilation);

      compilation.assets[name] = new RawSource("demo");

      cb();
    });
  }
};

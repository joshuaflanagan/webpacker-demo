const environment = require('./environment')
console.log("running in webpack/development.js")
environment.config.output.libraryTarget = "var";
environment.config.output.library = ["Mushy", "[name]"]
console.dir(environment.config.output)

const util = require('util');
const inspectOptions = {showHidden: true, depth: 3, maxArrayLength: 10};
// console.log(util.inspect(environment.loaders, inspectOptions))

const urlLoader = environment.loaders.get('url').use.find(el => el.loader === 'url-loader')
// force all images to be downloaded as separate files by setting limit really low
urlLoader.options.limit = 1;
// Don't specify a publicPath, so the generated code will rely on
// __webpack_public_path__ global variable, which we can manipulate at runtime
delete urlLoader.options.publicPath
// console.log(util.inspect(urlLoader, inspectOptions))

module.exports = environment.toWebpackConfig()
 //console.log(util.inspect(module.exports, inspectOptions));

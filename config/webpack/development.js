const environment = require('./environment')
console.log("running in webpack/development.js")
environment.config.output.libraryTarget = "var";
environment.config.output.library = ["Mushy", "[name]"]
console.dir(environment.config.output)

module.exports = environment.toWebpackConfig()
 const util = require('util');
 const inspectOptions = {showHidden: true, depth: 3, maxArrayLength: 10};
 //console.log(util.inspect(module.exports, inspectOptions));


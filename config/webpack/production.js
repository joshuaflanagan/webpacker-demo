const environment = require('./environment')

module.exports = environment.toWebpackConfig()
 const util = require('util');
 const inspectOptions = {showHidden: true, depth: 3, maxArrayLength: 10};
//console.log(util.inspect(module.exports, inspectOptions));

'use strict'

const  ENV = process.env.NODE_ENV || 'development';

const config = require(`./environment/${ENV}`);

// module.exports = {
//     config: config
// }

module.exports = config;
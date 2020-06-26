'use strict';

// Application configuration - environment settings here are the same across
// all environments. To override settings locally, move "user.example.js" to
// "user.js"
let config = {};

// ---------------------------------------------------------------
// Config values common across environments (overridable defaults)
// ---------------------------------------------------------------

// HTTP port for Express
config.port = process.env.PORT || 3000;

// Options for Sequelize ORM connection - overrides in production and test
// environments
config.databaseUrl = 'postgres://localhost:5432/todos';
config.databaseOptions = {
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
};


// ----------------------------------------------------
// Assign values based on current execution environment
// ----------------------------------------------------
let environmentSettings = {};
switch (process.env.NODE_ENV) {
  case 'production': environmentSettings = require('./production'); break;
  default:  environmentSettings = require('./test'); break;
  }
config = Object.assign(config, environmentSettings);

// Export final configuration object
module.exports = config;

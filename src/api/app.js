'use strict';

const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = async (fastify, opts) => {

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });

  // register the plugins, routes in this case
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes')
  });
};

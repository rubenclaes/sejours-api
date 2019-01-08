'use strict';
 
// Require external modules
const uuidv4 = require('uuid/v4');
const mongoose = require('mongoose');

// Create request ids
const createRequestId = () => uuidv4();

// Require the framework and instantiate it with some config
const fastify = require('fastify')({
  ignoreTrailingSlash: true,
  logger: {
    genReqId: createRequestId,
    level: process.env.LOG_SEVERITY,
    maxParamLength:50
  }
  /* https: {
      key: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.key')),
      cert: fs.readFileSync(path.join(__dirname, '..', 'https', 'fastify.cert'))
    } */
});

// Import Config Options
const cors = require('./api/config/cors');
const swagger = require('./api/config/swagger');
const helmet = require('./api/config/helmet');
const rateLimit = require('./api/config/rate-limit');

// Register Plugins
fastify
  .register(require('fastify-cors'), cors.options )
  .register(require('fastify-swagger'), swagger.options)
  .register(require('fastify-rate-limit'), rateLimit.options)
  .register(require('fastify-helmet'), helmet.options)
  .register(require('fastify-sensible'))
  .register(require('./api/app.js'));
      
// Connect DB
mongoose
//.connect('mongodb://localhost/agilitas')
  .connect(process.env.MONOGO_DB)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


// Start the server
const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

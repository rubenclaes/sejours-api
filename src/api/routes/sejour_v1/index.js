// Import our Controllers
const sejourController = require('./controllers/sejourController');
// Import Swagger documentation
const doc = require('./schema/sejourApi');

module.exports = async (fastify, options) => {

  //fastify.get(path, [options], handler)
  fastify.get('/sejours', 
    doc.addSejourSchema,
    sejourController.getSejours
  );
  
  fastify.get('/sejours/:id',
    doc.addSejourSchema,
    sejourController.getSingleSejour
  );

  fastify.get('/sejours?countrycode=NL',
    doc.countryCodeSchema,
    sejourController.getSingleSejourByCountryCode
  );

  fastify.post('/sejours', 
    doc.addSejourSchema, 
    sejourController.addSejour);

  fastify.put('/sejours/:id',
    doc.addSejourSchema,
    sejourController.updateSejour
  );

  fastify.delete('/sejours/:id',
    doc.addSejourSchema,
    sejourController.deleteSejour
  );
};

module.exports.prefixOverride = '/v1';
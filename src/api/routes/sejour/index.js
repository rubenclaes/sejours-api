// Import our Controllers
const sejourController = require('../../controllers/sejourController');
// Import Swagger documentation
const doc = require('./sejourApi');

module.exports = async (fastify, options) => {

  fastify.get('/api/sejours', 
    doc.addSejourSchema,
    sejourController.getSejours
  );
  
  fastify.get('/api/sejours/:id',
    doc.addSejourSchema,
    sejourController.getSingleSejour
  );

  fastify.post('/api/sejours', 
    doc.addSejourSchema, 
    sejourController.addSejour);

  fastify.put('/api/sejours/:id',
    doc.addSejourSchema,
    sejourController.updateSejour
  );

  fastify.delete('/api/sejours/:id',
    doc.addSejourSchema,
    sejourController.deleteSejour
  );
};

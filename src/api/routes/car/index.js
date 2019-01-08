// Import our Controllers
const carController = require('../../controllers/carController');
// Import Swagger documentation
const documentation = require('./carApi');

module.exports = async (fastify, opts)  => {
  fastify.get('/api/cars', documentation.addCarSchema, carController.getCars);
  fastify.get('/api/cars/:id', documentation.addCarSchema, carController.getSingleCar);
  fastify.post('/api/cars', documentation.addCarSchema, carController.addCar);
  fastify.put('/api/cars/:id', documentation.addCarSchema, carController.updateCar);
  fastify.delete('/api/cars/:id', documentation.addCarSchema, carController.deleteCar);
};

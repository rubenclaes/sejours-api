// External Dependancies
const boom = require("boom");
const mongoose = require('mongoose');

// Get Data Models
const Sejour = require("../models/Sejour");

// Get all sejours
exports.getSejours = async (req, reply) => {
  // https://www.fastify.io/docs/latest/Reply/
  try {
    const sejours = await Sejour.find();
    return sejours;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single country by ID
exports.getSingleSejour = async (req, reply) => {
  try {
    const id =  req.params.id;
    const sejour = await Sejour.findById(id, (err, result) => {
      if (err) { 
        throw boom.boomify(err);
      }
      if (!result) {
        throw boom.notFound('Sejour ID not found');
      }
    });
    return sejour;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single country by CountryCode
exports.getSingleSejourByCountryCode = async (req, reply) => {
  try {
    const countrycode =  req.query.countrycode;
    // get the user starlord55
    User.find({ countrycode: countrycode },  (err, user) => {
      if (err) throw err;

      return sejour;
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new sejour
exports.addSejour = async (req, reply) => {
  try {
    const sejour = new Sejour({ ...req.body }); // gewoon ter demonstratie maar dit hoeft eigenlijk niet https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    return sejour.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing sejour
exports.updateSejour = async (req, reply) => {
  try {
    const id = req.params.id;
    const sejour = req.body;
    const { ...updateData } = sejour; // https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
    const update = await Sejour.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a sejour
exports.deleteSejour = async (req, reply) => {
  try {
    const id = req.params.id;
    const sejour = await Sejour.findByIdAndRemove(id);
    return sejour;
  } catch (err) {
    throw boom.boomify(err);
  }
};

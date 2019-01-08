// External Dependancies
const mongoose = require('mongoose');
// define a schema
const sejourSchema = new mongoose.Schema({
  language: String,
  countryid: Number,
  countrycode: String,
  shortDesc: String,
  longDesc: String,
  translation: [
    {
      language: String,
      shortDesc: String,
      longDesc: String
    }
  ],
  maxAccomAllowance: Number,
  fixedDailyAllowance: [
    {
      cat1: Number,
      cat2: Number
    }
  ]
});
// compile the model
module.exports = mongoose.model('Sejour', sejourSchema);

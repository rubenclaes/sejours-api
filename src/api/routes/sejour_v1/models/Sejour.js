// External Dependancies
const mongoose = require('mongoose');
// define a schema
const sejourSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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

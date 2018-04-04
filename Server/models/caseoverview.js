const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');


// Define the database model
const caseOverviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  
  },
});

// Use the unique validator plugin
caseOverviewSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const caseName = module.exports = mongoose.model('casename', caseOverviewSchema);

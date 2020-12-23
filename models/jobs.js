const mongoose = require('mongoose');
const jobsSchema = mongoose.Schema({});

const Jobs = (module.exports = mongoose.model('Jobs', jobsSchema));

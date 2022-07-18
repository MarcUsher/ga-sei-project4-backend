const mongoose = require('mongoose');

const countryScheme = mongoose.Schema({
    name: String,
    code: String,
    cities: [String],
})

const Country = mongoose.model("Country", countryScheme);

module.exports = {Country};
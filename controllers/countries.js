const {Country} = require('../models/Country')

exports.country_index_get = (req, res) => {
    Country.find()
    .then((countries) => {
        res.json({countries})
    })
    .catch((err) => {
        console.log(err);
    })
}
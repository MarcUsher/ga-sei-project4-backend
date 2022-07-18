const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    title: String,
    country: String,
    city: String,
    summary: String, 
    rating: Number,
    favs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = {Trip};
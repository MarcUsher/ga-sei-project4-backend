const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    title: String,
    country: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Country'
        },
    city: String,
    summary: String, 
    rating: Number,
    favs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    gallery: [String],
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = {Trip};
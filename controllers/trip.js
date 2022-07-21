const {Trip} = require("../models/Trip");
const isLoggedIn = require("../helper/isLoggedIn");

// HTTP GET & POST - To create and add a new trip
exports.trip_create_get = (req, res) => {
    res.render("trip/add")
};

exports.trip_create_post = (req, res) => {
    // console.log(req.body);
    let trip = new Trip(req.body);

    trip.save()
    .then((trip) => {
        res.json({trip: trip})
    })
    .catch((error) => {
        console.log(error);
        res.send("Error while adding a new trip. Please try again later.")
    })
};

// HTTP GET - To load all the trips within the database
exports.trip_index_get = (req, res) => {
    Trip.find().populate('country').populate('createdBy')
    .then(trips => {
        res.json({trips: trips})
    })
    .catch(error => {
        console.log(error)
    })
};

// HTTP GET - Load trip by ID
exports.trip_show_get = (req, res) => {
    console.log(req.params.id);

    Trip.findById(req.params.id).populate('createdBy')
    .then(trip => {
        res.json({trip: trip})
    })
    .catch(error => {
        console.log(error)
    })
};

// HTTP GET & PUT - Load edit form and Edit trip
exports.trip_edit_get = (req, res) => {
    Trip.findById(req.query.id)
    .then((trip) => {
        res.json({trip})
    })
    .catch(error => {
        console.log(error)
    })
};

exports.trip_update_put = (req, res) => {
    console.log(req.body._id)
    Trip.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((trip) => {
        res.json({trip})
    })
    .catch(error => {
        console.log(error)
    })
};

// HTTP DELETE - Delete trip by ID
exports.trip_delete_get = (req, res) => {
    console.log(req.query.id)
    Trip.findByIdAndDelete(req.query.id)
    .then((trip) => {
        res.json(trip)
    })
    .catch(error => {
        console.log(error)
    })
};


exports.trip_editLike_get = (req, res) => {
    Trip.findById(req.query.id)
    .then((trip) => {
        res.json({trip})
    })
    .catch(error => {
        console.log(error)
    })
};
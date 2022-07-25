const {Trip} = require("../models/Trip");
const isLoggedIn = require("../helper/isLoggedIn");
const parser = require('../helper/cloudinary.config')

// HTTP GET & POST - To create and add a new trip
exports.trip_create_get = (req, res) => {
    res.render("trip/add")
};

exports.trip_create_post = async (req, res) => {
    console.log("req.body", req.body);
    let trip = new Trip(req.body);
    console.log("NEW TRIP", trip)

    if (req.file) {
        trip.image = req.file.path
      } else {
        trip.image = null
      }; 

    // let galleryArray = []
    // let multiple = async (path) => await parser(path)

    // if (req.files) {
    //     for (const file of files) {
    //         const {path} = file
    //         const newPath = await multiple(path)
    //         galleryArray.push(newPath)
    //       }
    //     trip.gallery = galleryArray
    // } else {
    //     trip.gallery = []
    // };


    // if (req.files) {
    //     for (let i = 0; i < req.files.length; i++) {
    //         galleryArray.push(req.files[i].path)
    //       }
    //     trip.gallery = galleryArray
    // } else {
    //     trip.gallery = []
    // };

    // console.log("trip.gallery", trip.gallery)

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

    Trip.findById(req.params.id).populate('createdBy').populate('country')
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
    console.log(req.body.id)
    Trip.findById(req.body.id)
    .then((trip) => {
        console.log("req.body", req.body)
        console.log("TRIP", trip)
        editedTrip = trip

        if (req.file) {
            trip.image = req.file.path
        } else if (trip.image) {
            trip.image = trip.image
        } else {
            trip.image = null
        };

        editedTrip.title = req.body.title
        editedTrip.country = req.body.country
        editedTrip.city = req.body.city
        editedTrip.summary = req.body.summary
        editedTrip.rating = req.body.rating

        console.log("EDITED TRIP", editedTrip)

        Trip.findByIdAndUpdate(req.body.id, editedTrip, {new: true})
        .then((trip) => {
            res.json({trip})
        })
        .catch(error => {
            console.log(error)
        })

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

// Like Functionality
exports.trip_editLike_get = (req, res) => {
    Trip.findById(req.query.id)
    .then((trip) => {
        res.json({trip})
    })
    .catch(error => {
        console.log(error)
    })
};

exports.trip_favs_update = (req, res) => {
    Trip.findById(req.body._id)
    .then((trip) => {
        if(trip.favs.includes(req.user.id)){
            let i = trip.favs.indexOf(req.user.id)
            trip.favs.splice(i, 1)
            trip.save()
            .then((trip) => {
                res.json({trip})
            })
            .catch(error => {
                console.log(error)
            })
        }
        else{
            trip.favs.push(req.user.id)
            trip.save()
            .then((trip) => {
                res.json({trip})
            })
            .catch(error => {
                console.log(error)
            })
        }

    })
    .catch(error => {
        console.log(error)
    })
}

exports.trip_updateLike_put = (req, res) => {
    console.log("UPDATE", req.body._id)
    console.log("CURRENT USER", req.user.id)
    Trip.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((trip) => {
        trip.favs = trip.favs.push(req.user.id)
        res.json({trip})
    })
    .catch(error => {
        console.log(error)
    })

};
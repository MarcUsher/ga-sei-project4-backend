const express = require('express');
var methodOverride = require('method-override');
const router = express.Router();
const isLoggedIn = require("../helper/isLoggedIn");
const parser = require('../helper/cloudinary.config');

const tripCtrl = require("../controllers/trip");

// Create/Add a new Trip
router.get("/trip/add", isLoggedIn, tripCtrl.trip_create_get);
router.post("/trip/add", parser.single('image'), isLoggedIn, tripCtrl.trip_create_post);
// Load the Trips in the database
router.get("/trip/index", tripCtrl.trip_index_get);
// Load Trip by ID
router.get("/trip/detail/:id", tripCtrl.trip_show_get);
// Edit Trip
router.get("/trip/edit", isLoggedIn, tripCtrl.trip_edit_get);
router.put("/trip/update", parser.single('image'), isLoggedIn, tripCtrl.trip_update_put);
// Delete Trip
router.delete("/trip/delete", isLoggedIn, tripCtrl.trip_delete_get);
// Like Trip
router.get("/trip/editLike", isLoggedIn, tripCtrl.trip_editLike_get);
router.put("/trip/updateLike", isLoggedIn, tripCtrl.trip_favs_update);

module.exports = router;
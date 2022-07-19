const express = require('express');
var methodOverride = require('method-override');
const router = express.Router();
const isLoggedIn = require("../helper/isLoggedIn");

router.use(methodOverride('_method'));
router.use(express.json());

const tripCtrl = require("../controllers/trip");

// Create/Add a new Trip
router.get("/trip/add", tripCtrl.trip_create_get);
router.post("/trip/add", tripCtrl.trip_create_post);
// Load the Trips in the database
router.get("/trip/index", tripCtrl.trip_index_get);
// Load Trip by ID
router.get("/trip/detail/:id", tripCtrl.trip_show_get);
// Edit Trip
router.get("/trip/edit", tripCtrl.trip_edit_get);
router.put("/trip/update", tripCtrl.trip_update_put);
// Delete Trip
router.delete("/trip/delete", tripCtrl.trip_delete_get);

module.exports = router;
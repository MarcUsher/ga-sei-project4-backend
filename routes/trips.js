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

module.exports = router;
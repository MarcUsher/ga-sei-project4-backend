const express = require('express');
var methodOverride = require('method-override');
const router = express.Router();
const isLoggedIn = require("../helper/isLoggedIn");

// // Require MULTER for image upload
// const multer = require('multer')
// let path = require('path')

// router.use(methodOverride('_method'));
// router.use(express.json());


// // Trip Image Gallery File Storage & File naming 
// // (NB. This may need to be changed to back-end location for deployment as these won't be linked together anymore)

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//       callback(null, "./../triptips-FE/public/img/tripImages")
//     }, 
//     filename: (req, file, callback) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       callback(null, uniqueSuffix + path.extname(file.originalname));
//     }
//   })
  
// // Full Multer Upload Info & filetype check
// const upload = multer({ storage: storage });

const parser = require('../helper/cloudinary.config')

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
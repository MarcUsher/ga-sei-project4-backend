const express = require('express');
const router = express.Router();

router.use(express.json());

const countryCtrl = require("../controllers/countries");

router.get("/country/index", countryCtrl.country_index_get)

module.exports = router;
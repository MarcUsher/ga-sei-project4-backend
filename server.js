const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Importing Routes
const authRouter = require('./routes/auth');
const tripRouter = require("./routes/trips");
const countryRouter = require('./routes/countries')


const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Mounting Routes
app.use('/', authRouter);
app.use('/', tripRouter);
app.use('/', countryRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));


mongoose.connect(process.env.mongoDBURL, 
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("mongodb connected!")
    }
);
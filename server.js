const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Importing Routes
const authRouter = require('./routes/auth');

// Mounting Routes
app.use('/', authRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));


mongoose.connect(process.env.mongoDBURL, 
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log("mongodb connected!")
    }
);
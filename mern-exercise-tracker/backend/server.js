

const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');



require('dotenv').config();

//creating the express server
const app = express();
const port = process.env.PORT || 5000;

//cors middleware to parse json
app.use(cors());
app.use(express.json());

//for mongodb connection
//database uri to get from the mongodb database dashboard
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})


// starts the server
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});



"use strict"

require('./connection/mysqldb')
const express = require('express')
const app = express()
require('dotenv').config();

const cors = require('cors');
const bodyparser = require('body-parser')


app.use(cors());

app.use(bodyparser.json());
app.use(express.json());

// ROUTES REQUIRE
require("./Routes")(app)



// Middlewre call
app.get("/", async (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});



// SERVER CONNECT
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running On Port",process.env.PORT);
    }
})
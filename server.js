const express = require("express");
var fs = require("fs");
const mime = require('mime-types');
const systempath = require('path');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.use('/db', require('./routes/resorce-route'));

app.listen(3000, () => console.log("Server is running in port 3000!"));
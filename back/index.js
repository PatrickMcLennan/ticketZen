"use strict";
var express = require('express');
var app = express();
var db = require('./db');
var PORT = 3000;
db.connect(function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    else {
        app.listen(PORT, function () {
            console.log("Connected Successfully on Port " + PORT);
        });
    }
});

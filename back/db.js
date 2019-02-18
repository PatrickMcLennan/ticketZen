"use strict";
var mongoose = require('mongoose');
var dbName = 'ticket_zen';
var url = 'mongodb://localhost:27017';
var mongoOptions = { useNewUrlParser: true };
var state = {
    db: null
};
var connect = function (cb) {
    if (state.db) {
        cb();
    }
    else {
        mongoose.connect(url, mongoOptions, function (err, client) {
            if (err) {
                cb(err);
            }
            else {
                state.db = client.db(dbName);
                cb();
            }
        });
    }
};
module.exports = { connect: connect };

const mongoose = require('mongoose');
const dbName: string = 'ticket_zen';
const url: string = 'mongodb://localhost:27017';
const mongoOptions = { useNewUrlParser: true };

const state = {
  db: null
};

const connect = cb => {
  if (state.db) {
    cb();
  } else {
    mongoose.connect(url, mongoOptions, (err, client) => {
      if (err) {
        cb(err);
      } else {
        state.db = client.db(dbName);
        cb();
      }
    });
  }
};

module.exports = { connect };

const express = require('express');
const app = express();
const db = require('./db');
const PORT = 3000;

db.connect(err => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      console.log(`Connected Successfully on Port ${PORT}`);
    });
  }
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const socket = require('socket.io');

const config = require('./config/db');

// Use Node's default promise instead of Mongoose's promise library
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.db, { useMongoClient: true });
let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');
});

db.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

// Instantiate express
const app = express();

// Don't touch this if you don't know it
// We are using this for the express-rate-limit middleware
// See: https://github.com/nfriedly/express-rate-limit
app.enable('trust proxy');

// Set public folder using built-in express.static middleware
app.use(express.static('public'));

// Set body parser middleware
app.use(bodyParser.json());

// Enable cross-origin access through the CORS middleware
// NOTICE: For React development server only!

app.use(cors());




// Use express's default error handling middleware
app.use((err, req, res, next) => {
  res.sendFile(path.join(__dirname, 'Client/src/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});

// Start the server
const port = process.env.PORT || 3002;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Initialize routes middleware
// app.use(function(err, req,res,next){
//   req.db = db;
//   //next(err);
// });
app.use('/api1', require('./Client/src/routes/caseoverview'));
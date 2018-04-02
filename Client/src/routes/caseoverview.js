const express = require('express');
const router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const stringCapitalizeName = require('string-capitalize-name');
const config = require('../../../config/db');
const User = require('../../../models/caseoverview');


router.post('/api/dashboard', function(req, res, next) {
  var item = {
    username: req.body.content
  };

  mongo.connect(config.db, function(err, db) {
    assert.equal(null, err);
    db.collection('casenamelist').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/');
});

module.exports = router;


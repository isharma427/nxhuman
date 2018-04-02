const express = require('express');
const router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const stringCapitalizeName = require('string-capitalize-name');
//const config = require('../../../config/db');
const User = require('../../../models/caseoverview');
const url = 'mongodb://nxhuman:hubal2018@ds115219.mlab.com:15219/heroku_cj4zfrd2'


router.post('/api/dashboard', function(req, res, next) {
  var item = {
    name: item
  };

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection("casenamelist").insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/');
});

router.get('/api/getcaseuserdata', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('user-data').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});


module.exports = router;


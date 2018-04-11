const express = require('express');
const router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const stringCapitalizeName = require('string-capitalize-name');
//const config = require('../../../config/db');
const User = require('../../Server/models/caseoverview');
const url = 'mongodb://nxhuman:hubal2018@ds115219.mlab.com:15219/heroku_cj4zfrd2'
var db =require('mongodb')(url);
var mongodb= require('mongodb');
var MongoClient= mongodb.MongoClient;


router.post('test', function(req, res, next) {
  var item = "received data"

  MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  console.log("Connected successfully to server");
  var db = client.db('mytestingdb');

    db.collection("casenamelist").insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      client.close();
      res.json(item);
    });
  });


  res.redirect('/');
});
 
router.get('test', function(req, res, next) {
  var resultArray = [];
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    var db = client.db('mytestingdb');
  
    var cursor = db.collection('caseitemlist').find();

      client.close();
      res.cursor;
    });
  });
; 

module.exports = router;


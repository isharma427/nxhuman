import App from "containers/App/App.jsx";
var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express
const indexRoutes = [{ path: "/", component: App }];
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:3001/test';

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('Dashboard');
});

router.get('/', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('initial-case-data').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null,err);
      resultArray.push(doc);
    }, function(){
      db.close();
      res.render('Dashboard', {finalCaseName: resultArray});
    });
  });

 });

 router.post('/insert', function(req, res, next) {
      var caseID = {
        caseID: req.body.caseid,
      }

      mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('initial-case-data').insertOne(caseID, function(err, result) {
          assert.equal(null, err);
          console.log('Item inserted');
          db.close();
        });
      })

      res.redirect('/');

 });

 router.post('/update', function(req, res, next) {

});

router.post('/delete', function(req, res, next) {
});

module.exports = router;

export default indexRoutes;
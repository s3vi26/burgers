let express = require('express');
let methodOverride = require('method-override');
let bodyParser = require('body-parser');

let router = express.Router();
let burger = require('../models/burger.js');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function (req, res) {
  burger.insertOne(['burger_name','devoured'], [req.body.burger_name, req.body.devoured], function () {
    res.redirect('/burgers');
  });
});

router.put('/burgers/update/:id', function (req, res) {
  let condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;
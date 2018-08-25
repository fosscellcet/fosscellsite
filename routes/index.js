var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FOSS Site' });
});

router.use('/team',require('./team'))

module.exports = router;

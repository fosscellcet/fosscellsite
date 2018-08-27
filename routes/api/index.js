var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'FOSS API' });
});
router.use('/auth',require('./auth'))
router.use('/team', require('./team'))
router.use('/blog', require('./blog'))
router.use('/event',require('./event'))
router.use('/contact',require('./contact'))
router.use('/about', require('./about'))
module.exports = router;
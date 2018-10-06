var express = require('express')
var router = express.Router()
var path = require('path');
var indexPath = '../../views/index.html'
var indexResolved = path.join(__dirname,indexPath)
router.get('/', (req, res) => {
    res.sendFile(indexResolved)
})
router.use('/blog', require('./blog'))
module.exports = router
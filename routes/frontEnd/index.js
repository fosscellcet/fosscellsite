var express = require('express')
var router = express.Router()
router.get('/', (req, res) => {
    res.send({ "Page": "Landing Page" })
})
router.use('/blog', require('./blog'))
module.exports = router
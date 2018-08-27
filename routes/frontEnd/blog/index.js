var express = require('express')
var router = express.Router()
var filePath = '/views/test.html'
var resolvedPath = '/home/bilal/program/FOSS/fosscellsite' + filePath
router.get('/', (req, res) => {
    res.sendFile(resolvedPath)
})
module.exports = router
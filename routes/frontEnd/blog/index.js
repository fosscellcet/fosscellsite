var express = require('express')
var router = express.Router()
var filePath = '/views/pages/blog/index.html'
var resolvedPath = '/home/bilal/program/FOSS/fosscellsite' + filePath
router.get('/', (req, res) => {
    res.sendFile(resolvedPath)
})
module.exports = router
var express = require('express')
var router = express.Router()
var path = require('path')
var filePath = '../../../views/pages/blog/index.html'
var resolvedPath = path.join(__dirname, filePath) 
router.get('/', (req, res) => {
    res.sendFile(resolvedPath)
})
module.exports = router
var express = require('express')
var router = express.Router()
var controller = require('../../controllers/blogController')

router.get('/', (req, res, next) => {
    controller.getLatestPosts(1)
        .then((posts) => {
            console.log("THe posts are" + posts)
            res.render('blog', { posts })
        }).catch((err) => {
            console.log(err)
            res.render('error', { 'message': 'An error has occurred', error: err })
        })
})

module.exports = router
var express = require('express')
var router = express.Router()
var controller = require('../../../controllers/blogController')

router.get('/', (req, res, next) => {
    controller.getLatestPosts(1)
        .then((posts) => {
            console.log("THe posts are" + posts)
<<<<<<< HEAD:routes/blog/index.js
            res.json({ 'posts' : posts })
=======
            res.json({ posts })
>>>>>>> 7125d92ce2a711fd3cb6a85fd9363be31f264bce:routes/api/blog/index.js
        }).catch((err) => {
            console.log(err)
            res.json({ 'message': 'An error has occurred', 'error': err })
        })
})

router.get('/:id',(req,res,next) => {
    controller.getPostByID(req.params.id)
        .then((post) => {
            console.log("The post is" + post)
            res.json({ 'post' : post })
        })
        .catch((err) => {
            console.log(err)
            res.json({ 'message': 'An error has occurred', 'error': err })
        })
})
module.exports = router
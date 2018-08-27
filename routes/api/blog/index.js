var express = require('express')
var router = express.Router()
var controller = require('../../../controllers/blogController')

router.get('/', (req, res, next) => {
    controller.getLatestPosts(1)
        .then((posts) => {
            res.json({ posts })
        }).catch((err) => {
            res.json({ 'message': 'An error has occurred', 'error': err })
        })
})

router.get('/:id', (req, res, next) => {
    controller.getPostByID(req.params.id)
        .then((post) => {
            res.json({ 'post': post })
        })
        .catch((err) => {
            res.json({ 'message': 'An error has occurred', 'error': err })
        })
})
router.post('/', (req, res, next) => {
    controller.createPost(req.body.post)
        .then((result) => {
            res.json({ result })
        }).catch((err) => {
            res.json({ err })
        });
})
router.put('/:id', (req, res, next) => {
    controller.updatePost(req.params.id, req.body.post)
        .then((result) => {
            res.json({ result })
        }).catch((err) => {
            res.json({ err })
        });
})
module.exports = router
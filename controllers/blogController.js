var model = require('../models').blog
var Promise = require('bluebird')

blogController = {}

blogController.getLatestPosts = (page) => new Promise((resolve, reject) => {
    model.findAll({
        offset: (page - 1) * 10,
        limit: 10,
        // order: 'postDate DESC'
    }).then((posts) => {
        resolve(posts)
    }).catch((err) => {
        reject(err)
    })
})
module.exports = blogController
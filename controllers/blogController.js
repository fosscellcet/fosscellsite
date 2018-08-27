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

blogController.getPostByID = (postid) => new Promise((resolve, reject) => {
    model.findAll({
        where: {
            id: postid
        }
    }).then((post) => {
        resolve(post);
    }).catch((err) => {
        reject(err);
    })
})
blogController.createPost = (post) => new Promise((resolve, reject) => {
    model.create(post).then((result) => {
        resolve(result)
    }).catch((err) => {
        reject(err)
    });
})
blogController.updatePost = (post) => new Promise((resolve, reject) => {
    console.log(post)
    model.update(post, {
        where: {
            id: post.id
        }
    }).then((post) => {
        resolve(post)
    }).catch((err) => {
        reject(err)
    });
})
module.exports = blogController
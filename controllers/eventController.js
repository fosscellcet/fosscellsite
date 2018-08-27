var Promise = require('bluebird')
var model = require('../models').event

var eventController = {}

eventController.getLatestEvents = (page) => new Promise((resolve, reject) => {
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

eventController.getEventByDate = (postDate) => new Promise((resolve,reject) => {
    model.findAll({
        where:{
            date : postDate
        }
    }).then((post) => {
        resolve(post);
    }).catch((err) => {
        reject(err);
    })
})
module.exports = eventController
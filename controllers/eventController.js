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

eventController.getEventByDate = (postDate) => new Promise((resolve, reject) => {
    model.findAll({
        where: {
            date: postDate
        }
    }).then((post) => {
        resolve(post);
    }).catch((err) => {
        reject(err);
    })
})
eventController.createevent = (event) => new Promise((resolve, reject) => {
    model.create(event)
        .then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        })
})
eventController.updateEvent = (id, event) => new Promise((resolve, reject) => {
    model.update(event, {
        where: {
            id: id
        }
    }).then((updated) => {
        resolve(updated)
    }).catch((err) => {
        reject(err)
    });
})
eventController.deleteEvent = (event) => new Promise((resolve, reject) => {
    model.destroy({
        where: {
            id: event.id
        }
    }).then((event) => {
        resolve(event)
    }).catch((err) => {
        reject(err)
    });
})
module.exports = eventController
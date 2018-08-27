var model = require('../models').gallery;
var Promise = require('bluebird');
const Joi = require('joi');

const schema = Joi.object().keys({
    name : Joi.string().required(),
    caption : Joi.string().required(),
    event_id : Joi.number().required()
})

galleryController = {}

galleryController.getAllImages = () => new Promise((resolve, reject) => {
    model.findAll().then((images) => {
        resolve(images)
    })
    .catch((err) => {
        reject(err);
    })
})

galleryController.Id = (imgId) => new Promise((resolve, reject) => {
    model.findAll({
        where : {
            id : imgId
        }
    })
    .then((images) => {
        resolve(images)
    })
    .catch((err) => {
        reject(err);
    })
})

galleryController.getImageByEvent = (eventId) => new Promise((resolve, reject) => {
    model.findAll({
        where : {
            event_id : eventId
        }
    })
    .then((images) => {
        resolve(images)
    })
    .catch((err) => {
        reject(err);
    })
})

galleryController.addImage = (data) => new Promise((resolve, reject) => {
    Joi.validate(data, schema).then((res) => {
        model.create(data).then((newImage) => {
            resolve(newImage)
        })
        .catch((err) => {
            reject(err);
        })
    })
    .catch((err) => {
        reject(err);
    })
})

galleryController.updateImage = (imgId, data) => new Promise((resolve, reject) => {
    Joi.validate(data, schema).then((res) => {
        model.update(data,{
            where : {
                id : imgId
            }
        })
        .then((image) => resolve(image))
        .catch((err) => reject(err))
    })
    .catch((err) => reject(err))
})

galleryController.deleteImage = (imgId) => new Promise((resolve, reject) => {
    model.destroy({
        where : {
            id : imgId
        },
        force : true
    }).then(() => {
        resolve();
    }).catch((err) => {
        reject(err)
    })
})
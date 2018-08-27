var Promise = require('bluebird');
var bcrypt = require('bcrypt');
var model = require('../models').user;
var Joi = require('joi')

userController = {}

userController.getUser = (user, pass) => new Promise((resolve, reject) => {
    model.findOne({
        where : { username : user}
    })
    .then((user) => {
        bcrypt.compare(pass, user.password,(err,res) => {
            if(res){
                resolve(user);
            }
            else{
                reject(err);
            }
        })
    })
    .catch((err) => {
        reject(err);
    })
})

userController.getUserById = (userid) => new Promise((resolve, reject) => {
    model.findOne({
        where : { id : userid}
    })
    .then((user) => {
        resolve(user);
    })
    .catch((err) => {
        reject(err);
    })
})

userController.addUser = (user) => new Promise((resolve, reject) => {
    const schema = Joi.object().keys({
        username : Joi.string().required(),
        password : Joi.string().required(),
        userType : Joi.string().required()
    })

    Joi.validate(user, schema)
        .then((res) => {
            bcrypt.hash(user.password, 10, (err, hash) => {
                if(err){
                    reject(err);
                }
                else{
                    user.password = hash;
                }
                model.create(user)
                    .then((user) => {
                        resolve(user)
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        })
        .catch((err) => {
            reject(err);
        })
})

module.exports = userController
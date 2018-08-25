var model = require('../models').team;
var Promise = require('bluebird');


teamController = {};

teamController.getAllTeamMembers = () => new Promise((resolve,reject) => {
        model.findAll()
            .then((teamMembers) => {
                resolve(teamMembers);
            })
            .catch((err) => {
                reject(err);
            });
    });


module.exports = teamController;

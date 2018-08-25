var model = require('../models').team;
var Promise = require('bluebird');


teamController = {};

teamController.getAllTeamMembersBySubTeam = () => new Promise((resolve,reject) => {
    model.findAll({
        where : { subTeam : 'Main' }
    })
    .then((main) => {
        model.findAll({
            where : { subTeam : 'Coding' }
        })
        .then((coding) => {
            model.findAll({
                where : { subTeam : 'Women' }
            })
            .then((women) => {
                model.findAll({
                    where : { subTeam : 'DepRep' }
                })
                .then((deprep) => {
                    model.findAll({
                        where : { subTeam : 'Web' }
                    })
                    .then((web) => {
                        model.findAll({
                            where : { subTeam : 'Tech' }
                        })
                        .then((tech) => {
                            model.findAll({
                                where : { subTeam : 'Project' }
                            })
                            .then((project) => {
                                model.findAll({
                                    where : { subTeam : 'Membership' }
                                })
                                .then((membership) => {
                                    members = { main, coding, women, deprep, web, tech, project, membership};
                                    resolve(members);
                                })
                                .catch((err) => {
                                    reject(err);
                                });
                            })
                            .catch((err) => {
                                reject(err);
                            });
                        })
                        .catch((err) => {
                            reject(err);
                        });
                    })
                    .catch((err) => {
                        reject(err);
                    });
                })
                .catch((err) => {
                    reject(err);
                });
            })
            .catch((err) => {
                reject(err);
            });
        })
        .catch((err) => {
            reject(err);
        });
    })
    .catch((err) => {
        reject(err);
    });
});


module.exports = teamController;

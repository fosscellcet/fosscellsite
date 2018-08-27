var model = require('../models').team;
var Promise = require('bluebird');
const Joi = require('joi');

const schema = Joi.object().keys({
    name : Joi.string().required(),
    designation : Joi.string().required(),
    subTeam : Joi.string().required(),
    quote : Joi.string().required(),
    image : Joi.string().required()
})


teamController = {};

teamController.getAllTeamMembers = () => new Promise((resolve, reject) => {
    model.findAll({
            where: { subTeam: 'Main' }
        })
        .then((main) => {
            model.findAll({
                    where: { subTeam: 'Coding' }
                })
                .then((coding) => {
                    model.findAll({
                            where: { subTeam: 'Women' }
                        })
                        .then((women) => {
                            model.findAll({
                                    where: { subTeam: 'DepRep' }
                                })
                                .then((deprep) => {
                                    model.findAll({
                                            where: { subTeam: 'Web' }
                                        })
                                        .then((web) => {
                                            model.findAll({
                                                    where: { subTeam: 'Tech' }
                                                })
                                                .then((tech) => {
                                                    model.findAll({
                                                            where: { subTeam: 'Project' }
                                                        })
                                                        .then((project) => {
                                                            model.findAll({
                                                                    where: { subTeam: 'Membership' }
                                                                })
                                                                .then((membership) => {
                                                                    members = { main, coding, women, deprep, web, tech, project, membership };
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

teamController.getTeamMemberById = (memberId) => new Promise((resolve, reject) => {
    model.findAll({
        where : {
            id : memberId
        }
    }).then((members) => {
        resolve(members);
    }).catch((err) => {
        reject(err);
    })
})

teamController.getTeamMembersBySubTeam = (reqSubTeam) => new Promise((resolve,reject) => {
    model.findAll({
        where : {
            subTeam : reqSubTeam
        }
    }).then((members) => {
        resolve(members);
    }).catch((err) => {
        reject(err);
    })
})

teamController.addTeamMember = (data) => new Promise((resolve, reject) => {
    Joi.validate(data,schema).then((res) => {
        model.create(data).then((member) => {
            resolve(member);
        }).catch((err) => {
            reject(err);
        })
    }).catch((err) => {
        reject(err);
    })
})

teamController.updateTeamMember = (memberId, data) => new Promise((resolve, reject) => {
    Joi.validate(data, schema).then((res) => {
        model.update(data,{
            where : {
                id : memberId
            }
        })
        .then((member) => resolve(member))
        .catch((err) => reject(err))
    })
    .catch((err) => reject(err))
})

teamController.deleteMember = (memberId) => new Promise((resolve,reject) => {
    model.destroy({
        where : {
            id : memberId
        },
        force : true
    }).then(() => {
        resolve();
    }).catch((err) => {
        reject(err)
    })
})

module.exports = teamController;
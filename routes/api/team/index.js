var express = require('express');
var router = express.Router();

const passport = require('passport')
require('../../../middlewares/passport')

var controller = require('../../../controllers/teamController')

router.get('/', (req, res, next) => {
    controller.getAllTeamMembers()
        .then((members) => {
            console.log('All members are :\n')
            console.log({ members })
            res.json({ 'members': members });
        })
        .catch((err) => {
            console.log(err)
            res.json({ 'message': 'An error has occurred', 'error': err })
        });
});

router.get('/subTeam/:subTeam', (req,res,next) => {
    controller.getTeamMembersBySubTeam(req.params.subTeam).then((members) => {
        console.log('The members are ' + members);
        res.json({ 'members' : members})
        
    })
})

router.get('/:id', (req,res,next) => {
    controller.getTeamMemberById(req.params.id).then((members) => {
        console.log('The members are ' + members);
        res.json({ 'members' : members})
        
    })
})

router.post('/',(req,res,next) => {
    data = {
        name : req.body.name,
        designation : req.body.designation,
        subTeam : req.body.subTeam,
        quote : req.body.quote,
        image : req.body.image
    }
    controller.addTeamMember(data).then((newMember) => {
        console.log("New member added " + newMember);
        res.json({
            "message" : "New member added",
            "member" : newMember
        })
        .catch((err) => {
            console.log("Error Thrown \n");
            console.log(err);
            res.json({
                "status" : "Error encountered",
                "message" : err.message
            })
        })
        
    })
})

router.put('/:id',(req,res,next) => {
    data = {
        name : req.body.name,
        designation : req.body.designation,
        subTeam : req.body.subTeam,
        quote : req.body.quote,
        image : req.body.image
    }
    controller.updateTeamMember(req.params.id, data).then((result) => {
        controller.getTeamMemberById(req.params.id).then((updatedMember) => {
            console.log("New member added " + updatedMember);
            res.json({
                "message" : "New member added",
                "member" : updatedMember
            })
        })
        .catch((err) => {
            console.log("Error Thrown \n");
            console.log(err);
            res.json({
                "status" : "Error encountered",
                "message" : err.message
            })
        })
        
    })
    .catch((err) => {
        console.log("Error Thrown \n");
        console.log(err);
        res.json({
            "status" : "Error encountered",
            "message" : err.message
        })
    })
})

router.delete('/:id',(req, res, next) => {
    controller.getTeamMemberById(req.params.id).then((delMember) => {
        controller.deleteMember(req.params.id).then(() => {
            console.log("The member is deleted : " + delMember)
            res.json({
                "message" : "member deleted",
                "member" : delMember
            })
        })
        .catch((err) => {
            console.log("Error Thrown \n");
            console.log(err);
            res.json({
                "status" : "Error encountered",
                "message" : err.message
            })
        })
    })
    .catch((err) => {
        console.log("Error Thrown \n");
        console.log(err);
        res.json({
            "status" : "Error encountered",
            "message" : err.message
        })
    })
})

module.exports = router;
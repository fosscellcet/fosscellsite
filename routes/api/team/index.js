var express = require('express');
var router = express.Router();

var controller = require('../../../controllers/teamController')

router.get('/', (req, res, next) => {
    controller.getAllTeamMembersBySubTeam()
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

module.exports = router;
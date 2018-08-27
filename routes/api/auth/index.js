var express = require('express');
var router = express.Router();
var controller = require('../../../controllers/userController');

const jwt = require('jsonwebtoken');
const passport = require('passport');
const secret = require('../../../config/main').secret

router.post('/',(req,res,next) => {
    user = {
        username : req.body.username,
        password : req.body.password,
        userType : req.body.userType
    }
    controller.addUser(user).then((newUser) => {
        console.log("New user " + newUser.username + "added")
        res.send({
            "message" : "New User created"
        })
    })
    .catch((err) => {
        console.log(err);
        res.send({
            "message" : "Error encountered",
            "error" : err.message
        })
    })
    
})

router.post('/login', function (req, res, next){
    passport.authenticate('local', {session : false}, (err, user, info) => {
        console.log(err);
        if(err || !user){
            return res.status(400).json({
                message : info ? info.message : 'Login failed',
                user : user
            })
        }
        req.login(user, {session:false}, (err) => {
            if(err){
                res.send(err);
            }

            const token = jwt.sign({ user }, secret)

            return res.json({user, token})
        })
    })
    (req, res)

})

module.exports = router
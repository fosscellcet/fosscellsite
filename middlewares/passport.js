const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;

const controller = require('../controllers/userController');
const secret = require('../config/main').secret;

passport.use( new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password'
    },
    function(username, password, cb){
        return controller.getUser(username, password).then((user) => {
            if(!user){
                return cb(null, false, {'message' : 'Incorrect username or password'})
            }

            return cb(null, user, {'message' : 'Logged In Succesfully'})
        })
        .catch((err) => {
            return cb(err);
        })
    }
))

passport.use(new JWTStrategy({
        jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey : secret
    },
    function (jwtPayload, cb){
        return controller.getUserById(jwtPayload.id).then((user) => {
            return cb(null, user);
        })
        .catch((err) => {
            return cb(err);
        })
    }
))
var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');


router.get('/', passport.authenticate('jwt', {session : false}, (req, res) => {
  res.send("Yay this is a protected route")  
}))
var express = require('express')
var router = express.Router()
var controller = require('../../../controllers/aboutController')


router.get('/',(req, res, next) => {
    controller.getInfo().then((about) => {
        console.log('About info :\n')
        console.log(about)
        res.json({ 'about': about });
    })
    .catch((err) => {
        console.log(err)
        res.json({ 'message': 'An error has occurred', 'error': err })
    })
})

router.put('/', (req,res,next) => {
    controller.updateInfo(req.body).then((about) => {
        console.log('About info :\n')
        console.log(about)
        res.json({ 'about': about });
    })
    .catch((err) => {
        console.log(err)
        res.json({ 'message': 'An error has occurred', 'error': err })
    })
})

module.exports = router
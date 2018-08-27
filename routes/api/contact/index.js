var express = require('express')
var router = express.Router()
var controller = require('../../../controllers/contactController')


router.get('/',(req, res, next) => {
    controller.getContactInfo().then((contact) => {
        console.log('Contact info :\n')
        console.log(contact)
        res.json({ 'contact': contact });
    })
    .catch((err) => {
        console.log(err)
        res.json({ 'message': 'An error has occurred', 'error': err })
    })
})

router.put('/', (req,res,next) => {
    controller.updateContactInfo(req.body).then((contact) => {
        console.log('Contact info :\n')
        console.log(contact)
        res.json({ 'contact': contact });
    })
    .catch((err) => {
        console.log(err)
        res.json({ 'message': 'An error has occurred', 'error': err })
    })
})

module.exports = router
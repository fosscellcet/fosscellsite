var express = require('express')
var router = express.Router()
var controller = require('../../../controllers/eventController')

router.get('/', (req, res, next) => {
    controller.getLatestEvents(1)
        .then((events) => {
            res.json(events)
        }).catch((err) => {
            res.json(err)
        });
})
router.get('/:date', (req, res, next) => {
    console.log(req.params.date)
    controller.getEventByDate(req.params.date)
        .then((events) => {
            res.json({ events })
        }).catch((err) => {
            res.json({ err })

        });
})
router.post('/', (req, res, next) => {
    controller.createevent(req.body.event)
        .then((event) => {
            res.json({ event })
        }).catch((err) => {
            res.json({ err })
        });

})
router.put('/', (req, res, next) => {
    controller.updateEvent(req.body.event)
        .then((event) => {
            res.json({ event })
        }).catch((err) => {
            res.json({ err })
        });
})
router.delete('/', (req, res, next) => {
    controller.deleteEvent(req.body.event)
        .then((result) => {
            res.json({ result })
        }).catch((err) => {
            res.json({ err })
        });
})
module.exports = router
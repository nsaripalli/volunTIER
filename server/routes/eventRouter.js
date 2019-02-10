let express = require('express');
let router = express.Router();
let db = require('../database');

router.get('/all', function (req, res) {
    db.getEvents().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.send(error);
    })
});

router.post('/', function (req, res) {
    let event_id = req.body.event_id;
    db.getEvent(event_id).then((result) => {
        res.send(result)
    }).catch((error) => {
        res.send(error);
    });
});

module.exports = router;
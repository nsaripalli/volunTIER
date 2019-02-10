let express = require('express');
let router = express.Router();
let db = require('../database');

router.get('/global', function (req, res) {
    db.getLeaderboard().then((result) => {
        res.send(result)
    }).catch((error) => {
        console.log(error);
    })
});

router.post('/friends', function (req, res) {
    let user_id = req.body.user_id;
    db.getFriendLeaderboard(user_id).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log(error)
    })
});

module.exports = router;
let express = require('express');
let router = express.Router();
let db = require('../database');
let auth = require('../authentication');

router.post('/register', function (req, res) {
    if (req.body.name && req.body.email
        && req.body.username && req.body.password && req.body.birthday) {
        let user = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            birthday: req.body.birthday
        };
        auth.registerUser(user, function (err, result) {
            if (err) {
                res.send('ERROR')
            } else {
                res.send('Success!')
            }
        });
    }
});

router.post('/login', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    auth.authenticateLogin(username, password);
});

router.post('/checkin', function (req, res) {

});

router.post('/account', function (req, res) {
    db.getUserInfo()
});

module.exports = router;
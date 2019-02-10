let db = require('./database');
let bcrypt = require('bcrypt');
const saltRounds = 10;

function registerUser(user) {
    bcrypt.hash(user.password, saltRounds).then((hash) => {
        db.addUser(user.name, user.username, hash, user.email, user.birthday).then((result) => {
            console.log('success');
            return result;
        }).catch((err) => {
            return err;
        })
    }).catch((err) => {
        console.log('Error hashing.')
    })
}

function authenticateLogin(username, password) {
    db.getUserInfo(username).then((result) => {
        bcrypt.compare(password, result.password).then(function (res) {
            if (res) {
                console.log('auth good');
                return callback(null, result);
            } else {
                console.log('begone');
                return callback();
            }
        })
    }).catch((err) => {
        console.log('Error with get user info')
    })
}

module.exports = { registerUser, authenticateLogin };
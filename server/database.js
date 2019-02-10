let mysql = require('mysql');
let connection = mysql.createConnection({
    host: '35.203.43.106',
    user: 'root',
    password: 'nithin',
    database: 'mydb'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connection successful!')
});

module.exports = {

    getEvent: function (event_id) {
        return new Promise((resolve, reject) => {
            connection.query('select name, datetime, est_time, lat, lon, orgname from event\n' +
                'join organization o on event.organization_idorganization = o.idorganization\n' +
                'where event_id = ?', event_id, function (err, result, fields) {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        })
    },
    getEvents: function () {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * from event', function (err, result, fields) {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        })
    },
    getUserInfo: function (username) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user FROM volunteer WHERE username = ?', username, function (err, result, fields) {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        })
    },
    getFeaturedEvents: function() {
        return new Promise((resolve, reject) => {
            connection.query('GET_RANDOM_EVENTS()', function (err, result, fields) {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            });
        })
    },
    getGlobalLeaderboard: function () {
        return new Promise((resolve, reject) => {
            connection.query('select name, username, points from volunteer order by points desc limit 10;',
                function (err, result, fields) {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(err);
                    }
                });
        })
    },
    getFriendLeaderboard: function (userid) {
        return new Promise((resolve, reject) => {
            connection.query('CALL GET_FRIEND_LEADERBOARD(?)', userid, function (err, result, fields) {
                if (!err) {
                    resolve(result);
                } else {
                    reject(err);
                }
            })
        })
    },
    addUser: function (name, username, passHash, email, birthday) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT into volunteer (name, username, password, email, birthday) VALUES(?,?,?,?,?)',
                [name, username, passHash, email, birthday], function (err, result, fields) {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(err)
                    }
                })
        })
    }
};
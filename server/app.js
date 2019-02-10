let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let session = require   ('express-session');
let cors = require('cors');

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let eventRouter = require('./routes/eventRouter');
let userRouter = require('./routes/userRouter');
let leaderboardRouter = require('./routes/leaderboardRouter');

app.use('/event', eventRouter);
// app.use('/user', userRouter);
app.use('/leaderboard', leaderboardRouter);

app.use(session({
    secret: 'toilet paper',
    saveUninitialized: false,
    resave: true
}));

app.listen(8080, function () {
    console.log('listening on 8080...')
});

module.exports = app;
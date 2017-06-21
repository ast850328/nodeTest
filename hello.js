var express = require('express');
var router = require('./users');

var app = express();

/*
app.get('/', function(req, res) {
    res.send('Hello Get');
});

app.get('/users', function(req, res) {
    res.send('Hello Users');
});

app.post('/', function(req, res) {
    res.send('Hello Post');
});
*/
app.use('/', router);

app.listen(3000, function() {
    console.log('http://localhost:3000');
});

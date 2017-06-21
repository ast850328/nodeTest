var express = require('express');
var router = express.Router();

router.get('/users', function(req, res) {
	res.send('Get /users');
});

router.post('/users', function(req, res) {
	res.send('Post /users');
});

module.exports = router;
//QUX route
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Qux Aaron Dean'
    });
});

router.get('/you-rang', (request, response) => {
    response.send({'result': 'success', route: 'you-rang', server: 'qux'});
});

module.exports = router;

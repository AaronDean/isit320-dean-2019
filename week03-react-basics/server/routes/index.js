var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Rest Basics Server Dean'
    });
});
router.get('/you-rang', function(request, response){
    const message = {'result' : 'success', 'program': 'server', 'file':'index.js'};
    response.send(message);
})
module.exports = router;

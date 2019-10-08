// Server
var express = require('express');
var router = express.Router();
const requester = require('request');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/you-rang', function(request, response){
    const message = {'result' : 'success', 'program': 'server', 'file':'index.js'};
    response.send(message);
});

router.get('/qux/you-rang', function(request, response, next) {
    requester('http://54.191.205.91:30027/you-rang').pipe(response);
});

module.exports = router;

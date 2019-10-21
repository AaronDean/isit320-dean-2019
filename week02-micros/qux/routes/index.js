const express = require('express');
const router = express.Router();
const {checkoutBranch} = require('./exec-git.js');


/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Qux-Dean'
    });
});

router.get('/you-rang', (request, response) => {
    response.send({
        result: 'qux you rang',
        server: 'qux',
        directory: __dirname,
        hostname: process.env.HOSTNAME,
        home: process.env.HOME
    });
});

router.get('/checkoutBranch', (request, response) => {
    checkoutBranch(response , 'week03');
});

module.exports = router;

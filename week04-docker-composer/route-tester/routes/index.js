var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Route Tester Aaron Dean'
    });
});

router.get('/you-rang', function(req, res){
    const rangData ={
        program: "route-tester",
        file: "routes/index.js",
        result: "route-tester",
        server: "route-tester",
        directory: __dirname,
        hostname: process.env.HOSTNAME,
        home: process.env.HOME
    };
    res.send(rangData);
});

module.exports = router;

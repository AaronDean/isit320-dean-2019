var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'System Environment Aaron Dean'
    });
});

router.get('/you-rang', function(req, res){
    const rangData ={
        "program": "system-environment",
        "file": "routes/index.js",
        "result": "system-environment",
        "server": "system-environment",
        "directory": __dirname,
        "hostname": process.env.HOSTNAME,
        "home": process.env.HOME
    };
    res.send(rangData);
});

module.exports = router;

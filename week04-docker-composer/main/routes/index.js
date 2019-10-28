var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Main Aaron Dean'
    });
});

router.get('/system-environment/you-rang',function(req,res){
    requester('http:168.156.46.245:30028/you-rang').pipe(res);
});

router.get('/system-environment/checkoutBranch',function(req,res){
    requester('http:168.156.46.245:30028/getBranches').pipe(res);
});

router.get('/route-tester/you-rang',function(req,res){
    requester('http:168.156.46.245:30029/you-rang').pipe(res);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const requester = require('request');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Main Aaron Dean'
    });
});

router.get('/system-environment/you-rang',function(req,res){
    requester('http://system-environment:30028/you-rang').pipe(res);
});

router.get('/system-environment/getBranch',function(req,res){
    requester('http://system-environment:30028/getBranches').pipe(res);
});

router.get('/system-environment/getNewRepo',function(req,res){
    requester('http://system-environment:30028/getNewRepo').pipe(res);
});

router.get('/route-tester/you-rang',function(req,res){
    requester('http://route-tester:30029/you-rang').pipe(res);
});

module.exports = router;

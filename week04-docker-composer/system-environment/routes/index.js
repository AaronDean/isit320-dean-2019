const express = require('express');
const router = express.Router();
const debug = require('debug')('system-environment-index');
const { workingDir, getBranches, getNewRepo } = require('./exec-git');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'System Environment Aaron Dean'
    });
});

router.get('/you-rang', function(req, res){
    const rangData ={
        program: "system-environment",
        file: "routes/index.js",
        result: "system-environment",
        server: "system-environment",
        directory: __dirname,
        hostname: process.env.HOSTNAME,
        home: process.env.HOME,
        workingDir: workingDir
    };
    res.send(rangData);
});

router.get('/getBranches',function(req, res){
    debug('Get Branches called');
    getBranches(res).catch(function(e){
        console.log(e);
    })
});

router.get('/getNewRepo',function(req, res){
    getNewRepo(res).catch(function(e){
        console.log(e);
    })
});

module.exports = router;

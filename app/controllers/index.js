/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    _ = require('underscore');


exports.render = function(req, res) {
    res.render('index', {
        user: req.user ?
            JSON.stringify({
                id: req.user._id,
                name: req.user.name,
                username: req.user.username,
                email:req.user.email,
                team: req.user.team
            }) : "null"
    });
};
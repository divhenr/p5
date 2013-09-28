
var mongoose = require('mongoose')
  , Player = mongoose.model('Player')
  , _ = require('underscore');


  /**
 * Create player
 */

exports.create = function (req, res) {
  var player = new Player(req.body)
  player.save()
  res.jsonp(player)
}


exports.show = function (req, res) {
	res.jsonp(req.player);
}

/**
 * Find player by id
 */

exports.player = function (req, res, next, id) {
var player = mongoose.model('Player')
 
  Player.findOne({ _id : id }).populate("team").exec(function (err, player) {
    if (err) return next(err)
    if (!player) return next(new Error('Failed to load player ' + id))
    req.player = player
    next()
  })
}

exports.all = function (req, res, next) {
  Player.find().populate("team").exec(function(err, players) {
   if (err) {
     res.render('error', {status: 500});
   } else {      
       res.jsonp(players);
   }
 });
}

exports.update = function(req, res){
  var player = req.player
  player = _.extend(player, req.body)
 
  player.save(function(err) {
    res.jsonp(player)
  })
}


exports.destroy = function(req, res){
  var player = req.player
  player.remove(function(err){
    if (err) {
      res.render('error', {status: 500});
    }  else {
      res.jsonp(1);
    }
  })
}

exports.getRandomPlayers = function () {
  Player.find().limit(5).exec(
  	function(err, players) {
	   return players;
 });
}


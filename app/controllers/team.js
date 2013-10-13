var mongoose = require('mongoose')
  , Team = mongoose.model('Team')
  , Player = mongoose.model('Player')
  , _ = require('underscore');


exports.create = function (req, res) {
  var team = new Team(req.body)
  
  Player.find().limit(5).exec(
  	function(err, players) {
     	team.players = players;
	  	team.save();
	  	res.jsonp(team);
 });
}

exports.show = function (req, res) {
	res.jsonp(req.team);
}

/**
 * Find team by id
 */

exports.team = function (req, res, next, id) {
var team = mongoose.model('Team')

  Team.findOne({ _id : id })
  .populate('players')
  .exec(function (err, team) {
    if (err) return next(err)
    if (!team) return next(new Error('Failed to load team ' + id))

    req.team = {
        id: team._id,
        name: team.name,
        rank: team.rank,
        coins: team.coins,
        totalattack: team.total_attack,
        totaldefend: team.total_defend,
        players: team.players
    };
    next()
  })
}

exports.all = function (req, res, next) {
  Team.find().exec(function(err, teams) {
   if (err) {
     res.render('error', {status: 500});
   } else {      
       res.jsonp(teams);
   }
 });
}

exports.update = function(req, res){
  var team = req.team
  team = _.extend(team, req.body)
 
  team.save(function(err) {
    res.jsonp(team)
  })
}


exports.destroy = function(req, res){
  var team = req.team
  team.remove(function(err){
    if (err) {
      res.render('error', {status: 500});
    }  else {
      res.jsonp(1);
    }
  })
}

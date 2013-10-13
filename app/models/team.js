var mongoose = require('mongoose')
  , _ = require('underscore')
  , Schema = mongoose.Schema;

/**
 * Team Schema
 */

var TeamSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    coins: {
        type: Number,
        default: 0
    },
    rank: Number,
    created: {
        type: Date,
        default: Date.now
    },
    players: [{type: Schema.ObjectId, ref: 'Player'}]
});

TeamSchema.virtual('total_attack').get(function() {
    var total =0;
    _.each(this.players, function(val){
            total += val.attack;
        });
        return total / this.players.length;
});

TeamSchema.virtual('total_defend').get(function() {
    var total =0;
    _.each(this.players, function(val){
        total += val.defend;
    });
    return total / this.players.length;
});


mongoose.model('Team', TeamSchema);
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Player Schema
 */

var PlayerSchema = new Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
    },
    country: String,
    defend: {
        type: Number,
        default: 0
    },
    attack: {
        type: Number,
        default: 0
    },
    played: Number,
    goals: Number,
    team : {type: Schema.ObjectId, ref: 'Team'},
    playedfor: [{type: Schema.ObjectId, ref: 'Team'}]
});


mongoose.model('Player', PlayerSchema);
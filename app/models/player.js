var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * User Schema
 */

var PlayerSchema = new Schema({
  name: String,
  country: String,
  defend: Number,
  attack: Number,
  played: Number,
  goals: Number,
  team : {type: Schema.ObjectId, ref: 'Team'}
});


mongoose.model('Player', PlayerSchema);
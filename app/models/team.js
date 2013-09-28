var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Team Schema
 */

var TeamSchema = new Schema({
  name: String,
  players: [{type: Schema.ObjectId, ref: 'Player'}]
});


mongoose.model('Team', TeamSchema);
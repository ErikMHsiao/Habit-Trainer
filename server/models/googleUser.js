// modules =================================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HabitSchema = require('./habit');

// schema ==================================================
var GoogleUserSchema = new Schema({
  google: {
    type: String,
    required: true,
    unique: true
  },

  habitLimit: {
    type: Number,
    default: 3
  },

  habits: [HabitSchema]
});

module.exports = mongoose.model('GoogleUser', GoogleUserSchema);

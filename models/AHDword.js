var db = require('../db');
var mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
  	word: {type: String, trim: true, index: true},
  	entries: [{
      speech: String,
      senses: [{index: Number, text: String}]
  	}]
  },
  { collection: 'AHD' }
);

db.dictConn.model('AHDWord', schema);
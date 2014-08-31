var db = require('../db');
var mongoose = require("mongoose");

PageSchema = new mongoose.Schema({
  title: String,
  index: Number,
  book: String,
  paragraphs: [{
    isTitle: String,
    sentences: [String]
  }]
});

db.articleConn.model('Page', PageSchema);


var db = require('../db');
var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  title: String,
  mainTitle: String,
  subTitle: String,
  ep: Number,
  pageNum: Number,
  author: String
});

db.articleConn.model('Book', BookSchema);
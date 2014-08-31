var mongoose = require("mongoose");
var config = require('./config');

exports.init = function() {
  exports.dictConn  = mongoose.createConnection(config.db.dictionary);
  exports.articleConn = mongoose.createConnection(config.db.article);
};
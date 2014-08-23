var config = require('./config')

// init mongoose
var mongoose = require("mongoose");
mongoose.connect(config.dictionaryDB);

var schema = new mongoose.Schema({
		word: {type: String, trim: true, index: true},
		entries: [{
			speech: String,
			senses: [{index: Number, text: String}]
		}]
	},{ collection: 'AHD' }
);

var AHDWord = mongoose.model('AHDWord', schema);

var restify = require('restify');

function lookup(req, res, next) {
	res.charset = 'utf-8';
	AHDWord.find({word: req.params.word}, function(err, result) {
		var response = err ? err : result;
		res.send(response);
	});
	return next();
}

var server = restify.createServer();
server.get('/lookup/:word', lookup);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});
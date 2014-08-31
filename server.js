var config = require('./config');
var fs = require('fs');
var path = require('path');

// init db
var db = require('./db');
db.init();

// add all models
var model_path = __dirname + '/models'
var models = fs.readdirSync(model_path);
for (var i = 0; i < models.length; i++) {
	model_file = models[i];
	require(path.join(model_path, model_file));
}

var restify = require('restify');
var server = restify.createServer();
server.use(restify.CORS(config.CORS));

// require controllers
var dict = require('./controllers/dictionary');
var article = require('./controllers/article');

server.get('/lookup/:word', dict.lookup);
server.get('/article/list', article.list);
server.get('/article/get/:book', article.get);
server.get('/article/get/:book/page/:pageNum', article.page);

server.listen(config.port, function() {
	console.log('%s listening at %s', server.name, server.url);
});
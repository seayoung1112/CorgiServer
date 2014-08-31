// copy this to config.js and change the variables
var config = {};

config.db = {
	dictionary: "mongodb://username:password@your.db.com:port/dbname",
	article: "mongodb://username:password@your.db.com:port/dbname",
}

config.port = ;

config.CORS = {
	origins: ['*']
};

module.exports = config
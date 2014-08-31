var db = require('../db')
AHDWord = db.dictConn.model('AHDWord');

exports.lookup = function(req, res, next) {
	res.charset = 'utf-8';
	AHDWord.findOne({word: req.params.word}, function(err, result) {
    if(!err && result.length === 0) {
      err = {error: 'No result found'};
    }
		res.send({
      result: result,
      err: err
    });
	});
	return next();
}
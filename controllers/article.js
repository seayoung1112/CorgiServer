var db = require('../db')
Book = db.articleConn.model('Book');
Page = db.articleConn.model('Page');

exports.list = function(req, res, next) {
  Book.find({}, function(err, books) {
    if (err) {
      console.log("error occured when getting all books \n " + err);
    }
    res.send({
      books: books,
      error: err
    });
  });
  return next();
};

exports.get = function(req, res, next) {
  Book.findOne({
    title: req.params.book
  }, function(err, book) {
    if (err) {
      console.log("error occured when getting all books \n " + err);
    }
    res.send({
      book: book,
      err: err
    });
  });
  return next();
};

exports.page = function(req, res, next) {
  Page.findOne({
    book: req.params.book,
    index: req.params.pageNum
  }, function(err, page) {
    if (err) {
      console.log("error occured when getting page " + req.param.pageNum + " of " + req.param.book + " \n " + err);
    }
    res.send({
      page:page,
      err:err
    });
  });
  return next();
};
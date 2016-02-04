var app = require('express')();
var mongo = require('mongodb');
var db;

app.get('/', function (req, res) {
    
  var collection = db.collection('books');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
     if (err) {
		 console.error(err);
		return res.send({success: false });
	 }
	res.send({
        success: true,
		books: docs
    });
  });
});
app.get('/:id', function (req, res) {
    
    var collection = db.collection('books');
    var objId = new mongo.ObjectID(req.params.id);
    
   collection.findOne({ _id: objId }, function(err, doc) {
     if (err) {
		 console.error(err);
		return res.send({success: false });
	 }
	res.send({
        success: true,
		book: doc
    });
  });
});


module.exports = function (mongo) {
	db = mongo;
	return app;
}
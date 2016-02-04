var app = require('express')();
var mongo = require('mongodb');
var db;

app.get('/', function (req, res) {
    
  var collection = db.collection('courses');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
     if (err) {
		 console.error(err);
		return res.send({success: false });
	 }
	res.send({
        success: true,
		courses: docs
    });
  });
});
app.get('/:id', function (req, res) {
    
    var collection = db.collection('courses');
    var objId = new mongo.ObjectID(req.params.id);
    
   collection.findOne({ _id: objId }, function(err, doc) {
     if (err) {
		 console.error(err);
		return res.send({success: false });
	 }
	res.send({
        success: true,
		course: doc
    });
  });
});


module.exports = function (mongo) {
	db = mongo;
	return app;
}
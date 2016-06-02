var MongoClient = require('mongodb').MongoClient

//var URL = 'mongodb://localhost:27017/mydatabase'

MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('test');
  var doc = {mykey:1, fieldupdate:1};

  collection.insert(doc, {w:1}, function(err) {
  	collection.update({mykey:1}, {$set:{fieldupdate:2}}, {w:1}, function(err, result) {});
  });

  var doc2 = {mykey:2, docs:[{doc1:1}]};

  collection.insert(doc2, {w:1}, function(err, result) {
    collection.update({mykey:2}, {$push:{docs:{doc2:1}}}, {w:1}, function(err, result) {});
  });

  var doc1 = {'hello':'doc1'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

  collection.insert(doc1);
  collection.insert(doc2, {w:1}, function(err, result) {});
  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
});








// var MongoClient = require('mongodb').MongoClient

// var URL = 'mongodb://localhost:27017/mydatabase'

// MongoClient.connect(URL, function(err, db) {
//   if (err) return

//   var collection = db.collection('foods')
//   collection.insert({name: 'taco', tasty: true}, function(err, result) {
//     collection.find({name: 'taco'}).toArray(function(err, docs) {
//       console.log(docs[0])
//       db.close()
//     })
//   })	
// })
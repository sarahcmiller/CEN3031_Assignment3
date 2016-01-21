/* Fill out these functions using Mongoose queries*/

  var fs = require('fs'),
      mongoose = require('mongoose'), 
      Schema = mongoose.Schema, 
      Listing = require('./ListingSchema.js'), 
      config = require('./config');

  /* Connect to your database */
  mongoose.connect(config.db.uri);
  mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
  });

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({'code':'LBW'}, function(err,obj) { 
    if (err) return "Could not find code: 'LBW'";
    console.log(obj); 
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  var query = Listing.findOne({'code':'CABL'}, function(err, doc) {
    if (err) return "Could not find code: 'CABL'";
    console.log(doc);
  }).remove().exec();

};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.update({'code':'PHL'}, {$set: { 'address': '102 Phelps Lab, Gainesville, FL 32611'}}, 
    function(err, phldocument) {
     if (err) return "Could not find PHL";
     console.log(phldocument);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listings) {
    if (err) return "Could not find listings";
    for (i=0; i<listings.length; i++) {
      console.log(i+1);
      console.log(listings[i]);
    }
  })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
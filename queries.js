/* Fill out these functions using Mongoose queries*/


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({'code':'LBW'}, function(err,obj) { 
    console.log(obj); 
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  var query = Listing.findOne({'code':'CABL'});
  Listing.update(
    { 'code': 'CABL'}, {$pull: {'entries':{'name'}}})
  
  if (var i=0; i < listings.entries.length; i++){
    if (listings.entries[i].code == "CABL") {
      listings.entries.splice(i,1);
      break;
    }
  }

  console.log(listings);
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  var query = Listing.findOne({'code':'PHL'});
  var phlindex;
  if (var i=0; i < listings.entries.length; i++){
    if (listings.entries[i].code == "PHL") {
      phlindex = i;
      break;
    }
  }   
   listings.entries[phlindex].address = "102 Phelps Lab, Gainesville, FL 32611";
  console.log(listings);
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
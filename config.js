//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    //uri: 'mongodb://testuser:testuser@ds047315.mongolab.com:47315/cenclasstestassignment3'
    uri: 'mongodb://sarahandrobbie:root@ds047085.mongolab.com:47085/cen3031_8b'
  }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */

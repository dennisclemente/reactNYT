//for performing HTTP requests
var axios = require("axios");

// for making API Calls
var helper = {

// for running the query to geolocate.
  runQuery: function(location) {

    console.log(location);
  },

  // for retrieving the record of query results
  getArticles: function() {
    return axios.get("/api");
  },

  // for saving an article to our database.
  postArticle: function(location) {
    return axios.post("/api", { location: location });
  }
};

// for exporting the API helper
module.exports = helper
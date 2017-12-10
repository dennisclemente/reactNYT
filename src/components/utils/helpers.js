import axios from "axios";
const authKey = "a9070cfb9c174d11afdda82d81f12d75";


const helpers = {
  runQuery: (searchTerm) => {
    console.log("We have a search term passed into query: " + searchTerm);
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;
    return axios.get(queryURL).then((response) => {
      console.log(response);

      if(response.data.response.docs[0]) {
      	return response.data.response.docs;
      } else {
      	return "";
      }
    });
  },

  getSaved: () => {
  	return axios.get("/api/saved");
  },

  saveArticle: (articleTitle, articleDate, articleURL) => {

  	console.log("We have an article title to save in helper code: " + articleTitle);
  	console.log("We have an article date to save in helper code: " + articleDate);

  	return axios.post("/api/saved",
  		{
  			title: articleTitle,
  			date: articleDate,
        url: articleURL
  		}
  	);
  },


  deleteArticle: (articleID) => {

  	console.log("We have an article to delete in helper: " + articleID);

  	return axios.delete("/api/saved/" + articleID)

  	.then(res =>  {
  		console.log("Delete response from axios: " + res);
  	})
  	.catch(err => {
  		console.log("Error pushing to delete: " + err);
  	});

  }

};
// Export the helpers function.
export default helpers;


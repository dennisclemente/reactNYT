'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");
const app = epxress();
const Article = require("./models/Article");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
const local_db = "mongodb://localhost/reactNYT"

mongoose.connect(
  process.env.MONGODB_URI || mongodb://dcnyt:dyaryo@ds133746.mlab.com:33746/scrapenyt
    useMongoClient: true
  }
);

.then.(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.listen(PORT, function() {
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});


app.get("/api/saved", function(req, res) {
  Article.find({}).limit(10).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/saved", function(req, res) {
  console.log("Article title: " + req.body.title);
  console.log("Article date: " + req.body.date);

  Article.create({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Article");
    }
  });
});

app.delete("/api/saved/:id", function(req, res) {

  console.log("Article ID to delete: " + req.params.id);

  Article.findByIdAndRemove(req.params.id, function (err, response) {
    if(err){
      res.send("Delete is not working: " + err);
    }
    res.send(response);
  });
});

app.listen(PORT, () => {
  console.log('App now listening on PORT ${PORT}');
});
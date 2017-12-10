const db = require("../models")

module.exports = {
    findAll: function(req, res){
        db.Article
            .find({})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res){
        console.log(req.body)
        db.Article
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    delete: function(req, res){
        db.Article
            .findById({_id: req.params.id})
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}

const db = require("../models");
const router = require("express").Router();
var express = require("express");


  // load-Saved-Articles
  router.get("/articles", function(req, res){
    console.log("GET Route: articles!!!");
    db.Article.find({})
      .then(function(db){
        console.log(res);
        res.json(db)
      }).catch(function(err){
        res.status422.json(err);
      });
  })

  // save-article
  router.post("/articles", function(req, res){
    console.log("Route: POST articles!!!");
    console.log(req.body);
    db.Article
      .create(req.body)
      .then(function(db){
        res.json(db)
      }).catch(function(err){
        res.status422.json(err);
      });
  })

  // delete-article
  router.delete("/articles/:snippet", function(req, res){
    console.log("Route: DELETE articles!!!");
    console.log(req.params.snippet);
    db.Article
      .remove(
          {title: req.params.snippet}
        )
      .then(function(db){
        res.json(db)
      }).catch(function(err){
        res.status422.json(err);
      });
  })

module.exports = router;

// Defining methods for the booksController
// module.exports = {


const router = require("express").Router()
const articlesController = require("./models/Article")


router.route("/")
.get(Article.findAll)
.post(Article.create)


router.route("/:id")
.delete(Article.delete)

module.exports = router;
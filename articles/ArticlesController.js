const express = require("express");
const categoriesController = require("../categories/CategoriesController")
const router = express.Router();



router.get("/articles", (req,res)=>{
  res.send("articles")
})

module.exports = router;
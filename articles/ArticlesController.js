const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");


router.get("/admin/articles", (req,res)=>{

Article.findAll().then(articles=>{
  res.render("addmin/artciles/index", {articles:articles})
});

})


router.get("/admin/articles/new", (req,res)=>{
  Category.findAll().then(categories=>{
    res.render("admin/articles/new", {categories:categories});
  })
  });


  router.post("/articles/save",(req,res)=>{
    var title = req.body.title;
      var body = req.body.body;
      var category = req.body.category;


    Article.create({
      title:title,
      corpo:body,
      slug:slugify(title),
      categoryId:category
      
    }).then(()=>{
      res.redirect("/admin/articles");
    });
  });

  router.get("/admin/articles/index", (req,res)=>{
    Article.findAll().then()

    res.render("admin/articles/index");
  })


module.exports = router;
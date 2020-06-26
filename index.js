const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");

//Controllers
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//MODELS
const Article = require("./articles/Article");
const Category = require("./categories/Category");

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extend:false}));
app.use(bodyparser.json());

connection.authenticate().then(()=>{
  console.log("Conexão feita com sucesso");
}).catch(()=>{
  console.log("error");
})

app.use("/", categoriesController);
app.use("/", articlesController);


app.get('/',(req,res)=>
{
  Article.findAll().then(articles=>{
    res.render("index", {articles:articles});
  });
  
})

app.get("/:slug", (req,res)=>{
  var slug = req.params.slug;

Article.findOne({
  where:{slug:slug}

}).then(article=>{
  if(article!=undefined){
    res.render("article",{article:article});
  }
  else{
    res.redirect("/");
  }
}).catch(err=>{
  res.redirect("/");
});

})
app.listen(8080,()=>{
  console.log("o Server ta rodando")
})
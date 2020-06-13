const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('article',{
title:{
  type:Sequelize.TEXT,
  allowNull:false
},
slug:{
  type:Sequelize.STRING,
  allowNull:false
},
corpo:{
  type:Sequelize.TEXT,
  allowNull:false
  }
})

Category.hasMany(Article) //1 categoria tem varios artigos
Article.belongsTo(Category); //1 artigo pertence a 1 categoria




module.exports = Article
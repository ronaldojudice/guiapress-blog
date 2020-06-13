const sequelize = require("sequelize");
const connection = new sequelize('GuiaPress','root', '*casa81rj',{
  host:'localhost',
  dialect:'mysql'
});

module.exports=connection;



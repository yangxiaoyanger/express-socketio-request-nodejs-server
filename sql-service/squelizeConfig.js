//引入框架  
var Sequelize = require('sequelize');  
//初始化链接（支持连接池）  
var config = new Sequelize('parkend', 'root', '',  {  
  host: 'localhost',  
  dialect: 'mysql',  
  pool: {  
    max: 5,  
    min: 0,  
    idle: 10000  
  }
}); 

config
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
console.log(config.define)
exports.config = config;
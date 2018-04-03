var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../sql-service/db');


var formatMessage = function (msg) {
  if (msg) {
      var resulte = {
          code: '200',
          data: msg,
      };
      return resulte;
  }
  return null;
}

/* GET home page. */
// router.get('/test/getUserInfo', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send(formatMessage('<h1>Welcome sparking Server</h1>'));
//   // request('http://www.baidu.com', function (error, response, body) {
//   //   if (!error && response.statusCode == 200) {
//   //     console.log(body) // 打印google首页
//   //   }
//   // });
//   console.log(db, 888)
//   db.start();
// });

router.get('/', function(req, res, next) {
  // res.setHeader("Content-Type", "text/html");
  // res.sendFile('/index.html');
  db.query("select * from p_park_in",function(err,rows){
    console.log('rows  ', rows)
  });

});

module.exports = router;

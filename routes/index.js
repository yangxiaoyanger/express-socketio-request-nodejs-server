var express = require('express');
var router = express.Router();
var request = require('request');
// var db = require('../sql-service/db');
const model = require('../model');

let
  Parkin = model.Parkin
  Pet = model.Pet;
// var User = require('../sql-service/user.model').User;
// var Parkin = require('../sql-service/parkIn.model').Parkin;

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
router.get('/test/getUserInfo', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//  res.setHeader("Content-Type", "text/html");
//   res.sendFile('/index.html');
//   res.render('9999');
//   res.send(formatMessage('<h1>Welcome sparking Server</h1>'));
//   db.query("select * from gy_user",function(err,rows){
//       console.log('rows  ', rows)
//   });
  // request('http://www.baidu.com', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body) // 打印google首页
  //   }
  // });
//   db.query("select * from gy_user",function(err,rows){
//     console.log('rows  ', rows);
//     res.send(rows);
//   });
Parkin.findAll().then(Parkin => {
    console.log(Parkin);
    res.send(Parkin);
  })
});

module.exports = router;

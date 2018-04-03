var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var pool = mysql.createPool({     
  host     : 'localhost',       //主机
  user     : 'root',               //MySQL认证用户名
  password : '',        //MySQL认证用户密码
  port: '3306',                   //端口号
  database: 'parkend'
}); 

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            console.log(err, rows )
            connection.release();
        });
    });
}

exports.query = query;
// //创建一个connection
// connection.connect(function(err){
//     if(err){        
//           console.log('[query] - :'+err);
//         return;
//     }
//       console.log('[connection connect]  succeed!');
// });  
// //执行SQL语句
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) { 
//      if (err) {
//              console.log('[query] - :'+err);
//         return;
//      }
//      console.log('The solution is: ', rows[0].solution);  
// });  

// var  userGetSql = 'SELECT * FROM gy_user';
// //查
// connection.query(userGetSql,function (err, result) {
//         if(err){
//           console.log('[SELECT ERROR] - ',err.message);
//           return;
//         }        

//        console.log('--------------------------SELECT----------------------------');
//        console.log(result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });

// //关闭connection
// connection.end(function(err){
//     if(err){        
//         return;
//     }
//       console.log('[connection end] succeed!');
// });
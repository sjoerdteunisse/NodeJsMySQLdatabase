//NodeJs - MYsQl
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "Master",
    password: "itsmaster",
    database: "testDB"
});


con.connect(function(err) {
    if (err) throw err;
      con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
  
        console.log(result)
        
        //process.exit();

      });
});



// async function retrieveDataAsync(){
//   return new string(resolve => {
//       con.query("SELECT * FROM customers", function (err, result, fields) {
//         // if (err) throw err;
//         //console.log(result)
//       });
//     });
// }

//retrieveDataAsync();
  


// async function retrieveData(){
//     return new Promise(resolve => {
//             resolve();
//     });
// }

  
  
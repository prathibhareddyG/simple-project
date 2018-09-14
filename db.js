var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", 
  database: "Prathibha"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB : Connected!");
});

function insert_db(sql){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });

    }
function select_db(sql){
    con.connect(function(err) {
        if (err) throw err;
        // con.query("SELECT * FROM customers", function (err, result, fields) {
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
}

module.exports = {
  insert_db: function(sql){
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
  },
  select_db: function(sql){
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("result");
      });
  }
}



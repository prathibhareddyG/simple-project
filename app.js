var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();

// Binding express app to port 3000
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/style',  express.static(__dirname + '/style'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/pictures',express.static(__dirname + '/pictures'));
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',function(req,res){
    res.sendFile('home.html',{'root': __dirname + '/templates'});
})

app.get('/login',function(req,res){
    res.sendFile('login.html',{'root': __dirname + '/templates'});
})
app.get('/signup',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/templates'});
})

app.post('/signup', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body.username)
    sql = "INSERT INTO users2 (username, password, emailid,phone_no,gender,DOB,address) VALUES (\'"+ req.body.username +"\', \'"+ req.body.password +"\', \'"+req.body.emailid+"\', \'"+req.body.phone_no+"\', \'"+req.body.gender+"\', \'"+req.body.DOB+"\', \'"+req.body.address+"\')"
    console.log(sql);
     sql ="select * from users2"
     db.select_db(sql);
    db.insert_db(sql);
    //res.sendfile('success.html', {'root':__dirname + '/templates'})
  })
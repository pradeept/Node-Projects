const cal = require('./calculate');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


app.get('/',function (req,res) {
    res.render('index.ejs');
    // res.sendFile(__dirname+ '/index.html');
});

app.get('/fibonacci',function (req,res) {
    // res.sendFile(__dirname+ '/fibonacci.html');
    res.render('fibonacci');
});

app.get('/primeNumbers',function (req,res) {
    // res.sendFile(__dirname+ '/primeNumbers.html');
    res.render('primeNumbers');
});

app.get('/armStrong',function (req,res) {
    res.render('armStrong.ejs');
    // res.sendFile(__dirname+ '/armStrong.html');
});

// Rec data from form
app.post('/fibonacci',function(req,res){
    const n = req.body.nValue;
    res.send(cal.findFibo(n));
});

app.post('/primeNumbers',function(req,res){
    const n = req.body.nValue;
    res.send(cal.findPrime(n));
});


app.post('/armStrong',function(req,res){
    const n = req.body.nValue;
    res.send(cal.findArmStrong(n));
});




app.listen(3000,function (req,res){
    console.log("Listening on port 3000");
})
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = "mongodb://localhost:27017/events";
var cors = require('cors');
mongoose.connect(config)
    .connection
         .on('connected',function(){
         	console.log("successfully connected to "+config);
         })
         .on('error',function(){
         	console.log("database error "+err);
         })
var app = express();
var port = 3000;
app.get('/',function(req,res){
    res.send("Hello from Seba Team 58...");
});
var router = require('./routes');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/events',router);
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*");
	res.header('Access-Control-Allow-Origin','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Origin','Content-Type');
	next();
})
app.use(cors());
app.listen(port, function(){
	console.log("server is running on port "+ port);
})
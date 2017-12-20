var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json()); 

app.use(function(req, res, next) {
  
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
   next(); // This is calling the next middleware..h
  })

app.get('/',function(req,res){
  console.log("hi");
  res.send("Hello world");
})
app.post('/flight',function(req,res){
  console.log("Verify the input",req.body)
  
  console.log("Origin", req.body.origin.value);
})
app.listen(3000);
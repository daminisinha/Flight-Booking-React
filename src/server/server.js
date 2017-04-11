var express = require('express')
var bodyParser = require('body-parser')
var jsonData =require('./Name.json')
var obj = null;
//var myObject = JSON.parse(jsonData);
var app = express()

//Now you have a server that receives a req and sends a response.. I have a small task for you..
// I want you to develop a small functionality in which the following happens:
// 1.When I click the LoginButton from LoginButton.jsx.. it should send username and password to /verify
// 2. /verify will then check wheter username=="damini" and password=="anshul".. if yes then send success.. else send failure back to LoginButton.jsx.
//
// Hint: You'll have to find out how to pass parameters with axios in post req. Tell me when you do this. very easy.;()
// btana karke.. ab hum rotiyan banane ja rahe hain.. bn to gi?
//

app.use(function(req, res, next) {

 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 next(); // This is calling the next middleware..h
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',function(req,res){
  console.log("Got request")
  res.send('Hello world')
})

app.post('/verify',function(req,res){
  console.log("Verify the input",req.body)
  for(var i = 0; i < jsonData.length; i++) {
     obj = jsonData[i];
  console.log("json data :email ID",obj.emailId,"Password :",obj.password);
}
  if(req.body.email == obj.emailId && req.body.password == obj.password)
  console.log("Success")
  else
    console.log("Failure")



})
app.listen(3000,function(){
  console.log('App listening on port 3000!')
})

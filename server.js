const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
const port= process.env.PORT||4040;

app.use(bodyParser.urlencoded({extended:true})); //The bodyParser will populate the req.body property with the parsed body from the request. 
//With the Line 2 you will just get one to you use in your class via require. Returns middleware that only parses urlencoded bodies. 
//This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.



//send file we got here
app.get('/',function(req,res)
{
	res.sendFile(path.join(__dirname,'/index.html'));
});
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var result=num1+num2;
   res.send("the num of sum is"+ ""+ result);
})

app.get('/bmicalculator',function(req,res)
{
	res.sendFile(path.join(__dirname,'/bmicalculator.html'));
});
app.post('/bmicalculator', function (req, res) {
   console.log("Got a POST request for the bmicalculator");
   var weight=parseFloat(req.body.weight);
   var height=parseFloat(req.body.height);
   var bmi= weight/(height*height);
   res.send("Your bmi is"+ ""+ bmi);
})

app.listen(port);
console.log('server started at http://localhost:'+port);

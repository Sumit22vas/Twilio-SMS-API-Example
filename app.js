const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sendSms = require('./sendSms'); // Importing Twilio Package
const app = express(); // init Application



app.use(bodyParser.json());  // Configuring Body Parser For Parsing JSON data
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));  
});

app.post('/sendsms',(req,res)=> {
  sendSms(req.body.phone,req.body.msg);
    res.status(200).json({
      msg : 'success'
    });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
  console.log(`server is runnig at port : ${PORT}`);
});
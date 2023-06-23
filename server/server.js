const express = require('express');
const PORT = 3001;
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const nodemailer = require('nodemailer');

app.get('/',function(req,res){
    res.send('Server up')
})

app.listen(PORT);
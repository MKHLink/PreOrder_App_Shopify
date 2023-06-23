const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'..','client')));

const nodemailer = require('nodemailer');

app.post('/submit-form',(req,res)=>{
    const {email,first_name, last_name} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: 
        {
            user: '',
            pass: '',
        },
    });

    const mailInfo = {
        from: '',
        to: '',
        subject: 'New Pre-Order',
        text: `
            Email: ${email},
            First Name: ${first_name},
            Last Name: ${last_name}
        `,
    };

    transporter.sendMail(mailInfo,(error,info)=>{
        if(error)
        {
            console.log(error);
            res.status(500).send('Error sending email');
        }
        else
        {
            console.log('Email sent' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','client','index.html'));
});

app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});
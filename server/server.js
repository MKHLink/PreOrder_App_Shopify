const express = require('express');
const PORT = 3001;
const app = express();

app.get('/',function(req,res){
    res.send('Server up')
})

app.listen(PORT);
const express = require('express');
const app = express ();

app.get('/', function(req, res) {
    res.send('hello world')
})

const port = 8080;
app.listen(port, function(){
    console.log('localhost:'+port);
})
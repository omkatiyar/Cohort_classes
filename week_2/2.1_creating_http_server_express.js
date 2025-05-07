const express = require('express');
const app = express();
const port = 3000;

app.get('/getUser', function(req, res) {
    res.send("Hello World");
})

app.listen(port, function() {
    console.log("listening at ",port)
})
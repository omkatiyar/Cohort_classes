const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser')
// Parse incoming JSON
app.use(bodyParser.json())
// ************************** we can also use : app.use(bodyParser.json()) ************************

let todos = [];

app.get('/getAllToDos', function(req, res){
    res.send(todos);
})

app.put('/modifyTodo', function(req,res){
    let idToModify = req.body.id;  // Corrected: from req.body
    let modifiedObject;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === idToModify) {
            modifiedObject = todos[i];
            Object.assign(todos[i], req.body);
            break;
        }
    }
    
    res.send({
        msg: "Modified todo is",
        todo: modifiedObject
    });
})

app.post('/addTodo', function(req, res){
    todos.push(req.body);
    console.log("new todos list is:");
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
    }
    res.send("Todo Added");
})

app.listen(port, function(){
    console.log("app listening on port", port);
})

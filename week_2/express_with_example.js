const express = require('express')
const app = express(); 
app.use(express.json())

let patients = [{
    name: "Om",
    kidneys:[{healthy:true, healthy:true}]},
{
    name:"Har",
    kidneys:[{healthy:true, healthy: false}]
},
{   
    name:"Har",
    kidneys: [{healthy:true, healthy:true}]
}];

app.get('/getAllKidneys', function(req, res) {
    let name = req.query.name;
    let ans = [];

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].name === name) {
            kidneyNumber = patients[i].kidneys.length;
            ans.push({
                name: patients[i].name,
                kidneys: patients[i].kidneys,
                kidneyNumber: kidneyNumber
            });
        }
    }
    res.status(201).send(ans);
});

app.post('/addKidney', function(req,res){
    let name = req.body.name;
    let kidneyToAdd = req.body.kidneys;
    // console.log("all kidney array is ", kidneyToAdd);
    for(let i=0;i<patients.length;i++){
        // console.log(" patient kidney is ",patients[i].kidneys)
        if(patients[i].name == name){
            for(let j=0;j<kidneyToAdd.length;j++){

                patients[i].kidneys.push(kidneyToAdd[j]);
            }
        }
    }
    res.send(patients);
})

app.put('/replaceKidney', function(req, res){
    let name = req.body.name;
    let kidneyToReplace = req.body.kidneys;
    for(let i=0;i<patients.length;i++){
        if(patients[i].name == name){
            patients[i].kidneys = kidneyToReplace;
        }
    }
    res.send(patients);
})

app.delete('/deleteKidney', function(req, res){
    const newKidney = [];
    
        for(let j=0;j<patients[1].kidneys.length;j++){
            if(!patients[1].kidneys[j].healthy)
                newKidney.push({ healthy: true });
        }
    
    patients[1].kidneys = newKidney;
    console.log(patients[0].kidneys);
    console.log(patients[1].kidneys)
    res.send(patients);
})

app.listen(3000,function(){
    console.log("listening at ", 3000);
})
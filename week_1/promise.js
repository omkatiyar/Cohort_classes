const fs = require("fs");
// A promise is returned synchronosly but the data read from promise is asynchronously done
// A promise does not takes the callback function
// defining a promise: var p = new Promise(function(resolve){}); inside Promise, there should be a function 
// and this function should have resolve as compulsory argument
function readF(){
    return new Promise(function (resolve){
        console.log("inside the promise P ");
 fs.readFile("callback_need.txt","utf-8",function(err, data){ // here err is necessary other it will print null as data=null
    console.log("before resolve");
    resolve(data);
 });
})
}
function onDone(data){
    console.log(data);
}
let p= readF();
console.log(p); // will print pending promise
p.then(onDone);

console.log("------------------------------------------------------");
// Ex 2:
var d = new Promise(function(resolve){
    //resolve(); /// didn't send any data back
    console.log("inside 2nd Promise D");
    setTimeout(function(){
        console.log("inside setTimeout ssssssssss");
        resolve("data from promise");
    },2000)
    
});
function callback(){
    console.log("inside the callback function ccccccccc ")
    console.log(d);
}
d.then(callback);

/// EX 3:
console.log("------------------ exampleeeeeeeeee 3 -------------------------------");
p = new Promise(function(resolve){
    resolve("hi there P");
});

p.then(function(){
    console.log("inside the then function and now promise p is ", p);
})
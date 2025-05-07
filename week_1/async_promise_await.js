const fs = require("fs");
// ---------------------- USE and Explanation of ASYNC FUNCTIONS -------------------------
fs.readFile("anonymous_function.txt", "utf-8", function(err, data){
    console.log(data);
}) // the main thread will wait for the other code to finish and then cone back here

console.log("Hi there"); // prints this directly  
let a=0;
for(let i=0;i<100000000;i++){
    a++; // this will take a while, the thread will keep on executing this untill this is finished
}
console.log("a is ", a); // then it prints the value of a
console.log("This is the end of the main thread"); // and then it will finally print the last line
// finally the thread will go to above readFile function and execute it if not executed yet
// --------------------------------- END ------------------------------------------------

// ---------------------- USE and Explanation of PROMISES -------------------------
// A promise does not takes the callback function
function readF(){
    return new Promise(function (resolve, reject){
 fs.readFile("callback_need.txt","utf-8",function(data){
    console.log("inside the promise");
    resolve(data);
 });
})
}
function onDone(data){
    console.log(data);
}
readF().then(onDone);
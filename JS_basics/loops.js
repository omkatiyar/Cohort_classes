const prompt = require('prompt-sync')();
let correctNumber = 5;
while(true){
 var n = Number(prompt("Enter the number "));
   if(n === correctNumber){
    console.log("yeah boii"); break;
   }
   else{
    console.log(" Try again");
   }
}
let sum=0;
// use of normal for loop
for(let i=0;i<n;i++){
    sum+=(i+1);
}
console.log(" sum is " + sum);

let marks = {
    harkirat : 99,
    harry : 90,
    Om : 80,
    Bhupa: 30
}
// use of : for (let key in obj) -- used to traverse keys of the object
for(let key in marks){
    console.log(marks[key]);
}
// printing the marks of each student using normal for loop
let keys = Object.keys(marks);
console.log(keys); // prints all the keys present in marks object
for (let i = 0; i < keys.length; i++) {
    let student = keys[i];
    console.log(student + ": " + marks[student]);
}


// use of : for (let val of obj) -- used to traverse value of the object
for(let val of 'harkirat'){
    console.log(val);
}
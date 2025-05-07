function findSum(a,b){
    return a+b;
}
console.log(findSum(10,5));
const prompt = require('prompt-sync')();
let a = Number(prompt("enter first number"));
let b = Number(prompt("enter second number"));
console.log(findSum(a,b));
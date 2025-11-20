const prompt = require('prompt-sync')();
let a=prompt("what is your age?")
console.log(a); // typeof a will always be string

a= Number.parseInt(a);
console.log(typeof a);


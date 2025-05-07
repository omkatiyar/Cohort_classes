// --------------------------------------------
// getting length of a string

let names = "Harkirat";
let n = names.length; // str.length
console.log("length of names is ", n);
// ---------------------------------------------

// --------------------------------------------
// getting index of character/string
let str = "Hello world world world";
let index = str.indexOf("w"); // if some character or string is not present, then it returns -1.
console.log("w is present at ", index);
let idx = str.indexOf("wor");
console.log("wor is present at ", idx);
// to get the last index of a character/string
let lastidx = str.lastIndexOf("o");
console.log("o last index is", lastidx);
// ---------------------------------------------

// --------------------------------------------
// SLICE method is JS // slice method includes the start index and excludes the end index
let start=3; let end=5;
str = "Hellokkkk world";
sliced_str = str.slice(start,end);
console.log(sliced_str); // it will print "Hello"
// ---------------------------------------------
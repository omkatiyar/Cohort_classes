const prompt = require("prompt-sync")();

let arr = [23, 46, 33, 57, 98];
// map function is used to create a new array from the given array. The syntax is same as "forEach" loop
let a = arr.map((val, idx) =>{
    console.log(val, idx);
    return val+idx;
});
console.log(a);

// filter function filters the element on a given condition, it also creates a new array 
let arr2 = [23, 4, 3, 57, 9];
// map function is used to create a new array from the given array. The syntax is same as "forEach" loop
let a2 = arr2.filter((val, idx) =>{
    return val<10; // pass the function and based on return value(true or false), elements are added into new arr
});
console.log(a2);

// reduce function -> reduces the array to a single value
let newArr = [1, 3, 2, 5, 2];
function reduce_function(h1, h2){
    return h1+h2;
}
let sum = newArr.reduce(reduce_function); // will add first 2 elements, then add this result to the third element and then add 
// their result to the 4th element and so on and until single value is not obtained.
console.log(sum);
// calculating factorial of n(=5) number using reduce function 
let naturalNum = [1,2,3,4,5];
let fact = naturalNum.reduce((e1,e2) => {
return e1*e2;
});
console.log(fact);

// Exercise: guess the number
let upperLimit = 100, lowerLimit = 1;
let num = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
console.log("random number is: " + num);
let count = 0;
while (count < 100) {
    let guessedNum = Number(prompt("Guess the correct number: "));
    if (guessedNum == num) {
        console.log("Wohooo, you guessed right! Your score is: " + (100 - count - 1));
        break;
    }
    count++;
}
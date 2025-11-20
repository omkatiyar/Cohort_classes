// normal function
function onePlusAvg(x,y){
    return 1 + (x+y)/2;
}
let a=9, b=4, c=3;
console.log("one plus average of a & b is "+onePlusAvg(a,b));

// arrow function
const sum = (p,q) => {
    return p+q;
}
console.log(" sum of b and c is "+sum(b,c));

// to make function that does not take any arguments
const fn = () => {
    return "Hello babe";
}
console.log(fn());
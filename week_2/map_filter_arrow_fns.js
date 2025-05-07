function sum(a,b){
    return a+b;
}

const sumwa = (a,b) => {  /// this is the arrow function (used previously as well)
    return a+b;         // the above sum function and this arrow function are binded differently
}

// use of MAP function
// Ex; given an array, return the new array where each element is multiplied by 2
// suppose we are given [1,2,3,4,5] ; we have to transform it into [2,4,6,8,10]
function transform(i){
    return i*2;
}
arr = [1,2,3,4,5];
const ans = arr.map(transform); // map function exists for array class only
// other sol: const ans = arr.map(i => i*2);
console.log(ans);
// But we can use it on strings as well as follows:
const result = Array.from("hello").map(char => char.toUpperCase());
console.log(result);  // ['H', 'E', 'L', 'L', 'O']
// other way
const upper = Array.from("hello").map(char => char.toUpperCase()).join('');
console.log(upper);  // 'HELLO'

// USE of FILTER function
const res = arr.filter(function(n){ // filter function also exists on array class only
    if(n%2===0)
        return true;
    else 
        return false;
})
console.log(res);
// other way:
const ans2 = arr.filter(n => n%2===0);
console.log(ans2);

// creating a map function(named "maps") that takes arr and transform function as input and returns the transforned arr
function fn(x){
    return x*3;
}
function maps(arr,fn){
    let t = [];
    for(let i=0;i<arr.length;i++)
        t.push(fn(arr[i]));
    return t;
}

const z = maps(arr,fn);
console.log(z);
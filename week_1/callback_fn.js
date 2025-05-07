function calculatearithmetic(a,b,func_to_call){
    const ans = func_to_call(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

let a=10,b=20;
console.log(calculatearithmetic(a,b,sum));
console.log(calculatearithmetic(a,b,subtract));

// Ex: 2
console.log("--------------------- ex 2 ---------------------");
function kiratAsyncFuntion(callback){
callback("hi there");
}

async function main(){
    console.log("inside the main function");
kiratAsyncFuntion(function(value) { // anonymous function defined inside kiratAsyncFunction
    console.log(value);
});
}

main();
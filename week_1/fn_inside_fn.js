function sum(num1 , num2){
    let res= num1 + num2;
    return res;
}

function displayResult(data){
    console.log("Result of the sum function is " + data);
}

function displayResultPassive(data){
    console.log("Result of the sum function was " + data);
}

let a=10; let b=20;
displayResult(sum(a,b));

// Khan Academy
//  3Blue1Brown
//PatrickJMT
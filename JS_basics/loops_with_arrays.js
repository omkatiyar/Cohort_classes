let arr = [2, 4, 5, 6, 8];
/* forEach loop : Syntax= arr.forEach((value, index, arr) =>{ logic written here})*/
let squareArr=[];
arr.forEach((element) => {
// logic here
squareArr.push(element*element);
})
console.log(squareArr);

let evenNum=[]
arr.forEach((e,i) => {
    if(i%2 == 0) // to push even values: if(e%2==0)
        evenNum.push(e); // to store values present at even indices
});
console.log(evenNum);

// Array.from -> used to create an array from object . Ex: Array.from("Harry") -> will create arr= ['H', 'a','r','r','y']
let strArr = Array.from("Harry");
console.log(strArr);

let objArr = [{name: "Om", age:26}, {name:"ram", age: 36},{name:"Shiva",age:9000}]
// explanation of for..of loop
for(let val of arr){
    console.log(val); // printed values of arr, otherwise, it would have printed values of object
}
for(let val of objArr){
    console.log(val);
}

// explanation of for..in loop
for(let key in arr){
    console.log(key); // prints index here
}

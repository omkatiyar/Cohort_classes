let arr = [20, 30 , 40]
arr.push(50); // pushes the element at the back of the array

for(let i=0;i<arr.length;i++) // to find size of arr ==> arr.length method is used
    console.log(arr[i]);

// toString method converts array datatype into string datatype
let arrString = arr.toString();
console.log(arrString);

//join function joins each element of an array using a separator
let joinArr = arr.join("_"); // joinArr will be of type string
console.log(joinArr)

arr.pop() // arr.pop() methods pops the last element from the array
let pop_element = arr.pop()
console.log("popped element is "+pop_element);

for(let i=0;i<arr.length;i++) 
    console.log(arr[i]);

arr.shift(); // arr.shift() removes first element of the array and returns the original array
console.log(arr);

arr.push(22); arr.push(48); arr.push(66);
console.log("size of arr is : "+arr.length);
for(let i=0;i<arr.length;i++){
    if(i==1)
        delete(arr[i]); // delete is not a function, but an operator, it will erase the element present at that index,
    // i.e length remains same
    else
    console.log(arr[i]);
}
console.log("after using delete operator, size is: "+arr.length);

// concat method is used to concat 2 arrays
let additionalArr = [4, 2, 100, 8];
let newArr = arr.concat(additionalArr);
console.log(newArr);

// sort method -> this sorts the array alphabetically
newArr.sort();
console.log(newArr); // output will be 100,2,30,4,48,6,66,8,<empty_item>
// using comparator in sort function
function compare( a, b){
    return a-b; // sorts the array in ascending order
    // for sorting in descending order use: b-a
}
newArr.sort(compare);
console.log(newArr); // output: 2,4,6,8,30,48,66,100,<empty_item>

// splice method - removes the given element from the given index and places the given elements in their place
// syntax: num.splice(index, num_of_elements, new_elemenets,.,.,.,.) . It modifies the original array
const num = [11,22,33,44,55,66]
let num2 = num.splice(2,3, 20, 30,40);
console.log("original array is : " + num); // num becomes: [11,22, 20, 30, 40, 66]
console.log("spliced array is : " + num2); // spliced arr: [33, 44, 55]
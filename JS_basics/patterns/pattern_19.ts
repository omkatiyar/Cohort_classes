// let n =5;

// printing first half
for(let i=0;i<5;i++){
let str:string = "";
let star_left = "*".repeat(5-i);
let spaces = ' '.repeat(2*i);
let star_right = '*'.repeat(5-i);
str = star_left +spaces + star_right;
console.log(str);
}
for(let i=4;i>=0;i--){
    let star_left = '*'.repeat(5-i); // as n=5
    let star_right = "*".repeat(5-i);
    let spaces = ' '.repeat(2*i);
    let str:string = star_left + spaces + star_right;
    console.log(str);
}
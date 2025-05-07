// n =5
for(let i=1;i<10;i++){ // 10 = 2*n as n = 5
if(i<=5){
    let spaces = ' '.repeat(10-2*i);
    // let space_r = ' '.repeat(10-i);
    let star_left = '*'.repeat(i);
    let star_right = '*'.repeat(i);
    let str = star_left + spaces +star_right;
    console.log(str);
}
else{
    let spaces = ' '.repeat(2*i-10);
    let star_left = '*'.repeat(10-i);
    let star_right = '*'.repeat(10-i);
    let str = star_left + spaces + star_right;
    console.log(str);
}
}
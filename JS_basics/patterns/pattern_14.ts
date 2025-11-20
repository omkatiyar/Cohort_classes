
// n = 5
for(let i=0;i<5;i++){
    let str:string = "";
    for(let j=0;j<=i;j++){
        str = str + String.fromCharCode(65+j); 
    }
    console.log(str);
}
/*
To print the pattern:
A
AB
ABC
ABCD
ABCDE
*/
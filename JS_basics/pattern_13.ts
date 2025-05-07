// let n=15;
let count =1;
for(let i=1;i<=5;i++){
    let str:string = "";
    for(let j=1;j<=i;j++){
        str = str+' ' + count;
        count++;
    }
    console.log(str);
}
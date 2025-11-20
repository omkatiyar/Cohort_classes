
for(let i=0;i<6;i++){
    let str:string = "";
    let bit = 1;
    for(let j=0;j<=i;j++){
        if(i%2!=0){
            bit = (1+ bit)%2;
            str = str + bit;
        }
    else{
            str = str + bit;
            bit = (1+bit)%2;
        }
    }
    console.log(str);
}
/*
0th row -> only 1
1st row -> first 0 then 1
2nd row -> 1 -> 0 -> 1
*/
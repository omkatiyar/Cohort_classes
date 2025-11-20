for (let i=1;i<5;i++){ // n=5
    let str:string="";
    let spaces = ' '.repeat(8-2*i);
    let temp:string = "";
    for (let j=1;j<=i;j++){
        temp = temp + j;
    }
    str = temp + spaces+ temp.split('').reverse().join('');
    console.log(str);
}
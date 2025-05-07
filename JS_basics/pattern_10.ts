let n:number=5;
for(let i=0;i<2*n;i++){
    let str:string="";
    if(i<n){
    let star = '*'.repeat(i+1);
    str = star;
    console.log(str)
    }
    else if(i>n){
        let star = '*'.repeat(2*n-i);
        str = star;
        console.log(str);
    }
}
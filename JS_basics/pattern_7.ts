let n:number = 5;
let m:number = 5;
for(let i=0;i<= n; i++){
  let str:string = "";
  for(let j=0;j<=n-1-i;j++){
    str=str+' ';
  }
  
  for(let j=0;j<2*i+1;j++){
    str+="*";
  }
  console.log(str);
}
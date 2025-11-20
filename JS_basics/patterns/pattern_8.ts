let n1:number = 5;
let m1:number = 5;
for(let i=n1;i>= 0; i--){
  let str:string = "";
  for(let j=0;j<n1-i;j++){
      str+=" ";
  }
  for(let j=2*i+1;j>0;j--){
    str+="*";
  }
  for(let j=0;j<n1-i;j++){
  str+=" ";
  }  
  console.log(str);
}
/*
This will print
*********
 *******
  *****
   ***
    *

*/
// n = 5
let reverse_str:string="";
for(let i=0;i<5;i++){
    let space = ' '.repeat(5-i);
    let str:string = String.fromCharCode(65+i);
    let completeString = space + reverse_str + str + reverse_str.split('').reverse().join('');
    reverse_str = reverse_str+String.fromCharCode(65+i);
    console.log(completeString);
}
/*
the above code will print:
     A
    ABA
   ABCBA
  ABCDCBA
 ABCDEDCBA  
*/

// n = 5
for(let i=0;i<5;i++){
    let str:string = "";
    for(let j=i;j>=0;j--){
        str=str+String.fromCharCode(69-j); // why here str+ String..., it should be
    }
    console.log(str);
}
/*
The above code prints:
E
DE
CDE
BCDE
ABCDE
*/

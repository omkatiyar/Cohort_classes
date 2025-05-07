/*
suppose n = 4, then the pattern will be:
4 4 4 4 4 4 4
4 3 3 3 3 3 4 
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

To_DO yet, write the code
*/
let mtx: number[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(-1)
  );
//   mtx[0][0]=;
let count = 4;
for(let i=0;i<8;i++){
if(mtx[7-i][0]=== -1)
    mtx[7-i][0] = count;
if(mtx[i][7] === -1)
    mtx[i][7]=count;
    
}
console.log(mtx);
// function f(){
//     const start_time=Date.now();
//     const end_time=Date.now();
// console.log("actual delay is "+ end_time-start_time);
// }
// setTimeout(f,2*1000);

// const start = Date.now();

// setTimeout(() => {
//   const end = Date.now();
//   console.log(`Actual delay: ${end - start}ms`);
// }, 1000);

function logActualDelay(start) {
    const end = Date.now();
    console.log(`Actual delay: ${end - start}ms`);
  }
  
const start = Date.now();
setTimeout(logActualDelay, 1000, start); // this syntax means we are passing 3 arguments inside the setTimeout function
// first argument is function name, 2nd is delay and 3rd  is the argument which would be passed to logActualDelay fn
// Any arguments you provide to setTimeout after the delay argument are collected and forwarded as arguments to your 
// callback function.

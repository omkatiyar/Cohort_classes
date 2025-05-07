function kiratAsyncFuntion(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}

async function main(){
    // no callbacks and no .then syntax
    console.log("inside main 1")
    let result = await kiratAsyncFuntion(); // if we dont use await keyword then unresolved promise will be returned
    // await is only valid for async functions
    console.log(result);
}
main();

// Ex: 2
console.log(" ------------- ex 2 -----------------");
function kiratAsyncFuntion2(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there 22");
        }, 2000);
    });
    return p;
}
async function main2(){
    let value = await kiratAsyncFuntion2();
    console.log("value is ",value);
}
main2();
console.log("after main 2");
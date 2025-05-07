// prints the number one by one as counter function is called after 1 second and then printing happens
function counter(){
    for(let i=30;i>=0;i--){
        console.log("inside the funtion counter");
        console.log(i);
    }
}
setTimeout(counter, 1*1000);


// prints the numbers at once
for(let i=30;i>0;i--){
    console.log("inside the loop");
    setTimeout(() => {console.log(i)},1*1000);
}
function greet(){
    console.log("Hello, World!");
}
function greetAlien(){
    console.log("Greetings, Earthling!");
}
setTimeout(greet, 3*1000);

setInterval(greetAlien,1*1000);
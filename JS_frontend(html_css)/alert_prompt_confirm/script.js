
let age = prompt("Enter your age","30");// it just suggests 30 as default value of age

let write = confirm(" Am i allowed to write this on web_page"); // confirm() is used to prompt the user whether he
// wants to do_something/write the value to the webpage or not
if(write){
    document.write(age);
}
else{
    document.write("Please allow me to write");
}
let b = document.body;
// difference between body.firstChild & body.firstElementChild is 
// body.firstChild  just returns the next element (ex: text, comment) while,
// body.firstElementChild  actually returns the next valid element (ex: text, comment) while,

let fc = b.firstChild;
let fec =  b.firstElementChild;
console.log("First child : ",fc);
console.log("First element child: ", fec);

//changing bg color of the element, here it is firstElementChild
function changeBodyElementColor() {
    document.body.firstElementChild.nextElementSibling.style.background = "yellow";
}
changeBodyElementColor();

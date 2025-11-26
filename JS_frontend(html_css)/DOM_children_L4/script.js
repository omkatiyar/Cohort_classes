console.log("first child: " + document.body.firstChild); // will output textNode, would have given output: <div> if it was written next to body
console.log("last child : "+document.body.lastChild);
console.log("All child nodes: " +document.body.childNodes); // this looks like array but it's not

let arr = Array.from(document.body.childNodes);
console.log("child nodes array is: [ "+arr + "]");

// element.hasChildNodes() - used to check whether the element have any children

// getting the parent of any element
let child = document.body.firstChild;
console.log(" parent node is: " + child.parentNode); // returns just the node
console.log(" parent element is: " + child.parentElement); // returns the valid element such as <html>,<body>,etc..

//getting the next sibling
let nexSibling = child.nextSibling;
console.log("next Sibling is : "+nexSibling);
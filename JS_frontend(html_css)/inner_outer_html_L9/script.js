// innerHTML and outerHTML
// The innerHTML property allows to get the HTML inside the element as a string.
// → valid for element nodes only

// The outerHTML property contains the full HTML – innerHTML + the element itself.

// innerHTML is valid only for element nodes. For other node types we can use nodeValue or data.

let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)
first.hidden = false
//first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" 
// // first.outerHTML 
first.outerHTML = "<div>hey</div>"
// document.body.firstChild.data 
console.log(document.body.textContent)
// first.hidden = true
let firstElement = document.getElementsByTagName("nav")[0].firstElementChild;
firstElement.style.color = "magenta"

// getting all li elements and changing each elements bg to green
let liElements = document.getElementsByTagName("li")
Array.from(liElements).forEach((element) =>{
    element.style.background = "green"
})
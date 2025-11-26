const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

// no 2 html elements can have same id. Think of it as no 2 students can have same roll no inside a class
let cardTitle = document.getElementById("firstCardTitle");
cardTitle.style.color = "red";

// fetching all cards using document.querySelectorAll(".class_Name here started with dot(.)")
let cardTitles = document.querySelectorAll(".card-title");
console.log(cardTitles);
cardTitles[0].style.color = "blue";
cardTitles[1].style.color = "magenta";
cardTitles[2].style.color = "green";

// we can have multiple classes for a single tag, these classes are separated by space
document.querySelector(".this").style.color = "magenta"
document.querySelector(".this").style.background = "cyan"
// document.querySelector(".class_name") is efficient method of document.querySelectorAll(".className")[0]

// getElementByTagName returns all the tags present in a particular html
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a")); //will give all "a" tags present inside the card class
let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
a.append(div);
a.prepend(div);
a.before(div);
a.after(div);
// a.replaceWith(div); //commented this because if I dont comment this, then div will be replaced with another new div

//insertAdjacent(**) -- where ** == HTML OR text OR Element
let first = document.getElementById('first');
if(first){
first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');
}
else{
    console.warn("ELement not found");
}
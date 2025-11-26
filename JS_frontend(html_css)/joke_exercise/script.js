let jokes = [
    "What did one snowman say to the other snowman? It smells like carrots over here!",
"Why did Beethoven get rid of his chickens? All they ever said was, “Bach, Bach, Bach!”"
,"What did 20 do when it was hungry? Twenty-eight.",
"Why is grass so dangerous? Because it's full of blades!",
"Why are mountains so funny? They’re hill areas.",
"Why wasn’t the cactus invited to hang out with the mushrooms? He wasn’t a fungi."
,"Why did the crab cross the road? It didn’t—it used the sidewalk."
];

let num = Math.floor(Math.random()*(jokes.length-0)) + 0;
console.log(num);
let element = document.getElementById("bt");
element.innerHTML(jokes[num]);
console.log(element.innerHTML(jokes[num]));
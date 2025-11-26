let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".boc")); // will return false until the name === class_name
console.log(id1.matches(".box"));

console.log(sp1.closest("#id1"));

console.log(id1.contains(sp1)); //true
console.log(sp1.contains(sp1)); //true
console.log(sp1.contains(id1)); //false

/**
1) elem.matches(css) → To check if element matches the given CSS selector.
2) elem.closest(css) → To look for the nearest ancestor that matches the given CSS selector.
The element itself is also checked.
3) elemA.contains(elemB) → Returns true if elemB is inside elemA (a descendant of elemA)
or when elemA == elemB.

Neither matches, nor closest, and nor contains is used to look for farthest ancenstor that matches a given CSS selector
*/
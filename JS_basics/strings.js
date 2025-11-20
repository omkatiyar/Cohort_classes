let name="harry";
//to find length of string == str.length function is used
console.log(name.length);
let boy1 = "Nikhil";
let boy2 = "Jigness";
let sentence = `${boy1} is friend of ${boy2}`; // use of template literal (template_literal == ``(backtick))
console.log(sentence);

// getting kth index of a char/substring
let str = "Hello world world world, bananas";
let k=3; let subString = "wor";
// getting kth index of a char/substring = str.split(subString,k).join(subString).length
console.log(str.split(subString,k).join(subString).length);

// get last index of char/substring
console.log(str.lastIndexOf("ld"));
console.log(str.lastIndexOf('z')); // prints -1 as this character does not exist in str


// SLICE method is JS // slice method includes the start index and excludes the end index
let start=3; let end=5;
str = "Hellokkkk world";
sliced_str = str.slice(start,end);
console.log(sliced_str); // it will print "Hello"

// Escape sequence == \, \n for new line, \t for tab , \r for carriage return
let fruit = 'Bana\'na'; // ignores ' char present in between as \ escape sequence is used in order to ignore '
console.log("fruit is "+fruit);
console.log(fruit.length) // will print 7 as length(Banana) =6 and \' is treated as one character, hence ans=7

// replace method of string, syntax: str.replace(subStr, replaceStr)
let s= "  Harry is my brother  ";
// s= s.replace("brother","bhai"); --> for permanent replace of substring
console.log(s.replace("brother","bhai").trim());
console.log(s);

// to remove whitespace = s.trim();
console.log(s.trim());
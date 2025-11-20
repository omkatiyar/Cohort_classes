// use of includes function === same as s.find(substr) where s=main_string and substr is the string we are looking for
const text = "JavaScript is awesome";
console.log(text.includes("Script"));   // true
console.log(text.includes("python"));   // false

// startsWith functions in JS
const str = "Hello World";
console.log(str.startsWith("Hello"));  // true
console.log(str.startsWith("World"));  // false

// endsWith function in JS
const filename = "photo.png";
console.log(filename.endsWith(".png"));  // true
console.log(filename.endsWith(".jpg"));  // false

// extracting all numbers from the given string
function getAllNumbers(str) {
    // \d+g → find all numbers
    const matches = str.match(/\d+/g);
    return matches;
  }
console.log(getAllNumbers("Pay Rs 500 and Rs 200 now"));

/// extracting kth number from the given string
function getKthNumber(str, k) {
    const matches = str.match(/\d+/g);
    if (!matches || k > matches.length) return undefined; // check whether any number is present OR k> length(matches)
  
    return Number(matches[k - 1]); // k-1 because array is 0-based
  }
console.log(getKthNumber("Pay 500 then 300 then 200", 2)); // k=2

  
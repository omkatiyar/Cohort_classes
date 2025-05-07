
import * as readline from 'readline';

let str:string = "Hellwa Poori";
let index =2;
let newChar = 'z';
str = str.substring(0, index) + newChar + str.substring(index + 1);

console.log("modified string is ",str);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input: string) => {
  // Convert the input string to an integer
  const num = parseInt(input, 10); // The second argument '10' specifies the base (decimal)

  // Check if the conversion was successful
console.log(num);

  rl.close();
});

function changeCharacter(str: string, index: number, newChar: string): string {
    if (index < 0 || index >= str.length) {
      throw new Error("Index out of bounds");
    }
  
    const chars = str.split(''); // Convert string to array of characters
    chars[index] = newChar;      // Change the character at the specified index
    return chars.join('');       // Join the array back into a string
  }
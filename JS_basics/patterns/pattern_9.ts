const rows = 10;
const cols = 5;

function changeCharacter(str: string, index: number, newChar: string): string {
    if (index < 0 || index >= str.length) {
      throw new Error("Index out of bounds");
    }
  
    const chars = str.split(''); // Convert string to array of characters
    chars[index] = newChar;      // Change the character at the specified index
    return chars.join('');       // Join the array back into a string
  }

// Create matrix
let matrix: string[][] = Array.from({ length: rows }, () =>
  Array(cols).fill(" ")
);

// console.log(matrix)
let nwa=5;
function printDiamond(n: number): void {
  // Top half of diamond
  for (let i = 0; i < n; i++) {
    let spaces = ' '.repeat(n - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    console.log(spaces + stars);
  }

  // Bottom half of diamond
  for (let i = n - 2; i >= 0; i--) {
    let spaces = ' '.repeat(n - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    console.log(spaces + stars);
  }
}

// Example usage
printDiamond(6);
  
// console.log(matrix);
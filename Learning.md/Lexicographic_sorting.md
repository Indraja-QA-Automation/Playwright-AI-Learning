// Lexicographic sorting compares values as strings, character by character.
// JavaScript's sort() uses lexicographic sorting by default.

let numbers = [10, 5, 20, 15, 30];
console.log(numbers.sort());
// Output: [10, 15, 20, 30, 5]

// "10" comes before "5" because the first character "1" comes before "5".

// To sort numbers by their numeric value, use a compare function:
let sortedNumbers = [10, 5, 20, 15, 30];
console.log(sortedNumbers.sort((a, b) => a - b));
// Output: [5, 10, 15, 20, 30]
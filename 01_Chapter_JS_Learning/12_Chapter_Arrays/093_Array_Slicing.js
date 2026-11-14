let numbers = [10, 20, 6, 30];
//slice(start, end) method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
//slice() method can take negative indexes as well. If start is negative, it is treated as length + start where length is the length of the array. If end is negative, it is treated as length + end.
//slice() method does not change the original array. It returns a new array.
//slice end index is not included in the new array. If end is omitted, slice extracts through the end of the sequence (arr.length).
//slice end is end-1 index. If end is omitted, slice extracts through the end of the sequence (arr.length).
let newSliceArray = numbers.slice(2, 4);
console.log(newSliceArray); // Output: [6, 30]
console.log(numbers); // Output: [10, 20, 6, 30] (original array is unchanged)

console.log(numbers.slice(1));
console.log(numbers.slice(-3, -1));
console.log(numbers.slice(-2));
console.log(numbers.slice(1,3));
console.log(numbers.slice(-1, -3)); // Output: [] (empty array, as the start index is greater than the end index)
let num =[10, 5, 20, 15, 30];
num.sort((a,b) => a-b);
console.log(num);
num.sort((a,b) => b-a);
console.log(num);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits);
let array = [20,30,40,50,60,70,80,90];
let copy = [...array];
console.log(copy);

let copy1 = array.slice(1,5);
console.log(copy1);

let copy2 = array.slice();
copy2.push(100);
copy2.push(200);
console.log(copy2);
console.log(array);

//Deep Copy
let deep_copy = array;
deep_copy.push(1000);
console.log(deep_copy);
console.log(array);
let browsers=["chrome","Edge","Firefox"];
console.log(browsers);

//adding element in end of array
browsers.push("opera");
console.log(browsers);

//removing element from the end of an array
browsers.pop();
console.log(browsers);

//adding element in the start
browsers.unshift("IOS");
console.log(browsers);

//removing element from start
browsers.shift();
console.log(browsers);

//splice-  splice(start, deleteCount, item1, item2, ...); deleting and replacing the elements
browsers.splice(2, 2, "Hii", "Hello");
console.log(browsers);

browsers.splice(1, 0, "Firefox", "Andriod");
console.log(browsers);

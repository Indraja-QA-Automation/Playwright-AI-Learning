//Map and Filter are the two most commonly used array transformation methods in JavaScript.

//Every vs some

//Every method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. If all elements pass the test, it returns true; otherwise, it returns false.
console.log([10, 20 ,30].every((value) => value>10));
console.log([20, 30 ,40].every ((value) => value>10));
//Some method tests whether at least one element in the array passes the test implemented by the provided function. It also returns a Boolean value. If at least one element passes the test, it returns true; otherwise, it returns false.
console.log([10,202,30].some((value)=>value>10));
console.log([10,202,30].some((value)=>value>500));
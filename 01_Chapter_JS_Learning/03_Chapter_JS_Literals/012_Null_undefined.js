// topic Null vs undefined in JS

/* simple defintions

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
 */

// example of undefined

let userName;
console.log(userName); // undefined is assigned to userName variable by JS automatically, as it is not initialized with any value
console.log(typeof userName); //  undefined 

function greetUser() {
    // no retrun statement, so it returns undefined
}
console.log("greetuser is"+" "+ greetUser()); // undefined is returned from the function

let a;
a=10;
console.log(a); // 10 is assigned to a, so it is not undefined anymore

// 2. null example

let fullName = null;
console.log(fullName); // null
console.log(typeof fullName); // typeof null is object, this is a historical bug in JS

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/
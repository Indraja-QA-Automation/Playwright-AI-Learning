# Playwright AI Learning

This repository is a JavaScript learning project focused on understanding core JavaScript fundamentals, syntax rules, literals, and operators. It includes a set of practice files designed to explain JavaScript concepts in a simple and beginner-friendly way.

## Project Structure

- `00_Chapter_Prompt_engineering/` - Prompt engineering practice area
- `01_Chapter_JS_Learning/`
  - `01_Chapter_JS_Basics/`
  - `02_Chapter_JS_keyword_identifiers/`
  - `03_Chapter_JS_Literals/`
  - `04_Chapter_JS_Operators/`

## Learning Journey

### 1. JavaScript Basics

The basics chapter introduces the first JavaScript code and conceptual foundations.

#### Hello World
- `console.log()` is used to print output to the console.
- JavaScript code can be run with Node.js.
- Example:
  ```js
  console.log("Hello World");
  ```

#### Math and Expressions
- JavaScript supports arithmetic expressions like addition, subtraction, division, multiplication, and modulus.
- Operators can be combined in expressions and assigned to variables.

#### JS Engine
- A JavaScript engine executes JS code.
- Browsers and Node.js both use JavaScript engines.
- Keywords and syntax are interpreted by the engine.

### 2. Variables, Keywords, and Identifiers

#### `let`, `var`, and `const`
- `let` declares block-scoped variables.
- `var` declares function-scoped variables.
- `const` declares constants that cannot be reassigned.

```js
let age = 9;
var a = 90;
const c = 23;
```

#### Valid and Invalid Identifiers
- Identifiers can contain letters, digits, underscores, and dollar signs.
- They cannot start with a number.
- Spaces are not allowed inside identifiers.
- Examples of valid names:
  - `age`
  - `_age`
  - `$age`
  - `student_age`
  - `student23`

Examples of invalid names:
- `12age`
- `8`
- `your name`

#### Naming Best Practices
- Use descriptive variable names.
- Prefer camelCase for JavaScript variables.
- Example: `studentAge` instead of `student_age` in some coding styles.

#### Comments in JavaScript
- Single-line comments: `// ...`
- Multi-line comments: `/* ... */`
- Documentation comments: `/** ... */`

Comments are ignored by the engine and help explain code.

### 3. JavaScript Literals

Literals are fixed values written directly in source code.

#### Number Literals
JavaScript has a single Number type for integers and floating-point values.

Examples:
- Decimal: `42`
- Hexadecimal: `0x2A`
- Binary: `0b101010`
- Octal: `0o52`
- Float: `3.14`
- Scientific notation: `1.23e4`

#### String Literals
- Strings are enclosed in single or double quotes.
- Example: `"Indraja"`

#### Boolean Literals
- Boolean values are `true` and `false`.

#### Null and Undefined
- `undefined` means a variable exists but has not been assigned a value yet.
- `null` means the developer intentionally assigns an empty value.

```js
let userName;
console.log(userName); // undefined

let fullName = null;
console.log(fullName); // null
```

#### Special Notes
- `typeof null` returns `"object"` due to JavaScript's historical behavior.
- `null == undefined` is `true`.
- `null === undefined` is `false`.

### 4. Operators in JavaScript

This chapter covers the main categories of operators used in JavaScript.

#### Assignment Operators
- The assignment operator is `=`.
- It assigns a value to a variable.

```js
let a = 10;
a = a + 9;
```

#### Arithmetic Operators
- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` modulus (remainder)
- `**` exponentiation

Examples:
```js
let i = 9;
let j = 2;

console.log(i + j);
console.log(i - j);
console.log(i * j);
console.log(i / j);
console.log(i % j);
console.log(i ** j);
```

#### Comparison Operators
Comparison operators compare values and return boolean results.

- `<` less than
- `>` greater than
- `<=` less than or equal to
- `>=` greater than or equal to
- `==` loose equality
- `===` strict equality
- `!=` loose inequality
- `!==` strict inequality

Important comparison note:
- `==` compares values after type coercion.
- `===` compares both value and type.

```js
let i = 10;
let j = "10";

console.log(i == j);   // true
console.log(i === j);  // false
```

#### Logical Operators
- `&&` logical AND
- `||` logical OR
- `!` logical NOT

```js
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!b);     // true
```

### 5. Confusing Comparison Behavior

JavaScript loose equality can behave unexpectedly because it converts types before comparison.

Examples:
```js
console.log("10" == 10); // true
console.log("" == 0);    // true
console.log(0 == "");   // true
```

Strict equality avoids this confusion:
```js
console.log("10" === 10); // false
console.log("10" === "10"); // true
```

This is a key learning point: prefer `===` over `==` in real-world JavaScript code to avoid bugs caused by implicit coercion.

## Key Takeaways

- JavaScript is a dynamically typed language.
- Variables can be declared using `let`, `var`, or `const`.
- Identifiers must follow naming rules.
- Comments help document code.
- Literals represent fixed values.
- `undefined` and `null` are different concepts.
- Operators help in calculations, comparisons, and decisions.
- `===` should generally be preferred over `==` because it is safer and more predictable.

## How to Run the Files

Use Node.js to run any JavaScript file in the project:

```bash
node 01_Chapter_JS_Learning/01_Chapter_JS_Basics/001_HelloWorld.js
```

## Summary

This project is a beginner-friendly foundation for JavaScript learning. It introduces the most important parts of the language in a practical way and helps build confidence before moving into more advanced topics like functions, arrays, objects, loops, DOM, and automation with Playwright.

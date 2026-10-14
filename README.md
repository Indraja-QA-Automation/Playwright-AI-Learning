# Playwright AI Learning

<p align="center">
  <img src="./images/playwright-ai-learning-banner.svg" alt="Playwright AI Learning banner" width="1100" />
</p>

This repository is a hands-on learning workspace for JavaScript fundamentals, AI prompt design, and QA automation thinking. It combines beginner-level JavaScript exercises with prompt-engineering patterns that improve how AI assists with testing, scripting, and problem solving.

## Why this repository exists

The goal is to build a practical foundation in:

- JavaScript basics and syntax
- Variables, keywords, identifiers, and comments
- Literals and data types
- Operators and decision logic
- Increment/decrement behavior and nullish coalescing
- Structured prompt engineering for AI tools
- Anti-hallucination practices in development and testing
- Better thinking for QA automation and Playwright-based workflows

This project is intentionally learning-focused rather than a production app.

## Learning roadmap

<p align="center">
  <img src="./images/js-learning-roadmap.svg" alt="Learning roadmap diagram" width="1100" />
</p>

## Repository structure

```text
Playwright-AI-Learning-1/
├── 00_Chapter_Prompt_engineering/
│   ├── 00_RicePot_fullform.md
│   ├── 01_RicePot_prompt.md
│   ├── 02_RicepPot_Problem_statement.md
│   ├── 04_AntiHallucination.md
│   └── 05_RicePot_Generic_Qa_Template.md
├── 01_Chapter_JS_Learning/
│   ├── 01_Chapter_JS_Basics/
│   │   ├── 001_HelloWorld.js
│   │   └── 002_Math.js
│   ├── 02_Chapter_JS_keyword_identifiers/
│   │   ├── 003_JS_Engine.js
│   │   ├── 004_JS_Let.js
│   │   ├── 005_JS_Keyword.js
│   │   ├── 006_JS_Keyword_rules.js
│   │   ├── 007_Js_Keyword_rules2.js
│   │   ├── 008_JS_comments.js
│   │   └── 009_IQ.js
│   ├── 03_Chapter_JS_Literals/
│   │   ├── 010_literals.js
│   │   ├── 011_Number.js
│   │   ├── 012_Null_undefined.js
│   │   ├── 013_Null.js
│   │   ├── 014_Literals.js
│   │   ├── 015_Number.js
│   │   ├── 016_Number_part2.js
│   │   ├── 017_Special.js
│   │   └── 018_Undefined.js
│   ├── 04_Chapter_JS_Operators/
│   │   ├── 019_Operators.js
│   │   ├── 020_Assignment_operator.js
│   │   ├── 021_Arthimetic_operator.js
│   │   ├── 022_comaprision_operator.js
│   │   ├── 023_Logical_Operator.js
│   │   ├── 024_Confusing_Comaparitor_operator.js
│   │   ├── 025_question.js
│   │   ├── 026_String_concatination.js
│   │   ├── 027_Ternary_operator.js
│   │   ├── 028_Ternary_oper_number.js
│   │   ├── 029_Ternary_operator_string.js
│   │   ├── 030_Ternary_ope_boolean.js
│   │   ├── 031_Template_Literal.js
│   │   ├── 032_Template_Literal_part2.js
│   │   ├── 033_Nested_ternary.js
│   │   ├── 034_Nested_ternary_part2.js
│   │   ├── 035_nested_ternary_ope_part3.js
│   │   └── 036_typeOf.js
│   └── 05_Chapter_JS_increment_decre_op/
│       ├── 037_Post_Increment_operator.js
│       ├── 038_Pre_increment_operator.js
│       ├── 039_Practice_exercise.js
│       ├── 040_practice_ex2.js
│       ├── 041_Practice_ex3.js
│       ├── 042_pre_decrement.js
│       ├── 043_post_decrement.js
│       ├── 044_task.js
│       └── 045_nullish_coalescing_operator.js
├── images/
│   ├── playwright-ai-learning-banner.svg
│   └── js-learning-roadmap.svg
├── README.md
└── .git/
```

## Module 1: Prompt engineering

This section contains structured prompt-learning documents such as:

- `RICE-POT` framework for writing more reliable AI instructions
- problem statement framing for QA and automation tasks
- anti-hallucination guidance for avoiding fake APIs, inaccurate methods, or broken assumptions
- reusable QA prompt templates for planning, validation, and execution

### RICE-POT mindset

The repository emphasizes these prompt-building ideas:

- Role: define the persona or job of the AI
- Instructions: give precise tasks and constraints
- Context: include environment, project state, and requirements
- Example: show sample inputs or expected output
- Parameters: specify versions, tools, and boundaries
- Output: define the exact structure required
- Tone: keep the response professional and clear

### Anti-hallucination practices

The learning material is designed to help avoid common mistakes such as:

- inventing APIs or methods that do not exist
- assuming frameworks or syntax without verification
- skipping constraints that reduce ambiguity
- generating code without checking its correctness against real libraries

These ideas are especially useful for QA automation because generated tests can fail silently when assumptions are weak.

## Module 2: JavaScript basics

The first chapter covers the core building blocks of JavaScript:

- `console.log()` for output
- arithmetic expressions and calculations
- JavaScript engine basics and runtime behavior
- `let`, `var`, and `const`
- valid and invalid identifiers
- naming conventions and keywords
- comments and code readability

Example:

```js
let age = 9;
var a = 90;
const c = 23;
console.log(age, a, c);
```

## Module 3: JavaScript literals

The literals chapter introduces fixed values written directly in code, including:

- number literals
- string literals
- boolean literals
- `null` and `undefined`
- special values and type-related checks

Examples:

```js
let num = 42;
let text = "Hello";
let flag = true;
let emptyValue = null;
let notAssigned;
```

Important understanding:

- `undefined` means a variable was declared but has no value
- `null` means the value is intentionally empty
- `typeof null` is historically `"object"`, which is a JavaScript quirk

## Module 4: JavaScript operators

This chapter includes operator practice for:

- assignment
- arithmetic
- comparison
- logical operations
- ternary expressions
- template literals
- type checks

### Common operator examples

```js
let a = 10;
a = a + 9;

console.log(10 > 5);       // true
console.log("10" === 10); // false
console.log(true && false); // false
console.log(true || false); // true
```

A central learning point is that loose comparison can be surprising:

```js
console.log("10" == 10); // true
console.log("" == 0);   // true
console.log(0 == "");  // true
```

The repository encourages safer usage of strict equality (`===`) whenever possible.

## Module 5: Increment/decrement and nullish coalescing

The final JS learning section introduces:

- pre-increment and post-increment
- pre-decrement and post-decrement
- practice exercises with value updates
- nullish coalescing operator (`??`)

Nullish coalescing is useful when you want to fallback only for `null` or `undefined` values, not for other falsy values like `0`, `false`, or empty strings.

```js
let userName = null;
let displayName = userName ?? "Guest";
console.log(displayName); // Guest
```

This matches the repository example:

```js
let amul = "null";
let val = amul ?? "dairy Milk";
console.log(val);
```

## Key learning outcomes

By the end of this project, the learner should be able to:

- read and write JavaScript syntax confidently
- understand core language rules and operator behavior
- reason about type comparisons and logic
- apply structured prompting for AI-assisted QA tasks
- reduce hallucination by asking for evidence and verification
- prepare for Playwright automation and more advanced QA work

## How to run the JavaScript files

Use Node.js from the terminal:

```bash
node 01_Chapter_JS_Learning/01_Chapter_JS_Basics/001_HelloWorld.js
```

You can run any file in the same way by pointing Node to the relevant `.js` script.

## Suggested learning path

1. Start with the basics chapter and understand `console.log()` and arithmetic.
2. Move to keywords, identifiers, and comments.
3. Practice literals and type behavior.
4. Work through operators, ternary logic, and template literals.
5. Study increment/decrement and later nullish coalescing.
6. Apply the prompt engineering ideas to AI-assisted coding and QA tasks.

## Why this project matters

This repository helps build a strong foundation for:

- understanding code structure
- writing clearer JavaScript
- designing better prompts for AI tools
- checking AI-generated output critically
- preparing for Playwright, test automation, and QA workflows

## Summary

This project blends JavaScript fundamentals with practical prompt-engineering concepts. It is a beginner-friendly learning workspace that supports writing cleaner code, reasoning through logic, and designing more reliable AI-driven automation prompts without relying on weak assumptions or hallucinated API knowledge.

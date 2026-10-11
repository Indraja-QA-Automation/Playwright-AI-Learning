# Playwright AI Learning

This repository is a hands-on learning project focused on JavaScript fundamentals, prompt engineering, and practical QA automation thinking. It combines beginner-level JavaScript examples with prompt-design patterns that improve the quality of AI-generated automation work.

## Project Goal

The main purpose of this project is to learn:
- JavaScript basics and core syntax
- Identifiers, keywords, literals, and operators
- Prompt engineering patterns for QA and automation tasks
- Anti-hallucination strategies for AI-generated code
- Stronger thinking for writing clear, high-quality prompts and automation logic

This repository is a learning notebook and practice workspace rather than a production application.

## Repository Structure

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
│   └── 04_Chapter_JS_Operators/
│       ├── 019_Operators.js
│       ├── 020_Assignment_operator.js
│       ├── 021_Arthimetic_operator.js
│       ├── 022_comaprision_operator.js
│       ├── 023_Logical_Operator.js
│       └── 024_Confusing_Comaparitor_operator.js
├── README.md
└── .git/
```

## Learning Modules

### 1. Prompt Engineering

The project includes several prompt-engineering learning documents that explain how to give AI clear instructions for automation and QA work.

#### RICE-POT Framework
The `RICE-POT` concept is used as a structured prompt model:
- Role: Who the AI should act as
- Instructions: What it must do
- Context: Background and environment details
- Example: Sample structure or expected output
- Parameters: Constraints, tools, versions, and limits
- Output: Exact format expected from the response
- Tone: Communication style and professionalism

These files explain how to make prompts more deterministic, useful, and production-aware.

#### Anti-Hallucination Practices
The anti-hallucination note focuses on preventing AI from generating fake APIs, incorrect method signatures, or outdated frameworks. Important lessons include:
- Specify exact library versions
- Add negative constraints like "do not use deprecated methods"
- Anchor prompts to real API signatures and schemas
- Ask the model to self-verify imports and method validity

This is especially valuable for QA automation because AI-generated tests can easily invent incorrect Selenium or Java patterns.

#### Generic QA Prompt Template
The generic QA prompt template shows a reusable pattern for:
- Test plans
- Test cases
- Automation tasks
- Review and planning steps

It emphasizes guided flow, assumptions, clarifications, output structure, and verification before final delivery.

### 2. JavaScript Basics

The JavaScript practice files cover the starting building blocks of the language.

#### Hello World and Basic Math
- Output is generated using `console.log()`
- JavaScript supports arithmetic expressions
- Basic operators can be used to compute values

Examples covered include:
- `console.log("Hello World")`
- arithmetic addition, subtraction, multiplication, division, and modulus

#### JavaScript Engine
The project explains that JavaScript runs inside a JavaScript engine, which is built into browsers and runtime tools like Node.js.

#### Keywords, Variables, and Identifiers
The learning material demonstrates:
- `let`, `var`, and `const`
- valid and invalid identifiers
- naming rules
- comment styles
- JavaScript keywords and rules

Examples include:
```js
let age = 9;
var a = 90;
const c = 23;
```

#### Comments
The files show:
- Single-line comments: `// ...`
- Multi-line comments: `/* ... */`
- Documentation comments: `/** ... */`

### 3. JavaScript Literals

This section explains that literals are fixed values written directly in code.

Topics covered:
- Number literals
- String literals
- Boolean literals
- Null and undefined
- Special JS values and type checks

Examples include:
- decimal numbers: `42`
- hexadecimal: `0x2A`
- binary: `0b101010`
- octal: `0o52`
- float numbers: `3.14`
- scientific notation: `1.23e4`

Important concept:
- `undefined` means a variable was declared but not assigned
- `null` means a value was intentionally set to empty
- `typeof null` is historically `object`

### 4. JavaScript Operators

The project contains practical examples of the main operator groups.

#### Assignment Operator
Used to assign a value to a variable.

```js
let a = 10;
a = a + 9;
```

#### Arithmetic Operators
- `+`
- `-`
- `*`
- `/`
- `%`
- `**`

These are used to perform numeric operations.

#### Comparison Operators
The project explains:
- `<`, `>`, `<=`, `>=`
- `==` for loose comparison
- `===` for strict comparison
- `!=` and `!==`

Key lesson:
- `==` compares values after type conversion
- `===` compares both value and type

#### Logical Operators
- `&&` logical AND
- `||` logical OR
- `!` logical NOT

Examples show how these operators are used to evaluate conditions.

#### Confusing Comparison Behavior
A major learning point is that loose equality can cause surprising results.

Examples:
```js
console.log("10" == 10); // true
console.log("" == 0);    // true
console.log(0 == "");   // true
```

The project strongly recommends using strict equality for safer code:
```js
console.log("10" === 10); // false
```

## Key Lessons Learned

The project reinforces several core ideas:
- JavaScript is a dynamically typed language
- Variables must follow naming rules
- `let`, `var`, and `const` behave differently
- Comments keep code readable and understandable
- Literals are direct values in code
- `null` and `undefined` are not the same thing
- Operators are essential for logic and calculations
- Loose comparison can be confusing; strict comparison is safer
- AI prompts work much better when they are specific, constrained, and grounded in real evidence

## How to Run the JavaScript Files

Use Node.js from the command line:

```bash
node 01_Chapter_JS_Learning/01_Chapter_JS_Basics/001_HelloWorld.js
```

You can run any JavaScript example file in the same way.

## Why This Project Matters

This project builds the foundation for more advanced work in automation and AI-assisted development. It helps with:
- understanding code structure
- writing clear JavaScript
- building better prompts for AI tools
- thinking critically about generated output
- preparing for Playwright-based automation and QA testing workflows

## Summary

This repository is a beginner-friendly learning project that mixes JavaScript fundamentals with practical prompt-engineering concepts. It documents the core ideas needed to write clean code, reason about logic, and create better AI-driven automation prompts without hallucinations or weak assumptions.

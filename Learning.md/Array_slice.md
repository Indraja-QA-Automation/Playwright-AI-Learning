Read 
Completed with input: {
  "path": "C:\\Playwright_4X_batch\\Playwright-AI-Learning-1\\01_Chapter_JS_Learning\\12_Chapter_Arrays\\093_Array_Slicing.js"
}

In JavaScript, `slice(start, end)` returns a **new array** containing elements from the `start` index up to, but **not including**, the `end` index. It does not modify the original array.

Given:

```js
let numbers = [10, 20, 6, 30];
// indexes:     0   1  2   3
```

- `numbers.slice(2, 4)` → `[6, 30]` — indexes 2 and 3; index 4 is excluded.
- `numbers.slice(1)` → `[20, 6, 30]` — from index 1 through the end.
- `numbers.slice(-3, -1)` → `[20, 6]` — negative indexes count from the end (`-1` is the last item), and the end index is still excluded.
- `numbers.slice(-2)` → `[6, 30]` — the last two elements.
- `numbers.slice(1, 3)` → `[20, 6]`.
- `numbers.slice(-1, -3)` → `[]` — start comes after the end in the array’s order.

Your example also logs `numbers` afterward to show the original array remains `[10, 20, 6, 30]`.
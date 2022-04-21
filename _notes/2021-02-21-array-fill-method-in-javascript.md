---
title: Array Fill Method in JavaScript
publish: true
created: '2021-02-21'
tags:
  - devlog
  - javascript
fileName: Array Fill Method in JavaScript
updated: '2021-02-21'
---

Use the `fill` method to fill an array with values.

Example:

```javascript
const a = new Array(3).fill(-1);

// Result: a = [-1, -1, -1]
```

The `fill` method can be called on an existing array as well to fill it with the defined value.

Creating a two-dimensional array with an initial value (e.g. 3x5 matrix):

```javascript
const a = [...Array(3)].map(e => Array(5).fill(0))
```

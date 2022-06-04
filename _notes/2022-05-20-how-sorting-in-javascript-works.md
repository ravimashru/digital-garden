---
publish: true
title: How sorting in JavaScript works
created: '2022-05-20'
tags:
  - javascript
  - devlog
fileName: How sorting in JavaScript works
updated: '2022-05-20'
---

A direct answer to this question is "it depends". This is because JavaScript is actually a specification. The actual implementation of sorting depends on the JavaScript engine.

For example, Google's open source V8 engine (used in Chrome and Node.js) implements the specification in a particular way. It [uses Tim sort](https://v8.dev/blog/array-sort).

But what does the specification say about the behavior exactly? The `Array.prototype.sort` [specification](https://tc39.es/ecma262/#sec-array.prototype.sort) specifies the algorithm.

## References

- [Getting things sorted in V8](https://v8.dev/blog/array-sort)

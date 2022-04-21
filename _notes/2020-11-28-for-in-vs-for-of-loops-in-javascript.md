---
title: for-in vs for-of loops in JavaScript
publish: true
created: '2020-11-28'
tags:
  - devlog
  - javascript
fileName: for-in vs for-of loops in JavaScript
updated: '2020-11-28'
---

```javascript
const arr = [1, 1, 2, 3, 5];

const obj = {
  foo: 'bar',
  foo2: ['b', 'ba', 'bar']
};
```

`for-in` on arrays prints indices

```javascript
for (let i in arr) {
  console.log(i);
}
```

```
0
1
2
3
4
```

`for-of` on arrays prints its elements

```javascript
for (let i of arr) {
  console.log(i);
}
```

```
1
1
2
3
5
```

`for-in` on objects prints keys

```javascript
for (let i in obj) {
  console.log(i);
}
```

```
foo
foo2
```

`for-of` on objects: EXCEPTION!

```javascript
for (let i of obj) {
  console.log(i);
}
```

```
for (let i of obj) {
  ^

TypeError: obj is not iterable
```

## Summary

| Loop   | Arrays  | Objects    |
| ------ | ------- | ---------- |
| for-in | indices | keys       |
| for-of | values  | EXCEPTION! | 


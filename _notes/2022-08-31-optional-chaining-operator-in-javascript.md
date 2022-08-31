---
title: Optional chaining operator in JavaScript
publish: true
created: '2022-08-31'
tags:
  - javascript
fileName: Optional chaining operator in JavaScript
updated: '2022-08-31'
---

The optional chaining operator (`?.`)  can be used to access the following:
- Properties (`foo?.bar`)
- Indexes (`foo?.[1]`)
- Functions (`foo?.()`)

Examples:

```typescript
const foo = {
    bar: 'baz',
    ping: {
        pong: 'bam'
    },
    fn: () => "You found me!"
};

console.log(foo.ping?.pong);
// Output: 'bam'

console.log(foo.foobar?.pong);
// Output: undefined

console.log(foo.bar?.[0]);
// Output: 'b'

console.log(foo.baz?.[0]);
// Output: undefined

console.log(foo.fn?.());
// Output: 'You found me!'

console.log(foo.secretfn?.());
// Output: undefined
```

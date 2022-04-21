---
title: echo without newline
publish: true
created: '2021-10-23'
tags:
  - devlog
  - shell
fileName: echo without newline
updated: '2021-10-23'
---

Use `echo -n`.

Useful when base64 encoding credentials.

```shell
echo -n 'username:password' | base64
```

---
title: find cheatsheet
publish: true
created: '2021-05-20'
updated: '2021-10-08'
tags:
  - cheatsheet
fileName: find cheatsheet
---

To find all files in the `src` folder that have the text `myFunction`:

```
find src -type f -exec grep 'myFunction' {} -l \;  
```

Note: `-l` is a grep option to print only name of files containing matching lines.

## Resources

- [find command in Linux with examples - Geeksforgeeks](https://www.geeksforgeeks.org/find-command-in-linux-with-examples/)


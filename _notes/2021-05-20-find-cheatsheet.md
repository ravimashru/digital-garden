---
title: find cheatsheet
publish: true
created: '2021-05-20'
updated: '2022-04-29'
tags:
  - cheatsheet
fileName: find cheatsheet
---

To find all files in the `src` folder that have the text `myFunction`:

```shell
$ find src -type f -exec grep 'myFunction' {} -l \;  
```

Note: `-l` is a grep option to print only name of files containing matching lines.

---

To find all paths that contain the string "foo":

```shell
$ find . -type d -iname foo\*
```

`iname` - case insensitive search

`name` - case sensitive search

## Reference

- [find command in Linux with examples - Geeksforgeeks](https://www.geeksforgeeks.org/find-command-in-linux-with-examples/)
- [find a path that contains specific text - Stack Overflow](https://stackoverflow.com/questions/18086472/find-a-path-that-contains-specific-text)


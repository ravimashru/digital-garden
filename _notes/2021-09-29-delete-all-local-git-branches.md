---
title: Delete all local Git branches
publish: true
created: '2021-09-29'
tags:
  - devlog
  - git
fileName: Delete all local Git branches
updated: '2021-09-29'
---

```shell
$ git branch | grep -v "master" | xargs git branch -D 
```

Source: [https://coderwall.com/p/x3jmig/remove-all-your-local-git-branches-but-keep-master](https://coderwall.com/p/x3jmig/remove-all-your-local-git-branches-but-keep-master)

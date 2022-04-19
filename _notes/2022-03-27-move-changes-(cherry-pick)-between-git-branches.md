---
title: Move changes (cherry-pick) between Git branches
publish: true
created: '2022-03-27'
tags:
  - devlog
  - git
fileName: Move changes between Git branches
updated: '2022-03-27'
---

Move a commit in another branch to the current branch (cherry pick)

```shell
$ git cherry-pick <commit_id>
```

Move contents of a commit in another branch to staging index

```shell
$ git cherry-pick -n <commit_id>
```

---
title: git cheatsheet
publish: true
created: '2022-04-22'
tags:
  - git
  - cheatsheet
fileName: git cheatsheet
updated: '2022-04-22'
---

## General settings

### Change the default editor

```shell
$ git config --global core.editor "vim"
```

### Aliases

View commit history as a graph

```shell
$ git config --global alias.lol 'log --oneline --graph --decorate --all'
```

## Branches

### Delete all local branches

```shell
$ git branch | grep -v "master" | xargs git branch -D 
```

Reference: [Remove all your local git branches but keep master - Coderwall](https://coderwall.com/p/x3jmig/remove-all-your-local-git-branches-but-keep-master)

### Rename branches

Rename current branch

```shell
$ git branch -m <new_name>
```

Rename another branch

```shell
$ git branch -m <branch_name> <new_name>
```

## Commits

### Combine multiple commits

**Step 1**: Use `git rebase` in interactive mode with the parent commit (the commit you would like to start merging from).

```shell
$ git rebase -i <parent_commit_it>
```

Example:

```shell
$ git rebase -i HEAD~3
```

This will attempt to merge the last three commits into one.

**Step 2**: In the next screen, `pick` the first commit and `squash` the rest.

**Step 3**: Edit the commit message.

Reference: [How to Combine Multiple Git Commits into One - w3docs](https://www.w3docs.com/snippets/git/how-to-combine-multiple-commits-into-one-with-3-steps.html)

### Move commits between branches

Move a commit in another branch to the current branch (cherry-pick)

```shell
$ git cherry-pick <commit_id>
```

Move contents of a commit to staging index

```shell
$ git cherry-pick -n <commit_id>
```

### Reverting merge commits

The `-m` option has to be specified when reverting merge commits.

Merge commits have multiple parents and `-m` specifies which parent commit to revert to.

Reference: [How to revert a merge commit that's already pushed to remote branch? - Stack Overflow](https://stackoverflow.com/questions/7099833/how-to-revert-a-merge-commit-thats-already-pushed-to-remote-branch)


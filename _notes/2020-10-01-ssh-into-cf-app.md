---
title: SSH into CF App
publish: true
created: '2020-10-01'
tags:
  - cloud-foundry
fileName: SSH into CF App
updated: '2020-10-01'
---

## Error

```
$ cf ssh <app_name>
Error opening SSH connection: You are not authorized to perform the requested action.
FAILED
```

## Solution

* Enable SSH using `cf enable-ssh <app_name>`
* Restart app using `cf rs <app_name>`

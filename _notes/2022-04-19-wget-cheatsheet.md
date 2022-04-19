---
title: wget cheatsheet
publish: true
created: '2022-04-19'
tags:
  - devlog
  - shell
fileName: wget cheatsheet
updated: '2022-04-19'
---

Alpine containers don't have cURL. If there is no external connectivity, it can't be installed (`apk add curl`) and `wget` has to be used.

```shell
$ wget -S --no-check-certificate https://astra.example.com
```

- `-S`: display response on console
- `--no-check-certificate`: do not verify SSL certificate (like `-k` in cURL)

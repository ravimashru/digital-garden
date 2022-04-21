---
title: Format large JSON file
publish: true
created: '2021-08-19'
tags:
  - devlog
  - python
  - json
fileName: Format large JSON file
updated: '2021-08-19'
---

VSCode doesn't format JSON file if it's too large.

Use python to format large JSON files:

```shell
$ python -m json.tool < file.json
```

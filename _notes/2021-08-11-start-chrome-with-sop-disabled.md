---
title: Start Chrome with SOP Disabled
publish: true
created: '2021-08-11'
tags:
  - devlog
  - macos
fileName: Start Chrome with SOP Disabled
updated: '2021-08-11'
---

Disable same-origin policy and other web security features

```shell
$ open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security
```



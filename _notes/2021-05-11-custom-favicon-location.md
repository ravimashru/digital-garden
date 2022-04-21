---
title: Custom favicon location
publish: true
created: '2021-05-11'
tags:
  - devlog
  - html
fileName: Custom favicon location
updated: '2021-05-11'
---

Browsers look for shortcut icon at `/favicon.ico`.

Custom location useful when static assets are served at a different endpoint (e.g. when using FastAPI).

```html
<link rel="shortcut icon" href="/static/favicon.ico">
```



---
title: Static Web Server in Go
publish: true
created: '2022-02-10'
tags:
  - devlog
  - go
fileName: Static Web Server in Go
updated: '2022-02-10'
---

```go
package main

import "net/http"

func main() {
  http.ListenAndServe(":8000", http.FileServer(http.Dir("public")))
}
```

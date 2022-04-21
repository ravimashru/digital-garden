---
title: Debouncing Window Resize Event
publish: true
created: '2022-01-29'
tags:
  - devlog
  - javascript
fileName: Debouncing Window Resize Event
updated: '2022-01-29'
---

```javascript
window.addEventListener('resize', () => {
  window.clearTimeout(window.resizeTimeout)
  window.resizeTimeout = window.setTimeout(() => {
    doSomething()
  }, 500)
})
```

Source: [Debouncing the window resize event - Per Djurner](https://perdjurner.com/blog/debouncing-the-window-resize-event)

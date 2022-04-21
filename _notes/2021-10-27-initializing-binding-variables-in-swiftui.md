---
title: Initializing Binding Variables in SwiftUI
publish: true
created: '2021-10-27'
tags:
  - devlog
  - swift
  - swiftui
fileName: Initializing Binding Variables in SwiftUI
updated: '2021-10-27'
---

You can't initialize `@Binding` variables!

A binding is not a source of truth.

The source of truth should be something like `@State`.

Binding is just passed to child views with read/write access from source of truth

Source: [https://developer.apple.com/forums/thread/120394](https://developer.apple.com/forums/thread/120394)

---
title: Switch between XCode versions
publish: true
created: '2021-09-16'
tags:
  - devlog
  - macos
fileName: Switch between XCode versions
updated: '2021-09-16'
---

Install command line tools

```shell
$ xcode-select --install
```

Enable command line tools

```shell
$ sudo xcode-select --switch /Library/Developer/CommandLineTools
```

Enable full XCode app

```shell
$ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
````

Source: [https://github.com/nodejs/node-gyp/issues/569](https://github.com/nodejs/node-gyp/issues/569)

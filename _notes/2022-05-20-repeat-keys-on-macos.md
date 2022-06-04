---
title: Repeat Keys on macOS
publish: true
created: '2022-05-20'
tags:
  - macos
fileName: macOS repeat keys
updated: '2022-05-20'
---
Long-pressing a key in macOS allows you to select a variation of the letter.

For example, long pressing 'e' shows this:

<img src="/assets/img/macos long press option.png" />

To repeat the pressed character instead of showing this, run this in the terminal:

```shell
$ defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false
```

Note: restart open applications to start getting repeating keys.

To show alternate characters again, run this in the terminal:

```shell
defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool true
```

Source: https://www.idownloadblog.com/2015/01/14/how-to-enable-key-repeats-on-your-mac/

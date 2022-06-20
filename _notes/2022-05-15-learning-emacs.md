---
title: Learning emacs
created: '2022-05-15'
publish: true
tags:
  - project
fileName: Learning emacs
updated: '2022-05-15'
---


Q: Why learn emacs when I know a bit of Vim and heavily use VS Code already?  
A: Here are a few reasons:

- To develop [[book - Range\|Range]]
- A new technical challenge
- MAYBE eventually use org-mode (although I really like my current TickTick setup; maybe use emacs just for PKM instead of Obsidian?)

---

## The Plan

- [x] Go through emacs tutorial
- [ ] Try different projects
    - [ ] Movie recommender backend (Python)
    - [ ] Movie recommender frontend (Angular)
    - [ ] Meal planner backend/Things Web backend (Java)
    - [ ] Learn a bit of Go (Go, obviously)
- [ ] Try out org-mode
- [ ] Try key bindings that don't cause RSI (spacemacs, doom, evil mode etc.)
- [ ] Learn elisp and tinker with emacs and plugins/create plugins

## Things to try out

- Git client (magit), inline git changes like VS Code
- Linting and inline errors
- Autocomplete, LSP integration

## Resources

- [Emacs: The Best Python Editor?](https://realpython.com/emacs-the-best-python-editor/)

## Cheatsheet

### Navigation

```
        			  Previous line, C-p
            				  :
            				  :
   Backward, C-b .... Current cursor position .... Forward, C-f
            				  :
            				  :
        			    Next line, C-n
```

| Key                   | Description                                        |
| --------------------- | -------------------------------------------------- |
| C-v                   | Move forward one screen                            |
| M-v                   | Move backward one screen                           |
| C-l                   | Move text at cursor in middle/top/bottom of screen |
| M-f                   | Move one word forward                              |
| M-b                   | Move one word backward                             |
| C-a                   | Go to beginning of line                            |
| C-e                   | Go to end of line                                  |
| M-a                   | Go to beginning of sentence                        |
| M-e                   | Go to end of sentence                              |
| M - <                 | Go to start of document                            |
| M - >                 | Go to end of document                              |
| C-u `count` `command` | Repeat command count times                         |
|                       |                                                    |

### Editing

| Key                | Description                         |
| ------------------ | ----------------------------------- |
| BACKSPACE          | Delete character before cursor      |
| C-d                | Delete character after cursor       |
| M - BACKSPACE      | Kill word before cursor             |
| M-d                | Kill word after cursor              |
| C-k                | Kill from cursor to end of line     |
| M-k                | Kill from cursor to end of sentence |
| C-SPACE            | Start highlighting                  |
| C-w                | Kill highlighted text               |
| C-y                | Yank last killed text               |
| M-y                | Cycle through killed text           |
| C-u `count` `char` | Insert char count times             |
|                    |                                     |

Killing vs. Deleting
- Killed text can be reinserted (aka yanking)
- Deleted text cannot be reinserted, but you can undo a deletion

Undo - C-x, u OR C-/ OR C-\_


Quit emacs - C-x, C-c

Abort command - C-g

### Files

| Key     | Description                  |
| ------- | ---------------------------- |
| C-x C-f | Find a file                  |
| C-x C-s | Save file                    |
| C-x s   | Interactively save all files |
| C-x C-b | List buffers                 |
| C-x b   | Switch to buffer             |
|         |                              |

C-h m - view docs of current major mode

C-x f - set column width (to be used with auto-fill-mode minor mode)
M-q - Re-fill paragraph 

### Search

| Key | Description                 |
| --- | --------------------------- |
| C-s | Search in forward direction |
| C-r | Search in reverse direction |

### Windows

(i.e. splits)

| Key   | Description                                      |
| ----- | ------------------------------------------------ |
| C-x 0 | Close current window                             |
| C-x 1 | Close all other windows, keep window with cursor |
| C-x 2 | Split screen into two windows                    |
| C-M-v | Scroll bottom window                             |
| C-x o | Move cursor to other window                      |

### Frames

(i.e. windows)

| Key     | Description           |
| ------- | --------------------- |
| C-x 5 2 | Create a new frame    |
| C-x 5 0 | Remove selected frame | 

### Help

C-x t - open tutorial

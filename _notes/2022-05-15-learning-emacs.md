---
title: Learning emacs
created: '2022-05-15'
updated: '2023-03-11'
publish: true
tags:
  - project
fileName: Learn emacs
---


Q: Why learn emacs when I know a bit of Vim and heavily use VS Code already?  
A: Here are a few reasons:

- To develop [[book - Range\|Range]].
- A new technical challenge.
- To use as fully customizable PKM system (with org-roam) instead of Obsidian (which works great and allows customization through plugins, but is closed source and very difficult to get a license for at work).

---

## The Plan

- [x] Go through emacs tutorial
- [ ] Try out markdown mode
    - https://github.com/jrblevin/markdown-mode
    - https://github.com/jrblevin/markdown-mode-guide
- [ ] Explore: making emacs org mode look nice (https://zzamboni.org/post/beautifying-org-mode-in-emacs/)
- [ ] Try different projects
    - [ ] Movie recommender backend (Python)
    - [ ] Movie recommender frontend (Angular)
    - [ ] Meal planner backend/Things Web backend (Java)
    - [ ] Learn a bit of Go (Go, obviously)
- [ ] Configure ESLint and Prettier for TS projects
- [ ] Try out org-mode
    - [ ] Create PARA setup (Single file for all PARA? One file for each P, A, R and A? One file for each project/area/resource etc. and an index file merging all of them?)
    - [ ] Read the org manual (https://orgmode.org/manual/Summary.html)
    - [ ] Read org guide (https://orgmode.org/orgguide.pdf)
    - [ ] Fill out [[org mode cheatsheet]]
- [ ] Pilot org-roam for work knowledge base
    - [ ] Read through Org roam manual (https://www.orgroam.com/manual.html)
    - [ ] Different slip boxes (main, reference, drafts)
    - [ ] Spaced repetition for learning
    - [ ] shortcut to reorder title (and everything below it)?
    - [ ] Explore code: https://github.com/org-roam/org-roam
- [ ] Try key bindings that don't cause RSI (spacemacs, doom, evil mode etc.)
- [ ] Learn elisp and tinker with emacs and plugins/create plugins

## Plugins

- Tree-like file explorer
    - dired-sidebar
    - emacs-neotree
    - Other file explorers
        - ibuffer-sidebar


## Things to try out

- Git client (magit), inline git changes like VS Code
- Linting and inline errors
- Autocomplete, LSP integration
- Org mode and org roam
	- Move project list and project reference to org roam
	- Keep next actions list in Google Tasks
		- Accessible from phone
		- Easy to convert email to task

## Reading List

- [How I Take Notes with Org-roam](https://jethrokuan.github.io/org-roam-guide/)
- https://www.gnu.org/software/emacs/manual/html_node/eintr/On-Reading-this-Text.html
- https://ccrma.stanford.edu/guides/package/emacs/emacs.html
- https://www.reddit.com/r/emacs/comments/7i2alo/how_to_read_and_understand_gnu_emacs_source_code/
- An Introduction to Programming in Emacs Lisp
- https://pragmaticemacs.wordpress.com/



## Resources

- [Emacs: The Best Python Editor?](https://realpython.com/emacs-the-best-python-editor/)

## Cheatsheet

Open tutorial - `C-h t`

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

### Files and Buffers

| Key     | Description                  |
| ------- | ---------------------------- |
| C-x C-f | Find a file                  |
| C-x C-s | Save file                    |
| C-x s   | Interactively save all files |
| C-x C-b | List buffers                 |
| C-x b   | Switch to buffer             |
| C-x ->  | Next buffer                  |
| C-x <-  | Previous buffer              |
| C-x k   | Kill buffer                  | 


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

| Key       | Description                                      |
| --------- | ------------------------------------------------ |
| C-x 0     | Close current window                             |
| C-x 1     | Close all other windows, keep window with cursor |
| C-x 2     | Split screen horizontally into two windows       |
| C-x 3     | Split screen vertically into two windows         |
| C-x 4 C-f | Find file in new window below                    |
| C-x 5 C-f | Find file in new frame                           |
| C-M-v     | Scroll bottom window                             |
| C-x o     | Move cursor to other window                      |
| C-x ^     | Make window taller                               |
| C-x }     | Make window wider                                |
| C-x {     | Make window narrower                             |

### Frames

(i.e. windows)

| Key     | Description           |
| ------- | --------------------- |
| C-x 5 2 | Create a new frame    |
| C-x 5 0 | Remove selected frame | 

### Getting help

- Getting help - `C-h ?`
- Help for character sequence, e.g. C-p - `C-h c C-p`
- More information about command - `C-h k C-p`
- Describe a command - `C-h x`
- Documentation of variables - `C-h v`
- List all M-x commands with a given keyword - `C-h a`
- Read included manual - `C-h i`
- Open tutorial - `C-h t`

Navigating info tree (e.g. in `C-h i`)
- l - go to last node (go back after navigation)
- ^ - go one level up in info tree
- n - go to next node (next page in manual)

### Dired

i - insert contents of subdirectory later in buffer
C-u C-SPC - return to previous position in buffer
^ - return to parent directory in same buffer
( - hide details
C-u k - on subdirectory header line to remove it
C-M-n - next subdirectory listing
C-M-p - previous subdirectory listing

Toggle subtrees
- M-x dired-subtree-insert
- M-x dired-subtree-remove

### Writing code

- Insert comment at the end of current line - `M-;`
- Comment out line - `C-x C-;`
- Kill comment on current line - `C-u M-;`

---
title: tmux cheatsheet
publish: true
created: '2021-05-18'
updated: '2025-05-01'
tags:
  - cheatsheet
fileName: tmux cheatsheet
---

See pane numbers, `C-b, q`

## Switch between sessions

`Ctrl-b` + `s`

## Reordering tmux windows

### Move windows

`:movew -r` - renumber all windows sequentially.

`:movew [-s A] -t B` - renumber window A to B (`-s A` is optional; current window considered source if unspecified).

### Swap windows

1. Hit `Ctrl + b` and then `:` to go to the tmux command prompt
2. To swap windows 1 and 3: `swap-window -s 3 -t 1`

Source: [https://superuser.com/a/343574/1143874](https://superuser.com/a/343574/1143874)

### Move a window one position

To the left: `swap-window -t -1`

To the right: `swap-window -t +1`

### Move a window to a new session

Go to the window to move, `Ctrl-b + :`, `move-window -t <name of target session>`

## Moving a pane between windows

To move a pane from window 2 to window 1:

1. Switch to window 2.
2. Mark the desired pane with `Ctrl-b, m`.
3. Switch to window 1.
4. Call `join-pane`: `Ctrl-b + :, join-pane`.

## Resizing tmux panes

Hit `Ctrl + b` and then `:` to go to the tmux command prompt

Use the `resize-pane` command. Examples:

```
:resize-pane -D (Resizes the current pane down)
:resize-pane -U (Resizes the current pane upward)
:resize-pane -L (Resizes the current pane left)
:resize-pane -R (Resizes the current pane right)
:resize-pane -D 10 (Resizes the current pane down by 10 cells)
:resize-pane -U 10 (Resizes the current pane upward by 10 cells)
:resize-pane -L 10 (Resizes the current pane left by 10 cells)
:resize-pane -R 10 (Resizes the current pane right by 10 cells)
```

Source: https://michaelsoolee.com/resize-tmux-panes

## Navigating between panes using vi key bindings

```
setw -g mode-keys vi
bind-key h select-pane -L
bind-key j select-pane -D
bind-key k select-pane -U
bind-key l select-pane -R
```

## Scrolling

`ctrl + b` and then `[`. Hit `ESC` to quit scroll mode.

## Open same tmux session in two terminals

Opening a tmux session in a new window syncs the active window between the two terminals.

To open another terminal instance, attach it to the same session, but see a different window inside it, you have to create a new session:

```shell
t new-session -t 'old session name or number'
```

Changing the active window in this new session won't cause the window open in the first terminal to change.

Source: https://unix.stackexchange.com/questions/24274/attach-to-different-windows-in-session


## Resources
 - [tmuxcheatsheet.com](https://tmuxcheatsheet.com/)

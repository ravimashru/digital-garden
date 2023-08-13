---
title: vim cheatsheet
publish: true
created: '2020-05-02'
updated: '2022-04-01'
tags:
  - cheatsheet
fileName: vim cheatsheet
---
## Get Help

`:help` - open the help docs. `Ctrl+w - o` to open help docs in full screen.

`:helpgrep <term>` - find help for a specific term. Use `:cnext` and `:cprevious` to cycle through matches.

`Ctrl-]` to follow a link, `Ctrl-t` to go back.

## Plug (Plugin Manager)

[Installation instructions](https://github.com/junegunn/vim-plug#installation)

### Install plugins

Use `:PlugInstall`.

Note: `:PlugInstall` will only be available after `plug#start() ... plug#end()` blocks in have been added to `.vimrc`.

### Delete plugins

1. Delete the `Plug` line(s) from the `.vimrc`.
2. Source the `.vimrc` (`:source %` or `:so %` if `.vimrc` is open in buffer).
3. Call `:PlugClean`.

## Cursor and files

`Ctrl-g` - show location in a file and file status

`:r FILE` - read FILE and insert its contents where cursor is

`:r !<cmd>` - execute command and insert its output where cursor is

`o` - open a line below cursor and go to insert mode, `O` to open a line above.

`r` - replace single character, `R` to replace more than one character.

## Configurations

### Tabs and Indentation

`set cindent` - Enable "C style" indenting. Example: when you type `if (flag) {` and hit enter, the next line will be indented. When you type the closing `}` of the block, unindenting will happen.

`set shiftwidth=N` - use N spaces for each step of indent when using `cindent`.

`set tabstop=N` - number of white spaces for a single tab. Whenever spaces add up to the size of `tabstop`, they are turned into a single tab character. This can be prevented by setting `expanddtab`.

`set expandtab` - replace tab character with spaces.

`set softtabstop=N` - move N spaces when pressing `TAB` and erasing tabs. A value of `0` disables `softtabstop` and gives regular tab. A negative value means fall back to `shiftwidth`. (See [What is `softtabstop` used for?](https://vi.stackexchange.com/a/28017))

### Syntax highlighting

`syntax on` - enable syntax highlighting.

### Splits

`set splitbelow` - open split pane below open pane

`set splitright` - open split pane to the right of open pane

### Line numbers

`set [no]number` - absolute line numbers, `set [no]rnu` - relative line numbers.

### Others

To check for configured value, use `?`, e.g. `:set tabstop?`.

## View whitespace characters

Add to `.vimrc`:

```vim
set listchars=eol:$,tab:>·,trail:~,extends:>,precedes:<,space:·
```

Show the special characters using `:set list` and hide them using `:set nolist`

## Indenting

`==` - Correct indentation of the current line.

`gg=G` - Re-indent the entire file.

`>>` - Increase indentation of current line.

`<<` - Decrease indentation of the current line.

## Folding

[Reference](https://vim.fandom.com/wiki/Folding)

`zc` - close fold

`zo` - open fold

`za` - toggle fold

To operate on all nested folds, use capital letter after `z`, i.e. `zC`, `zO`, `zA`.

`zr` - open one level of folds throughout buffer (regardless of cursor position)

`zR` - open all folds in file

`zm` - close one level of folds throughout buffer (regardless of cursor position)

`zM` - close all folds in file

## Searching

`/` to start search, `?` to search in backward direction.

`n` to search again, `N` to search again in opposite direction.

`%` to find matching bracket.

### Repeat search

After searching, an empty search pattern will repeat the last search. This works with `/`, `:s` and `:g`.

Source: [https://vim.fandom.com/wiki/Searching](https://vim.fandom.com/wiki/Searching)

### Find a character `x` in the current line

- `f-x`: find the next occurence of the character
- `F-x`: find the previous occurence of the character
- `;`: repeat in direction of search
- `,`: repeat in reverse direction of search

### Search for a string in the register

After pressing `/` to enter a search string, you can then use `Ctrl+R` and type the letter representing the register that you want to use.

Source: [https://stackoverflow.com/questions/2312844/vim-yank-into-search-register](https://stackoverflow.com/questions/2312844/vim-yank-into-search-register)

### Search and replace

`:#,#s/old/new/g` - replace between line numbers (inclusive)

`:%s/old/new/g` - replace in entire file

`:%s/old/new/gc` - replace in entire file with prompt

- y - substitute
- n -skip
- a - substitute this and all remaining matches
- q - quit command
- l - substitute this match and quit
- ^E - scroll screen up
- ^Y - scroll screen down

## Change current working directory

In Vim: `:cd`

In NERDTree: Focus on node in NERDTree tab that needs to be set as cwd and press keys `cd`

## NERDTree

Open selected node in a new tab: place cursor on the folder and press `t`.

Open file/folder menu: press `m`.

## Buffers

- Open buffer in split
  - Horizontal split: `:sb N`
  - Vertical split: `vert sb N`

- Open a new file in split mode
  - Horizontal split: `:sp filename`
  - Vertical split: `:vsp filename`

## Splits

- Move split to right - `C-W L`
- Move split to a new tab - `C-W T`

- Resize all windows to equal dimensions based on their splits - `C-W =`
- Resize height of current window - `C-W + / -`
- Resize width of current window - `C-W < / >`

## Highlighting

- Highlight all occurences of word under cursor (`*`)
- Highlight all occurences of words that contain word under cursor (`g*`)
- Hide all highlights - `:noh`
- Highlight search results - `:set hlsearch`

## Navigation

- Go to definition of method under cursor - `gd`
- Go to file under cursor - `gf`
- Open file under cursor in new split - `C-W C-F`
- Go back - `C-O`, Go forward - `C-I`

- Move line under cursor to the center of screen - `zz` (lowercase, uppercase `ZZ` is for save and exit)
- Move line under cursor to top of screen - `zt`
- Move line under cursor to bottom of screen - `zb`

## FZF

- Open file in horizontal split - `C-x`
- open file in vertical split - `C-v`

## Inserting a character as it is

Problem: when pressing TAB, the tab character is automatically converted to spaces (because of `expandtab`)

Solution: Press `Ctrl + V` and then press `TAB`. Works in insert and command (`:` at bottom) mode.

Source: [https://stackoverflow.com/questions/6951672/how-can-i-insert-a-real-tab-character-in-vim](https://stackoverflow.com/questions/6951672/how-can-i-insert-a-real-tab-character-in-vim)

## Regular expressions with magic

Any Vim search pattern can include the special sequence `\v` (very magic), and this will make every following character except a-zA-Z0-9 and \_ have special meaning. Using `\V` has the opposite effect: all characters have their literal meaning and must be preceded by `\` to activate their special meaning.

Source: [https://vim.fandom.com/wiki/Simplifying_regular_expressions_using_magic_and_no-magic](https://vim.fandom.com/wiki/Simplifying_regular_expressions_using_magic_and_no-magic)

## Copying text across vim instances

Copied text is stored in registers in vim. ((More about registers: [Vim registers: The basics and beyond](https://www.brianstorti.com/vim-registers/)::rmn))
<!--SR:!2023-08-17,4,270-->

The `*` and `+` registers are used for the system clipboard. They can also be used to copy text across vim instances.

Copy to one of these from one vim instance: `" * y`

Paste from it in another vim instance: `" * p`


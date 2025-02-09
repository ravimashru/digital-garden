---
title: Learning Vim
created: '2022-05-17'
updated: '2022-07-19'
publish: true
tags:
  - project
fileName: Learn Vim
---

Something for me to do along with [[Learn emacs]]. I'm comfortable with Vim, but I can dive deeper as a technical challenge for myself.

Whenever I say vim, I actually mean neo-vim, because:
- Neo-vim is more extensible
- Neo-vim supports LSP

---

How I set up vim depends on what I want it to do for me. Here's what I need from a good editor/IDE while programming (in no particular order):
- Syntax highlighting
- Auto-complete 
- View multiple files at once
- Search for function/text in entire codebase
- View locations where method is used (where-used list)
- Go to definition of method/class
- VCS integration (view lines added, changed, deleted in context)
- View documentation of some code (i.e. docstrings in Python)
- Type hints while typing code
- Refactor (rename variables, move/rename files and auto-update imports)
- Show linting and compiler errors inline
- Open terminal/runtime for quick evaluations (e.g. Python terminal, NodeJS terminal, etc.)

---

## The Plan

- [ ] Go through vimtutor and add important commands to [[vim cheatsheet]]
- [ ] Create complete setup for Angular development (git, linting, autocomplete, etc.)
	- https://pragmaticpineapple.com/ultimate-vim-typescript-setup/
	- Configure ESLint and Prettier
- [ ] Try creating different configs for different languages (TS, Python), using modular configurations instead of a giant .vimrc file
	- [ ] https://vimways.org/2018/from-vimrc-to-vim/
- [ ] Learn VimScript and tinker with existing plugins/create new ones
- [ ] Find a Git client that works like VS Code’s client


## Notes

### Installation

Installation instructions are available in the [GitHub repository](https://github.com/neovim/neovim#install-from-package).

## Related

- [[vim cheatsheet]]

## Resources

### Books

- Modern Vim, Pragmatic Bookshelf (2018)
- Practical Vim, Pragmatic Bookshelf (2015)
- Mastering Vim, Packt Publishing (2018)


---
title: Install New Font in Inkscape on Ubuntu
publish: true
created: '2019-08-07'
tags:
  - devlog
  - ubuntu
fileName: Install New Font in Inkscape on Ubuntu
updated: '2019-08-07'
---

 1. Create a folder for the font in `/usr/share/fonts/truetype`. (Of course, this is only for TTFs)
 2. Move the `.ttf` file into the newly created folder.
 3. Delete the font caches at `/usr/share/fonts/*fonts-cache-1` and `~/*fonts.cache-1`.
 4. Restart Inkscape.
 5. Enjoy the new font!

Reference: [https://www.youtube.com/watch?v=6C3hC47JatY](https://www.youtube.com/watch?v=6C3hC47JatY)

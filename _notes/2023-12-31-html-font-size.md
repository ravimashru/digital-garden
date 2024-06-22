---
title: HTML font size
publish: true
created: '2023-12-31'
tags:
  - html
  - css
fileName: HTML font size
updated: '2023-12-31'
---

## Root element

The root element of an HTML document is the `html` element.  The font size of this element is set by the browser's default font size setting. 

The browser's font size settings is also used as the font size of the `medium` absolute font size.

Font size, like other text properties are inherited from parent elements. 

## Units

- **em**: `N em` = N times the font size. 
- **rem**: `N rem` = N times font size of root element. 

## Test yourself

What will the font size of the elements be with this CSS snippet:

```css
html, body { font-size: 2em; }
```

Answer:
- html will have font size of 32px (2 times default font size of browser - 16px). 
- body will have font size of 64px (2 times parent font size).

## References
- [W3 specification for font-size](https://www.w3.org/TR/CSS21/fonts.html#font-size-props)


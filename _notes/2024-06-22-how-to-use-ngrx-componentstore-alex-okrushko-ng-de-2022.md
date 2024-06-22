---
publish: true
created: '2024-06-22'
title: How to use NgRx ComponentStore? - Alex Okrushko NG-DE 2022
tags:
  - type/video
fileName: How to use NgRx ComponentStore? - Alex Okrushko NG-DE 2022
updated: '2024-06-22'
---
URL: https://www.youtube.com/watch?v=xPmtsD5LRqQ
Type: <a href="/tags/#type/video" class="tag">#type/video</a> 

---

Four types of stores:
- Singleton state
	- Component store injected in root.
	- Kind of like global state.
	- Keep store laser-focused on small parts, otherwise it gets too big really fast and difficult to maintain.
- Common component state
	- Used by presentational component (communicates only through input and output).
	- Provided within the component to keep track of internal state.
- Local component state
	- Contains business logic so that it is not there in the component.
	- Component = function over data that produces template; should not contain business logic.
	- Will have other services injected in it.
- Component branch state
	- Provided in a particular component.
	- Used for all childc omponents in the tree.

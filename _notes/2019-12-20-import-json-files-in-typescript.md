---
title: Import JSON files in Typescript
publish: true
created: '2019-12-20'
tags:
  - devlog
  - typescript
fileName: Import JSON files in Typescript
updated: '2019-12-20'
---

Add the following to the `tsconfig.json` file:

```json
{
	"compilerOptions": {
		"resolveJsonModule": true,
		"esModuleInterop": true
	}
}
```

Then import like this:

```typescript
import ongoingCourses from './data/ongoing.json';
```

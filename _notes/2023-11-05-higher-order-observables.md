---
publish: true
title: Higher-order observables
created: '2023-11-05'
fileName: Higher-order observables
updated: '2023-11-05'
---
Higher-order Observables = observables of observables.

Operators to handle higher-order observables:
- mergeMap (previously flatMap)
	- Creates new observable immediately.
	- Outer and inner observable emissions not guaranteed to be in same order.
- concatMap
	- Waits for previous observable to complete and then creates new one.
	- Outer and inner observable emissions will be in same order.
- switchMap
	- Unsubscribes from previous inner observable when new inner observable emission is received.
- exhaustMap
	- Ignores any new inner observable emissions while the ongoing one is not complete.

## Sources

- [Higher-order Observables - RxJS Guide](https://rxjs.dev/guide/higher-order-observables)

Related: [[Angular]]

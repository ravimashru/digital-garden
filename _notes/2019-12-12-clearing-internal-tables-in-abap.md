---
title: Clearing Internal Tables in ABAP
publish: true
created: '2019-12-12'
tags:
  - abap
  - devlog
fileName: Clearing Internal Tables
updated: '2019-12-12'
---

> Remember: for internal tables with header line, `itab` referes to the work area and `itab[]` refers to the internal table.



|                           | Table with Header Line                                                                                                       | Table without Header Line                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `REFRESH itab` (obsolete) | Table body is initialized, and not header (equivalent to `CLEAR itab[]`)                                                     | Delete all rows of internal table and free space, except for initial memory requirement. |
| `CLEAR itab`              | Only header line is deleted. `CLEAR itab[]` to delete all rows.                                                              | Delete all rows of internal table and free space, except for initial memory requirement. |
| `FREE itab`               | Delete all rows of internal table and free entire memory space occupied by rows. Affects table body and not the header line. | Delete all rows of internal table and free entire memory space occupied by rows.         | 


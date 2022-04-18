---
title: Removing Docker Containers
publish: true
created: '2021-10-04'
tags:
  - docker
  - devlog
fileName: Removing Docker Containers
updated: '2021-10-04'
---

Remove all containers with a specific status (e.g. `exited`):

```shell
$ docker rm $(docker ps -f status=exited -q)
```

Remove all containers:

```shell
docker rm $(docker ps -q)
```

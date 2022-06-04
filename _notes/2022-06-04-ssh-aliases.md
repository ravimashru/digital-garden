---
title: SSH Aliases
publish: true
created: '2022-06-04'
tags:
  - devlog
fileName: SSH Aliases
updated: '2022-06-04'
---

## Step 1: set up SSH keys

SSH aliases don't allow you to use a password. It might be possible to use a utility like **sshpass** though.

1. Generate an SSH key pair using `ssh-keygen`.
2. Copy the public key to the `~/.ssh/authorized_keys` file on the server.

Test if the key words by logging in using the key: `ssh -i ~/.ssh/private_key user@host`


## Step 2: create an SSH alias

Add an alias to the ~/.ssh/config file in the following format:

```
Host alias
    User username
    HostName remote-ip-or-hostname
    Port 23
    IdentityFile ~/.ssh/private_key
```

It should be possible to log into the remote server using the alias: `ssh alias`.

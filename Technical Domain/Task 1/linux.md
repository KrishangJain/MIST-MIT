# Linux Luminarium

## Module 5: File Globbing

### Multiple globs

Solution: navigated to /challenge/files. ran /challenge/run with argument *p* to cover every word containing p. 

Terminal: 
```bash
hacker@globbing~multiple-globs:~$ cd /challenge/files
hacker@globbing~multiple-globs:/challenge/files$ /challenge/run
Error: you did not use a wildcard glob...
hacker@globbing~multiple-globs:/challenge/files$ /challenge/run *p*
You got it! Here is your flag!
pwn.college{0oI6W3G4TXpGYLY2aIDTCdR9TL6.0lM3kjNxwiM1IzNxEzW}
```
Flag: 
pwn.college{0oI6W3G4TXpGYLY2aIDTCdR9TL6.0lM3kjNxwiM1IzNxEzW}

## Module 6: Practicing Piping

### Split-piping stderr and stdout

Solution: redirected output of /challenge/hack, sent output to /challenge/planet and errors to /challenge/the as inputs using process substitution

Terminal: 
```bash
hacker@piping~split-piping-stderr-and-stdout:~$ /challenge/hack > >(/challenge/planet) 2> >(/challenge/the)
Congratulations, you have learned a redirection technique that even experts
struggle with! Here is your flag:
pwn.college{E62mLYPf2NWTl334wnOT_kXw3jZ.QXxQDM2wiM1IzNxEzW}
```
Flag: 
pwn.college{E62mLYPf2NWTl334wnOT_kXw3jZ.QXxQDM2wiM1IzNxEzW}

### Snooping on Configurations

Solution: found that zardus stored api in a world readable file. retrieved the key from /home/zardus/.bashrc and used it with flag_getter as hacker to get the flag

Terminal: 
```bash
hacker@shenanigans~snooping-on-configurations:~$ ls -la /home
total 12
drwxr-xr-x 1 root   root   4096 Oct  1 09:41 .
drwxr-xr-x 1 root   root   4096 Oct  1 09:41 ..
drwxr-xr-x 1 hacker hacker  216 Oct  1 09:42 hacker
drwxr-xr-x 2 zardus zardus 4096 Oct  1 09:41 zardus
hacker@shenanigans~snooping-on-configurations:~$ grep -H '^FLAG_GETTER_API_KEY=' /home/*/.bashrc 2>/dev/null
/home/hacker/.bashrc:FLAG_GETTER_API_KEY=sk-XXXYYYZZZ
/home/zardus/.bashrc:FLAG_GETTER_API_KEY=sk-711519263
hacker@shenanigans~snooping-on-configurations:~$ flag_getter --key 'sk-711519263'
Correct API key! Do you want me to print the flag (y/n)?
y 
pwn.college{kFUcx4wwJLnzEIv45n9O-87W1-h.0lM0EzNxwiM1IzNxEzW}
```
Flag: 
pwn.college{kFUcx4wwJLnzEIv45n9O-87W1-h.0lM0EzNxwiM1IzNxEzW}
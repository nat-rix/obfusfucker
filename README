# Obfusfucker

A small **Javascript to JsFuck transpiler** written in **Python**.

## Motivation

This microproject does **not** aim performance!
I know how to possibly make the transpiler faster.
But I simply am too lazy to do so, but contributions
are of course very welcome.

## Requirements

**Python ≥3.6** is required because of *f-strings*!

## Usage

### Tool

After cloning the repository you can simply use the script
by running it with python:
```bash
natrix@host:~/obfusfucker$ python3 obfusfucker
Usage: obfusfucker [FILE]
Translate JavaScript into JsFuck.
natrix@host:~/obfusfucker$ 
```
or by simply executing it:
```bash
natrix@host:~/obfusfucker$ ./obfusfucker
[…]
```
If you want to **install** it for unix systems:
```bash
natrix@host:~/obfusfucker$ su
Password: ********
root@host:~/obfusfucker$ cp obfusfucker /usr/bin/
root@host:~/obfusfucker$ chmod +x /usr/bin/obfusfucker
root@host:~/obfusfucker$ exit
natrix@host:~/obfusfucker$ 
```
now you can simply execute it with `obfusfucker` everywhere:
```bash
natrix@host:~$ obfusfucker
[…]
```

### Example

To compile the example script `calculate_pi.js`
```javascript
n=10000000;for(pi=2,i=1;x=4*i*i,i++<n;pi*=x/--x);alert(pi)
```
simply execute following command:
```bash
natrix@host:~$ obfusfucker examples/calculate_pi.js
[][([]+![])[+[]]+([]+![])[+!![]+!![]]+([]+![])[+!![]]+([]+!![])[+[]]][([]+[][([]+![])[
[…]
```
if you want to save the output to a file `out.fucked.js` you can use `sh` pipes:
```bash
natrix@host:~$ obfusfucker examples/calculate_pi.js > out.fucked.js
```

# Obfusfucker

A small **Javascript to JsFuck transpiler** written in **Python**.

In other words a program that translates **every** javascript code
into JsFuck.

#### What the f\*\*\* is **JsFuck**?!
have a look at [en.wikipedia.org/wiki/JSFuck](https://en.wikipedia.org/wiki/JSFuck)!
It is Javascript but with only the characters:
`[`, `]`, `(`, `)`, `!`, and `+`

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

### How it works

The code that is read from the file is created as a string and then
converted to a function and executed.
So simply said the code `alert` gets `new Function('alert("x")')()`.
To generate the file code as a string is not as easy as it sounds.
Characters like 't', 'N' or 'a' are no problem to generate, but 'F' or 'C'
are a real problem.

#### How to generate characters

##### `true` and `false`
The negation of an array is always `false` and the nagation of that is `true`.
So we can generate the constants `true` and `false` now by `![]` and `!![]`.
To convert any value to a string concat an empty array on it with `+[]`.
So now we can generate the **strings** `"true"` and `"false"`.
To generate numbers we can do the following:
`0` is just `+[]`,
`1` is `+!![]` and
`2` is `1+1` is `+!![]`
[…]
So we can index a string and access all characters in 'true' and 'false'.
These include `t`, 'r', 'u', 'e', 'f', 'a', 'l', 's'.

##### `undefined`
Try to take the []-th element of an array. Yeah right, that's not possiple,
because that makes no sense. So by `[][[]]` we get the value `undefined`.
Now we can also generate the characters `n`, `d`, `i`.

##### `NaN`
`+[false]` is `Nan` don't ask me why. It really makes no sense to convert
an array to an integer, so we never should have expected anything better.
Now we can generate `N`.

##### `Infinity`
This is a more tricky one. We concat the string `"1e1000"` and convert it to
a number. 1e1000 is to big to be stored into a javascript number, so it
simply becomes `Infinity`.
Now we can generate `I`, `y`

#### But what is with all the other characters like `F`?
They are more complicated. We generate them by calling `String.fromCharCode`,
but that is not that easy, because we don't know, how to generate a `C`.

#### Generating globals
To get a global value like the function `String` or `Function` we can crate
a function that returns that value, like for example:
`new Function("return String")()` returns the value `String`.

##### How to generate a function by a string
By calling a function's constructor. `Function` is the same as
`(function(){}).constructor` which also is the same as
`(function(){})['constructor']`. We can of course replace that function by
any other function that is easy to generate. A function with that
property is `Array.prototype.flat` or shorter `[].flat`. But for us it is
`[]['flat']`.
So we can get the function `Function` by `[]['flat']['constructor']`.
If we want to get the value `x` we can now call
`[]['flat']['constructor']('return x')()`.

#### But still we cannot generate `C`
Javascript has this beatiful legacy function `String.prototype.italics`.
It wraps a given string into `<i>`, `</i>`. We can abuse the `<i>` by
getting the ascii hex code of `<`. It is '3C'. You see? `3`**`C`**!!
With another very beatiful legacy function `escape` you can get ready to
rumble! `escape('<')` is `'%3C'` so with `escape(''.italics())[2]` we
can get the character `C`!

#### Now we can generate any character!
With `''['constructor']['fromCharCode'](x)` we now can generate any
character! (and with the better function `fromCodePoint`).

#### Finally we can do anything
Yes! We can pass any string into the function constructor and can execute
any javascript code!

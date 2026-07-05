---
title: "Getting the start of a string with Go or Python"
layout: post
image: "/images/covers/pro_tip.webp"
date: '2018-05-16 05:00:00'
last_modified_at: 2026-07-04
type: post
tags:
- english
- go
- gophers
- golang
- strings
- string
- python
- pro tip
comments: true
lang: en
description: Check whether a string starts with a prefix in Go and Python without regular expressions
translations:
- lang: pt
  url: /strings-go-py
author_note: false
related: true
posts_list:
- getting-the-last-element-of-a-list-in-python
- python-and-its-versions-pyenv-part-2
- requirements-txt-en
---

Today's tip shows how to grab the beginning of a string in both Go and Python without using regular expressions 🎉

Let's say you have the following string: `"Gopher"` and you want to know if it starts with `"Go"` and also if it starts with `"C"`. In Go:

~~~ go
package main

import (
    "fmt"
    "strings"
)

func main() {
    fmt.Println(strings.HasPrefix("Gopher", "Go"))
    fmt.Println(strings.HasPrefix("Gopher", "C"))
}
~~~

and in Python:

~~~ python
print('Gopher'.startswith('Go'))
print('Gopher'.startswith('C'))
~~~

Both examples will print "true" for the first and "false" for the second in both languages.

Funnily enough, if you want to know whether your string starts with `""` (empty string), both languages will return "true" too.

In Go:

~~~ go
package main

import (
    "fmt"
    "strings"
)

func main() {
    fmt.Println(strings.HasPrefix("Gopher", ""))
}
~~~

In Python:

~~~ python
print('Gopher'.startswith(''))
~~~

Important to know this so you can either avoid edge cases or step into them on purpose.

Cool right? Off to learn other languages 😜

---

## Links

- [Python str.startswith](https://docs.python.org/3/library/stdtypes.html#str.startswith)
- [Go strings.HasPrefix](https://golang.org/pkg/strings/#HasPrefix)
- [Implementation of strings.HasPrefix](https://github.com/golang/go/blob/4102e6ff56eee8fd6a1689f4bcf9d5a92cc44a6c/src/strings/strings.go#L450)
- [If you want to see Cesar explaining all of this in a video, check out this post from the Go study group](https://gopher.pro.br/post/hangout-hasprefix/)

## Acknowledgments

Thanks especially to Cesar who has patiently been teaching me Go.
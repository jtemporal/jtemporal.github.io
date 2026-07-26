---
title: "Using Go to format Go code"
layout: post
date: '2018-03-19 05:00:00'
last_modified_at: 2026-07-26
image: "/images/covers/pro_tip.webp"
type: post
tags:
- pro tip
- go
- gophers
- golang
- formatting
- english
lang: en
comments: true
description: Learn how gofmt helps you format Go code without the pain.
translations:
- lang: pt
  url: /formatando-codigo-go
---

Code formatters are a beautiful thing to see, especially when you're feeling lazy about formatting things or when you're worried about learning a new language's syntax and haven't gotten the hang of the code style yet.

Today's tip shows how the [Go programming language](https://golang.org/) helps you format code without suffering.

To start, we need to understand that well-formatted code has been part of Go's culture since it was created. For the more experienced, this is just a very common best practice. But how does this work in practice? Alright, let's say you wrote the following code in a file called `helloworld.go`:

```go
package main
import "fmt"
func main(){
fmt.Println("Hello world!")
}
```

So far so good, this code compiles and if you do `go run helloworld.go` it still prints your `Hello World!` to the screen. However, if you had to send this code to an open source project, people reviewing your code would probably ask you to format it better.

There are a bunch of language-native tools to help the developer, one of them being `gofmt`. It can show the suggested formatting for a source code on the screen or even format the code you write for you. To use `gofmt` just pass the filename to it:

```console
gofmt helloworld.go
```

That will print the formatted version of your source code to the screen. There are some flags you can use to change that result. For example, the `-d` flag will show a diff of your file in a format identical to `git diff`, great for sending patches.

But the most interesting flag/option is `-w` which converts the screen output to writing in the file. In that case, if you use that flag like so:

```console
gofmt -w helloworld.go
```

Nothing will be printed to the screen and the formatted code will be written to your source file. So that code I showed at the beginning, after running with the `-w` flag, looks like this:

```go
package main

import "fmt"

func main() {
        fmt.Println("Hello World!")
}
```

Cool right? Now you have no more excuse not to format your pretty little code 😜

---

## Links

- Part of the [Essential Go book that talks about `go fmt`](https://www.programming-books.io/essential/go/323-go-fmt)
- Documentation about [Go code formatting on Effective Go](https://golang.org/doc/effective_go.html#formatting)

## Acknowledgments

Thanks especially to Cesar who has patiently been teaching me Go.

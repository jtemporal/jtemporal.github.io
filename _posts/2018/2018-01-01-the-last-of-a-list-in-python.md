---
author_note: true
author_note_text: This blog post was adapted for English by Debora Azevedo.
author_note_link: https://deboraazevedo.github.io/?utm_source=blogdajess
comments: true
date: 2023-09-11 09:10:00+00:00
description: How to get the last item of a list with Python
image: /images/covers/pro_tip.webp
lang: en
layout: post
tags:
- python
- english
- en
title: The last of the list with Python
translations:
- lang: pt
  url: /ultimo-da-lista
author_note: true
type: post
---


[Python](https://www.python.org/) is known for making it easy to write beautiful, small code. Today's pro tip is about how to get the last element of a list using this language \o/

You can watch below or continue reading:

<center>
<iframe width="315px" height="560"
src="https://www.youtube.com/embed/VyJzt_HmTlk"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</center>

Coming from other languages like Java or C to Python, it's normal to bring a bit of an accent to your codes and want to do something more or less like this to get the last element of a list:

```python
my_list = [1, 2, 3, 4, 5]
item_index = len(my_list) - 1
print(item_index)
# 4
last_one = my_list[item_index]
print(last_one)
# 5
```

Use the `len()` size function to get the length of the list and subtract `1` to get the index of the last element in that list. And that's ok! It works. However, Python presents a more elegant way of doing this, see:

```python
last_one = my_list[-1]
print(last_one)
# 5
```

![magic gif](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

Even though it may seem like this, it's not magic! From the [Python documentation](https://docs.python.org/3/library/stdtypes.html#common-sequence-operations):

> If i or j is negative, the index is relative to the end of sequence _s_: `len(s) + i` or `len(s) + j` is substituted. But note that `-0` is still `0`.

In a simpler way, [Raymond Hettinger](https://twitter.com/raymondh) explains in this tweet with code:

<center>
<blockquote class="twitter-tweet" data-lang="pt"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/python?src=hash&amp;ref_src=twsrc%5Etfw">#python</a> tip:  How to support negative indexing:<br><br>def __getitem__(self, i):<br>    if i &lt; 0:<br>        i += len(self)<br>    if i &lt; 0 or i &gt;= len(self):<br>        raise IndexError<br>    ...</p>&mdash; Raymond Hettinger (@raymondh) <a href="https://twitter.com/raymondh/status/943615980650971136?ref_src=twsrc%5Etfw">20 de dezembro de 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

The implementation is actually more complex than this, but what happens in general terms: the `__getitem__` method is invoked when we call `my_list[-1]` receiving the list itself (`self`) and the negative index (`i`) then adds this index with the size of the list and returns the updated index value. Interestingly, this was the same thing I did on the first example but it is already implemented by default.

And a little detail, the same can be done for strings!

```python
word = 'yes'
print(word[-1])
# s
```

Dope, right? Now just use negative index in your codes too 😉

---

## Links

- For more details on string slicing, check out this [informal Introduction to Python](https://docs.python.org/3.6/tutorial/introduction.html)
- Reference to the special case of negative indexes in the  [`__getitem__` method in the Python documentation](https://docs.python.org/3/reference/datamodel.html#object.__getitem__)

## Special thanks

To Mário Sérgio, Diego Ponciano and Paulo Haddad for some of the links in this post!
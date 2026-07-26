---
layout: post
title: Understanding the difference between json.loads and json.load
date: 2019-03-15 03:00:00 +0000
last_modified_at: 2026-07-26
image: "/images/covers/variados.webp"
comments: true
type: post
lang: en
tags:
- serialization
- python
- bigquery
- sql
- json
- api
- python3
- load
- english
description: Learn how to tell json.loads and json.load apart in Python
translations:
- lang: pt
  url: /diferenciando-json-loads-de-json-load-e-uma-pitade-de-bigquery
---

If you never really understood the difference between `json.loads()` and `json.load()`, it's time to get it! In today's tip we're going to learn how to tell these methods apart.

## JSON

If you made it here, you probably already know what JSON is. But in case you don't, let's recap: [JSON (*JavaScript Object Notation*)](http://json.org/) is a lightweight data-interchange format. It's easy to read and write, which makes it usable by humans, and it's also easy for machines to create and parse.

If you've ever used APIs you've probably exchanged data with them using this format. Most modern programming languages offer some kind of JSON support. In Python's case, there's a structure that's almost the same thing as a JSON object: the dictionary.

## The JSON module in Python

Beyond a data structure, Python also ships out of the box with [a module for JSON manipulation](https://docs.python.org/3.5/library/json.html). To use this module just do the following:

```python
import json
```

Among the many methods, there are two that are the focus of today's tip: `.loads()` and `.load()`. Despite being very similar in result, they're different in how they work.

## Data

But before we start, let's grab some data. The other day I was taking a look at [BigQuery](https://cloud.google.com/bigquery/), which, among many cool things the tool lets you do, also gives access to a ton of public data. Among them GitHub data. A lot of that data is available via GitHub's own API, but if you want to learn to poke around in BigQuery, they've already made the data available for us inside it:

![image showing the github dataset on bq](/images/bq-github.webp)

Cute right? You can see from the image above that the `github_repos` dataset contains 9 tables. Among them a table called `languages`:

![image showing the github languages table on bq](/images/bq-github-languages.webp)

This table, while big, has few columns. Just 4, to be more exact:

![image showing the schema of the github languages table on bq](/images/bq-github-languages-schema.webp)

With BigQuery you can export data to your Google Drive account. And that's what I did. First I selected 100 rows from the table using the SQL query below:

```sql
SELECT * FROM `bigquery-public-data.github_repos.languages` LIMIT 100
```

And after the *query* ran I clicked the little BigQuery screen to export the results. When you export this data BigQuery creates a folder in your Drive:

![image showing the exported data](/images/2019-03-15 19.16.34.webp)

And inside that folder a file with the same name with a `.json` extension. I downloaded that file and renamed it to `bq-github-languages.json` just so it'd have a name more indicative of the data it contains.

If you open this file you'll notice something that might be curious: instead of having a single JSON, the file actually has several separate JSONs, one JSON for each row of the table. And this brings us to our first method.

## .load()

`json.load()` takes something that is *"readable"*, that is, any Python structure that has the built-in `.read()` method. We can find this behaviour for example in files.

So, if our file had one big JSON containing all our observations, we could use this method like so:

```python
with open('bq-github-languages.json') as file_data:
    data = json.load(file_data)
```

If you try to do this to load the data from our file, you'll come face to face with an error:

```
JSONDecodeError: Extra data: line 2 column 1
```

Which makes total sense since we don't have just one JSON in our file, we have a collection of them, right? This forces us to read each line of the file like this:

```python
with open('bq-github-languages.json') as file_data:
    data = file_data.readlines()
```

And that's fine, but this action brings the following result: instead of having a list with several dictionaries, you end up with a list of *strings*. And if the idea was to manipulate this data, *strings* aren't the best data structure for it. Which brings us to the next method.

## .loads()

I used to mix up how these two methods work all the time. Until, recently, something clicked. When you have *strings*, you should use `.loads()`. You can use the hint that comes from the name itself: `s` for *string*.

![gif](https://media.giphy.com/media/IWOTlIqnWzTFe/giphy.gif)

Then after reading the file line by line with `.readlines()` you can go through your list of *strings* item by item and turn it into a dictionary:

```python
for i, item in enumerate(data):
    data[i] = json.loads(item)
```

or even use *list comprehensions* for it:

```python
data = [json.loads(d) for d in data]
```

And then we can see the result of that. `data[0]` will give something like this:

```python
{'repo_name': 'gopz4u/ready',
 'language': [{'name': 'C#', 'bytes': '27779'},
  {'name': 'C++', 'bytes': '28415'},
  {'name': 'CSS', 'bytes': '6475'},
  {'name': 'HTML', 'bytes': '34293'},
  {'name': 'Java', 'bytes': '117831'},
  {'name': 'JavaScript', 'bytes': '205287'},
  {'name': 'Objective-C', 'bytes': '118096'}]}
```

Cool right? Well, that's all for today!

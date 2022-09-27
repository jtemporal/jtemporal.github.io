---
layout: post
title: How to create a new collection in MongoDB by joining two collections
date: 2022-09-27T05:00:00.000-03:00
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
tags:
- tutorial
- English
- mongodb
- atlas
- mongodb atlas
- collections
- aggregations
comments: true
description: Learn how to join two collections in MongoDB using aggregation
lang: en
translator: false
related: false

---

If you use MongoDB you probably understand all there’s to know about it, so I truly recomend you skip this blog post here, but if you are just starting with MongoDB see this blog post as a gentle introduction 😉.

## Before starting

This blog post assumes you already have an account set up with MongoDB. Keep in mind that if you don’t have one yet, [you can create one for free here](https://www.mongodb.com/cloud/atlas/register) and MongoDB has free tier you can set up while creating your account.

You’ll be using the sample data from MongoDB to learn you how to do an aggregation and then create a new collection. 

## Getting acquainted with the data

In Mongo, datasets are called *collections*, think of it as a special spreadsheet with all the information you need. Whereas the records in a spreadsheet are lines, in MongoDB, a record is called a *document*. You’ll use the collection `sample_mflix` that contains movies, comments, users and so on.

![Sample data information from MongoDB](https://res.cloudinary.com/jesstemporal/image/upload/v1664032162/mongodb/sample-data-mongodb-mflix_em8syi.jpg)

## Make a basic filter

Your objective is to create a collection contains all comments each movie received on August 2002.

Start by going into the project’s database. My project is called “Project 0” and it has the “Example” database that comprises of 3 databases and 15 collections.

![project details in the mongo database](https://res.cloudinary.com/jesstemporal/image/upload/v1664226998/mongodb/02-my-project-details-in-mongodb_cpd7a5.jpg)

Each project has a set of tabs, one of them is the “Collections” tab where you can actually see the databases, and the documents in each collection as shown in the image above. From within the Collections tab, you can see the data and make simple queries if you want.

```
{date: {$gte:ISODate('2002-08-18')}}
```

For example, the query above, shows every document with a date value later than 18 of August of 2002.

![simple filter result](https://res.cloudinary.com/jesstemporal/image/upload/v1664227018/mongodb/03-simple-filter-query-mongodb_udymc0.jpg)

This is great to see the preliminary results of the collection that you are trying to build. But to actually build the collection we need to use aggregations.

## Constructing the aggregation

Aggregations are the way you can build collections inside MongoDB and there’s a tab for that like shown in the image below.

![Aggregation tab on the collection](https://res.cloudinary.com/jesstemporal/image/upload/v1664227026/mongodb/04-aggregation-tab-for-mflix-comments_qvghve.png)

To see the Aggregation tab you need to click on the collection you want to investigate or use as basis for your new collection. On the aggregation tab, you’ll see the pipeline builder. A pipeline is a set of steps, each step is called a stage; each stage does one thing and one thing only. You will do three stages:

1. Filter comments based on date;
1. Add the movies details into each comment;
1. Output the results into a brand new collection.

### Filter comments

To avoid dealing with unnecessary data, that is, data outside of your interest date window, the fist thing you’ll want to do is find the comments in that particular time period (August of 2002).

On the drop-down menu for the first stage select the `$match` operator, this operator will allow you to filter the records based on the date. Note that once you select the operator, Mongo will auto-populate the editable field with the standard structure for that operator.

![First stage: $match operator selection](https://res.cloudinary.com/jesstemporal/image/upload/v1664230618/mongodb/05-match-operator-pre-filled-on-aggregation-stage_ddkexu.png)
 
Now you need to add the following code in the query section there:

<script src="https://gist.github.com/jtemporal/056a2fad3d8c3c2339f2f0f0fe26f80d.js"></script>

Once that is done you’ll see that the sample result will start displaying.

![first stage $match operator sample results](https://res.cloudinary.com/jesstemporal/image/upload/v1664230861/mongodb/06-preliminary-results-match-operator_ltitcl.png)

Now let’s break down each step of that operation, shall we?

1. *Lines 1-4*: Just comments, mainly to explain what the operator is, note that MQL stands for MongoDB Query Language;
1. *Lines 6* (`date:`): corresponds to the field you want to use to filter your date;
1. *Line 7* (`$gte:ISODate("2002-08-01")`): this line uses the `$gte` operator to grab all dates after the date returned in ISODate format; 
1. *Line 8* (`$lt:ISODate("2002-08-31")`): this line uses the `$lt` operator to grab all dates before the date returned in ISODate format.

This operator result will be *all the documents in between first of August 2002 and 31st of August 2002*.

### Adding movie information to each comment

You’ll notice that the comments don’t have the movie information, but the movie identification number (ID) is present like shown in the image below.

![One comment document without the movie information](https://res.cloudinary.com/jesstemporal/image/upload/v1664230868/mongodb/07-one-comment-record-from-mongodb_qv98s8.jpg)

Including the movie information into the filtered comments we just got from the first stage is the second step of our aggregation. Click the “Add stage” button below the first stage to start working on adding the movie information on the collection using the `$lookup` operator.

The `$lookup` operator does a “left outer join”, think of it as a “filtered join”. Based on the collection on the “left” (comments), select the documents on the “right” (movies) that match a given field in both, in this case the movie id. This way we don’t have to care about removing movies without comments, but all comments from the time window.

![pre-filled lookup stage](https://res.cloudinary.com/jesstemporal/image/upload/v1664230905/mongodb/08-lookup-stage-added-pre-filled_q6kdg1.png)

On the drop-down menu for the second stage select the `$lookup` operator like shown in the image above. Notice that once again Mongo will pre-fill the operator sample code and you can update the code section with the code below.

<script src="https://gist.github.com/jtemporal/43336d966c612007b68bb304d6ccb9e9.js"></script>

Once more, let’s break down each step of that operation:

1. *Lines 1-9*: Just comments, mainly to explain what the operator is;
1. *Line 11* (`from: "movies",`): Since the left side in dashboard is the collection from which you are running the pipeline, this is where you define the “right” side of the join, so you chose the “movies” collection to add the movie information into the comments;
1. *Line 12* (`localField: "movie_id",`): the field on the current collection (comments) that correspond to a field in the other (movies) collection;
1. *Line 13* (`foreignField: "_id",`): the field on the other collection;
1. *Line 14* (`as: "movie_info"`): the name of the field to add information in, note that the lookup will add the information as an array.

And you should see the results show up like in the image below.

![New stage with the $lookup operator premliminary results](https://res.cloudinary.com/jesstemporal/image/upload/v1664233089/mongodb/09-preliminary-results-lookup-operator_evgamh.png)

All the data manipulation is done. Time to save the results and actually create your new collection.

### Save the results

Once again click the “Add stage” button to create a stage that outputs the result into a new collection and on the drop-down menu for the third stage, select the `$out` operator.

![New stage with the $out operator pre-filled](https://res.cloudinary.com/jesstemporal/image/upload/v1664233091/mongodb/10-pre-filled-out-operator_fdm7eo.png)

Now update the code in the code field in the out section with the code below.

<script src="https://gist.github.com/jtemporal/84f28ec4d148c83c627b0c9642378e13.js"></script>

Once again let’s break down this part.

1. *Lines 1-4*: Just comments, mainly to explain what the operator is;
1. *Line 5* (`'augustmoviescomments'`): is the name for the new collection;

After filling out the name of the new collection you’ll should click the “Save documents” button.

![Out operator filled with the correct code](https://res.cloudinary.com/jesstemporal/image/upload/v1664233827/mongodb/11-out-operator-with-save-documents-button_zousvw.png)

Once the collection is created (might take a few seconds) you’ll see a message stating that documents were persisted to the collection and a “Go to collection” link that you should click.

![Documents persisted note](https://res.cloudinary.com/jesstemporal/image/upload/v1664233828/mongodb/12-out-operator-saved-documents_afzssm.png)

Clicking the “Go to collection” link will open a new tab, if you do not want to see another tab, just refresh the page and you’ll see the `augustmoviecomments` collection show up on the left-hand side menu.

![New collection details](https://res.cloudinary.com/jesstemporal/image/upload/v1664235178/mongodb/13-final-collection-result_xv262x.png)

Now that your collection is ready, you can see the collection analytics data like how many activities were logged and how much space that takes in our storage.

## Recap

Now you know how to create collections by aggregating two other collections using pipelines. You also know:

1. Datasets in MongoDB are called collections;
1. One collection is a set of documents;
1. To create collections by joining other collections you can use piplines;
1. Pipelines are a set of steps called stages;
1. Each stage does only one thing.

Now you can explore what else to use pipelines for.

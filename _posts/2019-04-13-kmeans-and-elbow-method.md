---
translator: false
comments: true
date: 2019-04-13 03:00:00+00:00
description: Learn to calculate the optimal cluster number using the elbow method
image: https://res.cloudinary.com/jesstemporal/image/upload/v1640360836/covers/tutorial_gfgm5n.png
lang: en
layout: post
tags:
- tutorial
- data science
- ciencia de dados
- kmeans
- cluster
- clusters
- clusterizacao
- clustering
- clusterization
- unsupervised learning
- unsupervised
- unsupervised clustering
- analysis
- nao supervisionado
- english
title: How to define the optimal number of clusters for KMeans
translations:
- lang: pt
  url: /kmeans-e-cotovelo
type: post
---

---

Leia [esse texto em Português](https://medium.com/pizzadedados/kmeans-e-metodo-do-cotovelo-94ded9fdf3a9) na Revista do Pizza.

---

One of the most famous methods to find clusters in data in an unsupervised way is using KMeans. But what do we do when we have absolutely no idea how many clusters the data is going to form? We can't just guess.

Discovering the number of clusters is a challenge especially when we are dealing with unsupervised machine learning and clustering algorithms. To solve the issue of "how many clusters should I choose" there's a method known as the Elbow Method.

The idea is pretty basic: define the optimal amount of clusters that can be found even though we don't know the answer in advance. Seems like magic, doesn't it? But I promise you it isn't.

---

The code that I'm going to use from now on [can be found in this GitHub repository](https://github.com/jtemporal/kmeans_e_cotovelo).

---

So to begin, we need data! We will use [the Iris dataset](https://en.wikipedia.org/wiki/Iris_flower_data_set). There's a genre of flowers called Iris, it is a group of around 300 flower species with different petal and sepal sizes. Biological curiosity aside, the dataset is used to demonstrate how machine learning  and clustering algorithms work a lot. I mean A LOT!

This dataset holds 150 samples of three Iris species ([_Iris setosa_](https://en.wikipedia.org/wiki/Iris_setosa "Iris setosa"), [_Iris virginica_](https://en.wikipedia.org/wiki/Iris_virginica "Iris virginica") and [_Iris versicolor_](https://en.wikipedia.org/wiki/Iris_versicolor "Iris versicolor")) that even though are very similar,  are distinguishable using a model developed by the biologist and statistician Ronald Fisher.

This dataset is so widely used that data science libraries usually have it built-in so it can be used in demonstrations and examples. Let's take a peek at the first lines of our dataset, to start we need to import it, I prefer the version that comes in [the seaborn library](https://seaborn.pydata.org/):

{% highlight python %}

    import seaborn as sns
    iris = sns.load_dataset('iris')

{% endhighlight %}

Glancing at the first 5 rows of our dataset you might ask me: _"But Jess, the answers were are seeking is right there in the_ `_species_` _column, weren't we going to do unsupervised clustering?"_

![table showing the first 5 rows of the dataset](https://cdn-images-1.medium.com/max/800/1*rLqNbyrHGZs7NpE6dBl3qg.png "dataset.head") <center><br><i>First 5 rows of the Iris dataset, the result of the `iris.head()` command</i></center>

Okay, yes! We have the answers in our dataset but for the purpose of this tutorial, we are going to forget that we already know the species of our samples and we are going to try to group them using KMeans.

## KMeans

If you aren't familiarized with KMeans yet, you must know that to use this method you'll need to inform an initial amount of clusters before you start. Thinking of the version implemented in scikit-learn in particular, if you don't inform an initial number of clusters by default it will try to find 8 distinct groups.

When we don't know how many clusters our samples are going to form we need a way to validate what is being encountered instead of just guessing.

## The elbow method

And that's where the Elbow method comes into action. The idea is to run KMeans for many different amounts of clusters and say which one of those amounts is the **optimal number of clusters**. What usually happens is that as we increase the quantities of clusters the differences between clusters gets smaller while the differences between samples inside clusters increase as well. So the goal is to find a balance point in which the samples in a group are the most homogeneous possible and the clusters are the most different from one another.

Since KMeans calculates the distances between samples and the center of the cluster from which sample belongs, the ideal is that this distance is the smallest possible. Mathematically speaking we are searching for a number of groups that the within clusters sum of squares (`wcss`) is closest to `0`, being zero the optimal result.

## Using scikit-learn

Scikit-learn's KMeans already calculates the `wcss` and its named `inertia`. There are two negative points to be considered when we talk about inertia:

1. Inertia is a metric that assumes that your clusters are convex and isotropic, which means that if your clusters have alongated or irregular shapes this is a bad metric;
2. Also, the inertia isn't normalized, so if you have space with many dimensions you'll probably face the "dimensionality curse" since the distances tend to [get inflated in multidimensional spaces](https://scikit-learn.org/stable/modules/clustering.html#k-means).

Now that you are aware of all that, let's look at our data: we have only 4 dimensions - length and width of petals and sepals, let's use the elbow with our data, shall we? I wrote a function that receives a dataset as input and calculates the KMeans for 19 different amounts of clusters ranging from 2 to 20 possible groups and finally returns a list with our `wcss`:

{% highlight python %}

    def calculate_wcss(data):
        wcss = []
        for n in range(2, 21):
            kmeans = KMeans(n_clusters=n)
            kmeans.fit(X=data)
            wcss.append(kmeans.inertia_)
    
        return wcss

{% endhighlight %}

When we use the function written above to calculate the within clusters sum-of-squares for our Iris dataset and plot the result, we find a plot like this:

![plot showing all data points from a0 to a18](https://cdn-images-1.medium.com/max/800/1*BeBON5cT5jXuTvXRJ8GhTw.png)

<center><i><small>on the x axis: the number of clusters used in the KMeans, and on the y axis: the within clusters sum-of-squares</small></i></center>

Each orange point is a cluster quantity, note that we start in two and go up to 20 clusters. And there where we might get the first doubt: _Which of these points is exactly the optimal cluster amount? Is it the point a2 or a3 or even the a4?_

## May math save us all

What if I told you that there's a mathematical formula to helps us out?

<center>
<img src="https://cdn-images-1.medium.com/max/800/1*1qNRC20LzjzP5C6MNsfiVQ.gif" />
</center>

It turns out that the point that indicates the balance between greater homogeneity within the cluster and the greater difference between clusters is the point in the curve that is most distant of a line drawn between points `a0` and `a18`. And guess what! There is a formula that calculates the distance between a point and a line! And it is this one below:

<center> <br><img src="https://cdn-images-1.medium.com/max/800/1*9J7Wnh5L0eIcHXBeWlzvNA.png"/> <small><br><i>Formula that calculates the distance between a point and a line that passes through P0 and P1</i></small> </center>

Don't be scared, in this case, _P0_ is our `a0` and _P1_ is our `a18`:

![plot showing the "elbow" with a0 and a18](https://cdn-images-1.medium.com/max/800/1*5VTBI6T5c7De-GtKTBaNNA.png)

<center><i><small>on the x axis: the number of clusters used in the KMeans, and on the y axis: the within clusters sum-of-squares, the green line is the base line to calculate the distance</small></i></center>

and the pair `(x,y)` represents the coordinates of any point that we might want to calculate the distance to the line. Let's look at our elbow plot one more time:

![plot showing the "elbow" with a0, a1 and a18](https://cdn-images-1.medium.com/max/800/1*5AILcLRFN7UzhLCKw6MaYQ.png)

<center><i><small>on the x axis: the number of clusters used in the KMeans, and on the y axis: the within clusters sum-of-squares, the green line is the base line to calculate the distance</small></i></center>

Suppose we want to calculate the distance between the point `a1` and the line that passes through `a0` and `a18`, here is the data we need:

<center><img src="https://latex.codecogs.com/png.latex?%5Cdpi%7B80%7D%20%5Chuge%20%5Cbegin%7Bcenter%7D%20%5Ctext%7Bpoints%20that%20define%20the%20line%7D%5C%5C%20a_0%20%3D%28x_0%2C%5C%20y_0%29%3D%282%2C%5C%20152.34%29%5C%5C%20a_%7B18%7D%20%3D%28x_1%2C%5C%20y_1%29%3D%2820%2C%5C%2014.73%29%5C%5C%20%5C%20%5C%5C%20%5Ctext%7Bour%20point%20of%20interest%7D%5C%5C%20a_1%20%3D%28x%2C%5C%20y%29%3D%283%2C%5C%2078.85%29%5C%5C%20%5Cend%7Bcenter%7D" /></center>

Substituting the values above into the distance formula we have the following:

![formula with values substituted](https://cdn-images-1.medium.com/max/1200/1*DYmZL126BCy2xJNPVtoTbg.png)

<center><br><img src="https://cdn-images-1.medium.com/max/800/1*MhxkB7f42ajRkgJfTa7TAw.png" style="max-width: 75%;"/></center>

## Math and Python, the power couple everyone loves

I imagine you agree with me when I say _"No one deserves to calculate all of this by hand"_. So let's use a method for that. In short, we are just going to transcribe the formula that calculates the distance between a point and a line to code, the result is something like this:

<script src="https://gist.github.com/jtemporal/e248bbd974c4cc24a482780fe45c6851.js"></script>

The method `optimal_number_of_clusters()` takes a list containing the within clusters sum-of-squares for each number of clusters that we calculated using the `calculate_wcss()` method, and as a result, it gives back the optimal number of clusters. Now that we know how to calculate the optimal number of clusters we can finally use KMeans:

{% highlight python %}

    import seaborn as sns
    
    from sklearn.cluster import KMeans
    
    
    # preparing our data
    iris = sns.load_dataset('iris')
    df = iris.drop('species', axis=1)
    
    # calculating the within clusters sum-of-squares for 19 cluster amounts
    sum_of_squares = calculate_wcss(df)
    
    # calculating the optimal number of clusters
    n = optimal_number_of_clusters(sum_of_squares)
    
    # running kmeans to our optimal number of clusters
    kmeans = KMeans(n_clusters=n)
    clusters = kmeans.fit_predict(df)

{% endhighlight %}

## Comparing before and after

After clustering the data we should take a look at the statistical description of each cluster:

![dataset first 5 lines after clustering](https://cdn-images-1.medium.com/max/1200/1*6b4p4aw1EMAp00xlEsFpfA.png)

<center><small><i>Statistical description grouped by cluster</i></small></center>

Not bad if compared to the statistical description of the original data that I show below, right?

![dataset first five lines from the orginal data](https://cdn-images-1.medium.com/max/1200/1*6LLgj9Jgz44Z7rZegS9V_w.png)

<center><small><i>Statistical description grouped by species</i></small></center>

## Conclusion

Obviously, no clustering will be 100% accurate especially when we have clusters that present very similar characteristics. I particularly like the visual version of a good clusterization. Let's put two petal features in the plot and color the points based on the cluster each sample was given and also based on the species they belong to:

![clustering plot](https://cdn-images-1.medium.com/max/800/1*Rnz35jPaqoARWQYZir_5iQ.png)

We can see in the plot those 12 observations that "migrated" in classification could easily be a part of any of the two clusters.

Is also worth mentioning that the elbow method isn't the only way to infer the optimal cluster amount. There's also a method that uses, for instance, the [_silhouette coefficient_](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.silhouette_score.html). But today, that's all folks.

xoxo and good clusterization.

---

## Extra reading

* The article [comparing the Ward method and the K-mean in grouping milk producers](http://www2.assis.unesp.br/ffrei/Artigos/Compara%C3%A7%C3%A3o%20entre%20o%20m%C3%A9todo%20Ward%20e%20o%20m%C3%A9todo%20K-m%C3%A9dias%20no%20agrupamento%20de%20produtores%20de%20leite.pdf) (in portuguese). In the third topic, there's a great explanation of clustering methods.
* One [article in Wikipedia that explains in great detail the method to calculate distances](https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line) from where I copied the formula that I should earlier.
* There are [slides from Professor André Backes class on clustering](http://www.facom.ufu.br/\~backes/pgc204/Aula09-Agrupamentos.pdf) (in Portuguese).
* The code that I used in this post [can be found in this GitHub repository](https://github.com/jtemporal/kmeans_e_cotovelo).

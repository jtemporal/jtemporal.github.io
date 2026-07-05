---
title: "Playing with PostgreSQL"
layout: post
date: '2018-04-08 01:00:00'
last_modified_at: 2026-07-04
image: "/images/covers/tutorial.webp"
type: post
tags:
- tutorial
- database
- tool
- docker
- docker-compose
- pgweb
- sql
- data
- english
lang: en
comments: true
description: Run PostgreSQL with Docker, apply migrations, and explore your database with pgweb
translations:
- lang: pt
  url: /brincando-com-postgresql
author_note: false
related: true
posts_list:
- docker-commands
- playing-with-dockers-container-listing
- python-virtual-environments-venv
---

## What you'll find in this post

- How to run a database using docker and docker-compose
- How to run migrations on that database
- How to interact with that database through a UI

## Heads up

All the code and structure I'll show here is [in this GitHub repo](https://github.com/jtemporal/tadpgweb/).

## Running PostgreSQL on Docker

To start, you can [install PostgreSQL](https://www.postgresql.org/download/) on your machine following the instructions on the official site, but here I'll show how to use Postgres inside a Docker container using Docker-Compose. To start (if you haven't already), install Docker and Docker-Compose on your machine. After that, we'll need a file called `docker-compose.yml` containing the following lines:

~~~ yml
version: "3"
services:
  tad:
    image: postgres:9.6
    container_name: "postgres"
    environment:
      - POSTGRES_DB=tadpgweb
      - POSTGRES_USER=postgres
      - TZ=GMT
    volumes:
      - "./data/postgres:/var/lib/postgresql/data"
    ports:
      - 5432:5432
~~~

Let's take a look at the configuration this file brings:

1. **Data directory**: when this container runs, there will be a `data/` directory in your folder that will be mapped inside the container and will hold all of PostgreSQL's data;
1. **The service name**: here called `tad`;
1. **The open port**: so we can access the database, we need to map a container port to our `host` machine. By default we're going to pick the same port that PostgreSQL would use if it weren't running inside the container;
1. **The database name**: here I called the database `tadpgweb`;
1. **Database user**: in the file we define the database user as just `postgres`.

And now to get our database "up", the following command in a terminal will do:

~~~ console
docker-compose up tad
~~~

The first time we run this command, a few things will happen starting with the download of the PostgreSQL image version 9.6, the creation of the `data/` directory to hold postgres data, and after that, the creation of a database with the settings in `docker-compose.yml`.

## Migrations: they slice, they dice

Creating and deleting tables and columns, among other changes, can be done through migrations. Migrations are nothing more than files that execute commands on the database. These commands can be changes to the database structures like creating and deleting tables and columns, or commands to populate data, known as *data migrations*.

Here I wrote 4 migrations we're going to run and I'll explain them one by one, so brace yourselves for a short and intensive SQL basics course ;P

The first migration, called `001_create_table_up.sql`, will create a `clientes` (customers) table with 3 columns: the `id` column which is a sequence starting at one, the `nome` (name) column that can be up to 250 characters long, and finally the `idade` (age) column that accepts numbers. Beyond that, this migration also defines that the `id` and `nome` columns cannot be null and that the `id` column is the primary key of the `clientes` table:

~~~ sql
CREATE TABLE clientes (id serial NOT NULL, nome VARCHAR(250) NOT NULL, idade INTEGER, PRIMARY KEY (id));
~~~

Now let's assume the table we created doesn't need an age column, so we create the migration `002_alter_table_up.sql` to get rid of it:

~~~ sql
ALTER TABLE clientes DROP COLUMN idade;
~~~

Besides not needing that column, we're going to want another column called `endereco` (address) also with a max length of 250 characters, and that's what we did in the migration `003_alter_table_up.sql`:

~~~ sql
ALTER TABLE clientes ADD COLUMN endereco VARCHAR(250) NOT NULL;
~~~

And now that we have a structure ready to store data let's do some inserts on this beautiful table with the migration `004_data_migration_up.sql`. This migration inserts three records into the `clientes` table:

~~~ sql
INSERT INTO clientes (nome, endereco) VALUES ('Umbrella Corporation', '545 S Birdneck RD STE 202B Virginia Beach, VA 23451');
INSERT INTO clientes (nome, endereco) VALUES ('OCP Omni Consumer Products', 'Delta City (formerly Detroit)');
INSERT INTO clientes (nome, endereco) VALUES ('Weyland-Yutani Corporation', 'Weyland-Yutani Corporation HQ, Tokyo');
~~~

Notice that all the migration names end in `up`. That's because each of the migrations you saw here has a sister migration that *undoes* what that migration did. This is a software best practice ;)

But now that we have these migrations, how do we apply them to our database?

First we're going to copy the migrations to the right place and then "run them" inside the container:

~~~ console
sudo cp migrations/*up.sql data/postgres/
docker-compose exec tad psql -U postgres -d tadpgweb -1 -f /var/lib/postgresql/data/001_create_table_up.sql
docker-compose exec tad psql -U postgres -d tadpgweb -1 -f /var/lib/postgresql/data/002_alter_table_up.sql
docker-compose exec tad psql -U postgres -d tadpgweb -1 -f /var/lib/postgresql/data/003_alter_table_up.sql
docker-compose exec tad psql -U postgres -d tadpgweb -1 -f /var/lib/postgresql/data/004_data_migration_up.sql
~~~

SQL syntax isn't very mysterious, but if you're a little rusty there are lots of materials available out there. Among them the [codecademy SQL course](https://www.codecademy.com/learn/learn-sql) and the [SQL tutorial from GeeksForGeeks](https://www.geeksforgeeks.org/sql-tutorial/).

## A client to interact with the database

There are many clients/apps we can use to interact with a database like [pgAdmin](https://www.pgadmin.org/) and the [psql](https://www.postgresql.org/docs/current/static/app-psql.html) CLI. When we ran our migrations we used PSQL to apply them. Beyond those, today we're going to learn how to use a web client called [pgWeb](http://sosedoff.github.io/pgweb/).

Written in [Go](http://golang.org/), pgweb is lighter than the other options and lets you do the most basic operations like the ones from our 4 migrations. First [install it in whichever way you prefer](https://github.com/sosedoff/pgweb#installation). Since I have Go configured on my computer I just went with `go get`:

~~~ console
go get github.com/sosedoff/pgweb
~~~

Now to run it just grab a terminal and run the following command:

~~~ console
pgweb
~~~

And the result will be the following:

![terminal running pgweb](/images/postgresql/pgweb-terminal.webp)

Now just head to your favorite browser and go to `http://localhost:8081/` and you'll see the connection screen:

![pgweb database connection page](/images/postgresql/pgweb-connection.webp)

Then just fill in the blanks:

![pgweb database connection page with filled data](/images/postgresql/pgweb-connection-filled.webp)

and click `Connect` to be taken to the page:

![pgweb initial page after connection](/images/postgresql/pgweb-after-connection.webp)

## My favorite things about pgweb

Although it's not as complete as a pgAdmin, pgweb has all the functions for daily and quick use.

### Running queries: `Query`

With pgweb you can even create tables, but you can also make simpler queries like a `SELECT` and see the results just below:

![running a query](/images/postgresql/pgweb-query.webp)

Beyond that, the coolest part is inspecting the details of a query by clicking the `Explain Query` button:

![query details](/images/postgresql/pgweb-query-explain.webp)

### Row inspection: `Rows`

Want to see the rows in each table? Click on the table in the left side menu and click the `Rows` tab to show the records of that table:

![clientes table rows](/images/postgresql/pgweb-rows.webp)

### Using filters: `Rows`

Still on the `Rows` tab we can see and run simple filters like selecting all rows that have `id` greater than `1` for example:

![filter of id greater than one](/images/postgresql/pgweb-rows-filter.webp)

### Table structure inspection: `Structure`

To see a complete listing of each table's structure, again click on the chosen table in the menu on the left of the screen and click the `Structure` tab:

![clientes table structure tab](/images/postgresql/pgweb-structure.webp)

### History: `History`

Also, all the actions we've taken are recorded in the `History` tab:

![query history](/images/postgresql/pgweb-history.webp)

---

Cool right? Whether you're a beginner in databases looking for a way to practice your studies or someone more experienced doing small and quick tests, here's an alternative way to interact with your database ;)

## Links

- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)
# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

## Db setup
webpack server takes client side and ships to browser.
DB serves data out of MongoDB.
Real DB to persist songs and lyrics
MongoDB setup for free on MongoLab.com

free sandbox

## Review

Graphql server --> Apollo Server

gql server holds all data
apollo is point of contact, makes sure things are distributed

apollo provider
--> apollo store and react FE
Root

Query
Songlist
children
presentation

centralize queries then pass them down
from root component

## Optimisitc Responses
call mutation
guess at response
ui updates
// instantly rerender

issued as network request
response comes back

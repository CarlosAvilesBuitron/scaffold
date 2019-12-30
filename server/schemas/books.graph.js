const 
    graphql = require('graphql'),
    {GraphQLSchema} = graphql,
    RootQuery = require('../graph-entry/books.entry'),
    Mutation = require('../graph-mutations/books.mutations');

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});


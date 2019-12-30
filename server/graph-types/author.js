const graphql = require('graphql');
const lodash = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
} = graphql;

let library_data = require('../services/data');
let books = library_data.books;

const BookType = require('./book');

module.exports = new GraphQLObjectType({
    name: 'Author',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        nationality: {type: GraphQLString},
        age: {type:GraphQLInt},
        deceased: {type:GraphQLBoolean},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return lodash.filter(books, {authorid: parent.id});
            }
        }
    })
 });
const graphql = require('graphql');
const lodash = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLID,
    GraphQLList,
} = graphql;

let 
    library_data = require('../services/data'),
    books = library_data.books,
    authors = library_data.authors;

const 
    BookType = require('../graph-types/book');
    AuthorType = require('../graph-types/author');

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,args){
                return lodash.find(books, {id: args.id});
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return books;
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,args){
                return lodash.find(authors, {id: args.id});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent,args){
                return authors;
            }
        }
    }
});
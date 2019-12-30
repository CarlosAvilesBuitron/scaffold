const graphql = require('graphql');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLNonNull
} = graphql;

let 
    library_data = require('../services/data'),
    books = library_data.books,
    authors = library_data.authors;

const 
    BookType = require('../graph-types/book');
    AuthorType = require('../graph-types/author');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
         addAuthor:{
             type:AuthorType,
             args:{
                 name: {type: new GraphQLNonNull(GraphQLString)},
                 nationality: {type: new GraphQLNonNull(GraphQLString)},
                 age:{type: new GraphQLNonNull(GraphQLInt)},
                 deceased: {type: new GraphQLNonNull(GraphQLBoolean)},
                 id:{type: new GraphQLNonNull(GraphQLID)}
             },
             resolve(parent,args){
                 let newAuthor = {
                   name: args.name,
                   nationality:args.nationality,
                   age: args.age,
                   deceased:args.deceased,
                   id:args.id
                 };
                 authors.push(newAuthor);
                 return newAuthor;
             }
         },
         addBook:{
             type:BookType,
             args:{
                 name: {type: new GraphQLNonNull(GraphQLString)},
                 id:{type: new GraphQLNonNull(GraphQLID)},
                 genre: {type: new GraphQLNonNull(GraphQLString)},
                 authorid: {type: new GraphQLNonNull(GraphQLID)}
             },
             resolve(parent,args){
                 let newBook = {
                     name: args.name,
                     id: args.id,
                     genre: args.name,
                     authorid: args.authorid
                 };
                 books.push(newBook);
                 return newBook;
             }
         }
    }
 });
 
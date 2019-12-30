const graphql = require('graphql');
const lodash = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID,
} = graphql;

let library_data = require('../services/data');
let authors = library_data.authors;

module.exports = new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                return lodash.find(authors, {id: parent.authorid});
            } 
        }
    })
 });
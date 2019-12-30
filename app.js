const 
    express = require('express'),
    glob = require('glob'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    graphqlHTTP = require('express-graphql');
    
//import graphql schemas
const books_schema = require('./server/schemas/books.graph');

//set middleware
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//graphql endpoints
app.use('/server/book-graph',graphqlHTTP({
    schema: books_schema,
    graphiql:true
}));


//inital route used for health monitoring
app.get('/server/health',(req,res)=>{
   res.status(200).send({
      status:'success',
      message: 'Route Healthy',
      data: {}
   }); 
});

//require routes using glob
glob.sync('./server/rest-routes/*.js').forEach((file)=>{
  require(path.resolve(file))(app);
});

//export app
module.exports = app;
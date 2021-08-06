
const express = require("express"),
      expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull        
} = require("graphql");

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: ()=>({
            message: {
                type: GraphQLString,
                resolve: () => "Hello World"
            },
            himansh: {
                type: GraphQLString,
                resolve: () => 5
            }
        })
    })
});

app.use('/graphql', expressGraphQL({
    graphiql: true, 
    schema: schema
  }));

app.listen(5000, () => {
    console.log("Server running on port 5000...");
});
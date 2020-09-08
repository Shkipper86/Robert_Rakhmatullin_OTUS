const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.graphql');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({port: 4000}).then(({url}) => {
    console.log(`The server is running on URL: ${url}`);
});

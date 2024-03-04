import express, { Router } from "express";
import bodyParser from 'body-parser';
import { ApolloServer } from "apollo-server-express";
import { setupRoutes } from "./routes";
import { createSchema } from "../graphql/graphql-utils";
import { resolvers } from "../graphql/resolvers";

export const setupServer = async () => {
    const app = express();
    const router: Router = express.Router();
    const routes = setupRoutes(router);
    const typeDefs = createSchema()
    
    app.use(bodyParser.json());
    app.use('/test', routes);

    const server = new ApolloServer({typeDefs, resolvers});
    server.applyMiddleware({ app, path: 'graphql'});
    
    app.listen(4000, () => {
        console.log('Server is running on localhost');
    })
}
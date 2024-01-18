import express, {Express} from "express";
import { createHandler } from 'graphql-http/lib/use/http';
import expressPlayground from 'graphql-playground-middleware-express'
import {schema} from "./schema/schema";

const app: Express = express();

app.all('/graphql', createHandler({schema}))
app.get('/playground', expressPlayground({endpoint: 'graphql'}))

app.listen(4000, (): void => {
    console.log("Listening...")
});

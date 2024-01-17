import express, {Express} from "express";
import { createHandler } from 'graphql-http/lib/use/http';

const app: Express = express();
app.use('/graphql', createHandler({}))

app.listen(4000, (): void => {
    console.log("Listening...")
});

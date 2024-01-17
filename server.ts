import express, {Express} from "express";

const app: Express = express();

app.listen(4000, (): void => {
    console.log("Listening...")
});
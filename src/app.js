import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import boardRouter from "./routers/boardRouter";

const PORT = 7000;

const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(helmet());
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", boardRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🥕`)
});
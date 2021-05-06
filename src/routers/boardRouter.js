import express from "express";
import {
    homeController,
    detailController,
    createController,
    editController,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/", homeController)
boardRouter.get("/detail", detailController)
boardRouter.get("/create", createController)
boardRouter.get("/edit", editController)


export default boardRouter;
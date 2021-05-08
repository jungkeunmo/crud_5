import express from "express";
import {
    homeController,
    detailController,
    createController,
    editController,
    createBoardController,
    deleteBoardController,
    editBoardController
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/", homeController);
boardRouter.get("/detail", detailController);
boardRouter.get("/create", createController);

boardRouter.post("/createBoard", createBoardController);
boardRouter.post("/deleteBoard", deleteBoardController);
boardRouter.post("/editBoard", editBoardController);

boardRouter.get("/edit", editController);




export default boardRouter;
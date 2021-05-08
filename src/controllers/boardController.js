import Board from "../models/Board";
import dotenv from "dotenv";
dotenv.config();

export const homeController = async (req, res) => {
    
    try{
        const result = await Board.find().sort({ created: -1 });

        res.render("home", { boardList: result });
    } catch (e) {
        console.log(e);
        res.render("home", { boardList: [] });
    }
};

export const detailController = async (req, res) => {

    const {
        query: { id },
    } = req;

    const mode = process.env.NODE_ENV;

    let IS_DEV = false;

    if (mode === "develop") IS_DEV = true;


    try {
        const result = await Board.findOne({_id : id});

        res.render("detail", { data : result, dev: IS_DEV });
    }catch (e) {
        console.log(e);
        homeController(req, res);
    }

};

export const createController = (req, res) => {
    res.render("create");
};

export const createBoardController = async (req, res) => {
    const {
        body : { title, author, desc },
    } = req

    try {
        const D = new Date();
        let year = D.getFullYear();
        let month = D.getMonth() + 1;
        let date = D.getDate();

        month = month < 10 ? `0${month}` : month;
        date = date < 10 ? `0${date}` : date;

        const resultDate = `${year}-${month}-${date}`;

        const result = await Board.create({
            title: title,
            description: desc,
            author: author,
            created: resultDate,
        });
        
        homeController(req, res);
    } catch (e) {
        console.log(e);
        homeController(req, res);
    }
};

export const editController = async(req, res) => {

    const {
        query: { id },
    } = req;

    try {
        const result = await Board.findOne({ _id: id });

        res.render("edit", { data: result });
    }catch (e) {
        console.log(e);
        homeController(req, res);
    }
};


export const deleteBoardController = async(req, res) => {    
    const {
        body: { id },
    } = req;

    try {
        const result = await Board.deleteOne({ _id: id });
        homeController(req, res);
    } catch (e) {
        console.log(e);
        homeController(req, res);
    }

};

export const editBoardController = async(req, res) => {    
    const {
        body: { id, title, desc, author },
    } = req;

    try {
        const result = await Board.updateOne({ _id: id }, {
            $set : {
                title: title,
                description : desc,
                author: author,
            },
        });
        homeController(req, res);
    } catch (e) {
        console.log(e);
        homeController(req, res);
    }

};
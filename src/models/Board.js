import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Board = new Schema(
    {
        title : {
            type: String,
            required : true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        created: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model(`Board`, Board, `Board`);